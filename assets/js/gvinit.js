//
// Special content boxes
//

const supportBox = `
<div class="supportbox">
  <div class="title">Support notes</div>
  <div class="contents"></div>          
</div>
`;

const advBox = `
<div class="advBox">
  <div class="title">Advanced notes</div>
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

//
// Show/hide page content based on mode query arg
//

$(document).ready( function() {
    let converter = new showdown.Converter();
    converter.setFlavor('github');

    // Unfortunately, the github-pages/jekyll converter doesn't
    // operate within html elements like:
    //    <div class="gv-only"> .. </div>
    // So, do our own own github-compatible Markdown conversion
    // here for our mode-specific sections.

    $('.trivy, .gv, .adv, .support').each( function() {
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

    let mode = queryStr('view');
    if (!mode || !mode.trim()) {
        mode = 'trivy';
    }

    mode = mode.toLowerCase();

    $('a').each( function () {
        let src = $(this).attr('href');
        if (src) {
            src = src.replace(/view=GV-SET-VIEW/i, 'view=' + mode);
            $(this).attr('href', src);
        }
    });

    //
    // Hide sections that shouldn't be viewed according to
    // the view mode.
    //

    switch(mode) {
    case 'gv':
        $('.trivy').show();
        $('.gv').show();
        $('.adv').hide();
        $('.support').hide();

        $('.only').hide();
        $('.gv.only').show();
        break;
    case 'adv':
        $('.trivy').show();
        $('.gv').show();
        $('.adv').show();
        $('.support').hide();

        $('.only').hide();
        $('.adv.only').show();
        break;
    case 'support':
        $('.trivy').show();
        $('.gv').show();
        $('.adv').show();
        $('.support').show();

        $('.only').hide();
        $('.support.only').show();
        break;
    case 'trivy':
    default:
        $('.trivy').show();
        $('.gv').hide();
        $('.adv').hide();
        $('.support').hide();

        $('.only').hide();
        $('.trivy.only').show();
    }
});

