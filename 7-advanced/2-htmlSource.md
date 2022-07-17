<span id="gv-2htmlSource"></span>
# Direct HTML Editing

If enabled for your account, advanced users are able to insert and
edit the HTML source directly when composing your email.  There are
two modes for doing this as described below:

1. Direct Editing of HTML Source
2. Embedding HTML Blocks

<div style="text-align:center">
  <img src="/docimages/html-editing-options.png" width="75%">
</div>

<span id="gv-2htmlSource-editing"></span>
## Direct Editing of HTML Source

The "Source" HTML editing mode displays the current email, including
the portions entered using the regular WYSIWYG editor, as HTML
and allows you to edit the HTML directly.

Unlike the "Embedded HTML Blocks" (discussed below), this mode is more
fully integrated with the WYSIWYG features, and minor changes to
inserted HTML often occur when the email is saved, such as the change
of `<p>` tags to ```<div class="gv-p">...</div>``` tags (which otherwise
exhibit the same behavior as ```<p>...</p>``` tags, so the actual formatting
of paragraph elements would typically remain unchanged).

Also, default styling is applied to a number of HTML elements entered
using this mode. For example, ```<table>...</table>``` elements are
displayed with thin, light borders and some extra margins.  This is
typically appropriate for actual tables, however, HTML ```<table>```
elements are often instead used only for positioning elements in
emails (particularly due to limited email support for
'position'-related CSS elements). To avoid these borders and margins
around ```<table>``` elements, and some other default styling, wrap
your custom HTML in a class="gv-base-styling" element.  This could be
done by adding this class to an element that already wraps your email
content, or adding an overally ```<div>``` wrapper like this:

```
    <div class="gv-base-styling">
        ... your custom HTML ...
    </div>
```


<span id="gv-2htmlSource-embedded"></span>
## Embedding HTML Blocks

Adding Embedded HTML blocks in the editor allows you to enter or paste
HTML into an embedded editor widget and have it included in the email
exactly as entered, with little or no default GroupVine styling
applied.

Note that if the direct HTML source editing above works for your
email, it is generally preferred since it facilitates easier
integration with GroupVine-specific email elements, such as Email
Widgets.  However, when including HTML exactly as entered is required,
these embedded HTML blocks can be used.


## Test first!

As always, check the formatting in Preview page, and when sending to a
large recipient list (and particularly when editing/adding custom
HTML), we strongly recommend sending and reviewing a DRAFT email first
in common email readers for your membership, including if appropriate,
MS Outlook which has a number of unique limitations (e.g., see
[here](https://www.litmus.com/blog/a-guide-to-rendering-differences-in-microsoft-outlook-clients),
[here](https://mailtrap.io/blog/email-rendering-issues-outlook), or
[here](https://elasticemail.com/blog/transactional_email/email-rendering-issues-in-outlook-and-hacks-to-save-the-day)).



