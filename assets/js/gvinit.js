//
// Special content boxes
//

const supportBox = `
<div class="supportbox">
  <div class="title">SUPPORT NOTE</div>
  <div class="contents"></div>          
</div>
`;

const advBox = `
<div class="advbox">
  <div class="title">Advanced note</div>
  <div class="contents"></div>          
</div>
`;

//
// queryStr() function from:
// https://stackoverflow.com/questions/7731778/get-query-string-parameters-with-jquery
//
function queryStr(key) {
    // key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
    var match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}

/*
function locationWithQueryStr(key, value) {
    // key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
    var match = location.search.match(new RegExp("^(.*[?&]"+key+"=)([^&]+)(.*)$"));
    var newQuery;
    if (match) {
        newQuery = match[1] + encodeURIComponent(value) + match[3];
    } else if (location.search && location.search.indexOf('?') !== -1) {
        newQuery = location.search.replace('?', '?' + key + '=' + encodeURIComponent(value) + '&');
    } else {
        newQuery =  '?' + key + '=' + encodeURIComponent(value);
    }
    return location.pathname + newQuery + location.hash;
}
*/

//
// Show/hide page content based on mode query arg
//

$(document).ready( function() {
    let converter = new showdown.Converter();
    converter.setFlavor('github');
    converter.setOption('simpleLineBreaks', false);

    // Unfortunately, the github-pages/jekyll converter doesn't
    // operate within html elements like:
    //    <div class="gv-only"> .. </div>
    // So, do our own own github-compatible Markdown conversion
    // here for our mode-specific sections.
    

    //
    // Do view-specific view changes
    //

    $('.free, .gv, .adv, .support').each( function() {
        if ($(this).hasClass('html')) {
            // No convrsion, already in html
            return;
        }

        let md   = $(this).text();
        let html = converter.makeHtml(md);

        if ($(this).hasClass('free') || $(this).hasClass('gv')) {
            $(this).html(html);
        } else if ($(this).hasClass('adv')) {
            $(this).html(advBox);
            $(this).find('.contents').html(html);
        } else if ($(this).hasClass('support')) {
            $(this).html(supportBox);
            $(this).find('.contents').html(html);
        }
    });

    //
    // Get the view query string and set it on all links
    //

    let mode = queryStr('vw');
    if (!mode || !mode.trim()) {
        mode = 'gv';
    }

    mode = mode.toLowerCase();

    let service = queryStr('sv');
    if (!service || !service.trim()) {
        service = 'groupvine';
    }

    function computeQueryStr() {
        let res = '';
        if (mode !== 'gv') {
            res = 'vw=' + mode;
        }
        if (service !== 'groupvine') {
            if (res) { res += '&'; }
            res += 'sv=' + service;
        }
        return res;
    }

    //
    // Hide sections that shouldn't be viewed according to
    // the view mode.
    //

    switch(mode) {
    case 'adv':
        $('.free').show();
        $('.gv').show();
        $('.adv').show();
        $('.support').hide();

        $('.only').hide();
        $('.adv.only').show();
        break;
    case 'support':
        $('.free').show();
        $('.gv').show();
        $('.adv').show();
        $('.support').show();

        $('.only').hide();
        $('.support.only').show();
        break;
    case 'free':
        $('.free').show();
        $('.gv').hide();
        $('.adv').hide();
        $('.support').hide();

        $('.only').hide();
        $('.free.only').show();
        break;
    case 'gv':
    default:
        $('.free').show();
        $('.gv').show();
        $('.adv').hide();
        $('.support').hide();

        $('.only').hide();
        $('.gv.only').show();
    }

    //
    // Update service
    //

    if (service === 'trivy') {
        // Update the favicon
        $('link[rel="icon"]').each( function() {
            $(this).attr("href", "/assets/img/favicon-trivy3.png");
        });

        // Update all links
        let newBody = $("body").html().replace(/groupvine\.email/g, 'trivy.email');
        $("body").html(newBody);

        $("#gv-logo").hide();
        $("#trivy-logo").show();
    }

    // Set view mode and service on all internal links

    let qArgStr = computeQueryStr();

    $('a').each( function () {
        let src = $(this).attr('href');
        if (src) {
            src = src.replace(/[LINK-QARGS]/i, '?' + qArgStr);
            $(this).attr('href', src);
        }
    });

    //
    // Replace GV-SERVICE
    // 
    // TBD: No longer used??
    //

    newBody = $("body").html().replace(/GV\-SERVICE/g, service);
    $("body").html(newBody);

    //
    // Handle view menu.
    // Attach event after possibly modifying content above!
    //

    $("#docview").val(mode);

    $("#docview").change( function() {
        // Update mode
        mode = $(this).val();

        // Jump to new mode page
        let url = window.location.pathname;
        let qStr = computeQueryStr();
        if (qStr) {
            url += '?' + qStr;
        }
        window.location = url;

        // window.location = locationWithQueryStr('vw', $(this).val());
    });

    $('.wrapper').show();

//    setTimeout( () => {
//        // Now show the page
//        $('.loading').fadeOut(500);
//        $('.wrapper').fadeIn(500);
//    }, 1000);
});


