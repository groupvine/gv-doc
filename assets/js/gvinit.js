
$(document).ready( function() {
    let converter = new showdown.Converter();

    $('.gv-only').each( function() {
        let md   = $(this).text();
        let html = converter.makeHtml(md);
        $(this).html(html);
    });

    // Hide some content depending on query args
//    $('.gv-only').hide();

});

