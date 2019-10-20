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
    //    <div class="g4s"> .. </div>
    // So, do our own own github-compatible Markdown conversion
    // here for our mode-specific sections.

    //
    // Process markdown in view-specific elements
    //

    $('.free, .trial, .sub, .g4s, .adv, .support, .gv, .trivy').each( function() {
        if ($(this).hasClass('html')) {
            // No convrsion, already in html
            return;
        }

        let md   = $(this).text();
        let html = converter.makeHtml(md);

        if ($(this).hasClass('adv')) {
            $(this).html(advBox);
            $(this).find('.contents').html(html);
        } else if ($(this).hasClass('support')) {
            $(this).html(supportBox);
            $(this).find('.contents').html(html);
        } else {
            $(this).html(html);
        }
    });


    //
    // Get the view query string and set it on all links
    //

    let mode = queryStr('vw');
    if (!mode || !mode.trim()) {
        mode = 'sub';
    }

    mode = mode.toLowerCase();

    let service = queryStr('sv');
    if (!service || !service.trim()) {
        service = 'groupvine';
    }

    let support = queryStr('support');
    if (support) {
        support = true;
    } else {
        support = false;
    }

    //
    // Show/hide advanced features and catch changes
    //

    let advanced = false;

    function checkAdv() {
        if ( $("#adv-checkbox").is(':checked') ) {
            advanced = true;
            $(".adv").show();
        } else {
            advanced = false;
            $(".adv").hide();
        }
    }

    if (queryStr('adv')) {
        setTimeout( () => {
            $("#adv-checkbox").prop("checked", true);
            checkAdv();
        }, 5);
    } else {
        setTimeout( () => {
            $("#adv-checkbox").prop("checked", false);
            checkAdv();
        }, 5);
    }

    $('body').on('change', '#adv-checkbox', function() {
        checkAdv();
    });


    function computeQueryStr() {
        let res = '';
        if (mode !== 'sub') {
            res = 'vw=' + mode;
        }
        if (service !== 'groupvine') {
            if (res) { res += '&'; }
            res += 'sv=' + service;
        }
        if (support) {
            if (res) { res += '&'; }
            res += 'support=1';
        }
        if (advanced) {
            if (res) { res += '&'; }
            res += 'adv=1';
        }
        return res;
    }

    //
    // Hide sections that shouldn't be viewed according to
    // the view mode.
    //

    // First, hide all
    $('.free, .trial, .sub, .g4s').hide();

    // Show the adv notes checkbox by default
    $("#adv-checkbox-wrapper").show();

    switch(mode) {
    case 'free':
        $('.free').show();
        setTimeout( () => {
            $("#adv-checkbox").prop("checked", false);  // uncheck
            checkAdv();
        }, 10);
        $("#adv-checkbox-wrapper").hide();   // hide adv feature checkbox
        break;
    case 'trial':
        $('.trial').show();
        break;
    case 'g4s':
        $('.g4s').show();
        break;
    case 'sub':
    default:
        $('.sub').show();
        break;
    }

    //
    // Show/hide service specific stuff
    // 
    if (service === 'trivy') {
        $(".trivy").show();
        $(".gv").hide();
    } else {
        $(".trivy").hide();
        $(".gv").show();
    }

    //
    // Show/hide support doc notes
    //

    if (support) {
        // Also show advanced features by default
        setTimeout( () => {
            $("#adv-checkbox").prop("checked", true);
            checkAdv();
        }, 10);
        $(".support").show();
    } else {
        $(".support").hide();
    }

    //
    // Update service
    //

    let capService = 'GroupVine';

    if (service === 'trivy') {
        capService = 'Trivy';

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
            if (qArgStr) {
                src = src.replace(/\[LINK-QARGS\]/i, '?' + qArgStr);
            } else {
                src = src.replace(/\[LINK-QARGS\]/i, '');
            }
            $(this).attr('href', src);
        }
    });

    //
    // Replace GV-SERVICE
    // 

    newBody = $("body").html().replace(/GV\-SERVICE/g, capService);
    $("body").html(newBody);

    newTitle = $("title").html().replace(/GV\-SERVICE/g, capService);
    $("title").html(newTitle);

    //
    // Handle view menu.
    // Attach event after possibly modifying content above!
    //

    $("#docview").val(mode);

    $('body').on('change', '#docview', function() {
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
});


