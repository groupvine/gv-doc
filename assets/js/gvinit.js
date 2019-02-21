let converter = new showdown.Converter();

$(document).ready( function() {
    $('.gv-only').each( function() {
        let md   = $(this).text();
        let html = converter.makeHtml(md);
        $(this).text(html);
    });

    // Hide some content depending on query args
//    $('.gv-only').hide();

});

