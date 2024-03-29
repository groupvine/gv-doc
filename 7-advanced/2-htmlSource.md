<span id="gv-2htmlSource"></span>
# Direct HTML Editing

If enabled for your account, advanced users are able to insert and
edit the HTML source directly when composing their email.  There are
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
and allows editing of the email's HTML source directly.

Unlike the "Embedded HTML Blocks" (discussed below), this mode is more
fully integrated with the WYSIWYG features, and minor changes to
inserted HTML often occur when the email is saved, such as the change
of &lt;p&gt; tags to &lt;div class="gv-p"&gt; tags (which otherwise
exhibit the same behavior as &lt;p&gt; tags, so the actual formatting
of paragraph elements would typically remain unchanged).

Also, default styling is applied to a number of HTML elements entered
using this mode. For example, &lt;table&gt; elements are displayed
with thin, light borders and some extra margins.  This is typically
appropriate for actual tables, however, HTML &lt;table&gt; elements
are often instead used only for positioning elements in emails
(particularly due to limited email support for 'position'-related CSS
elements). To avoid these borders and margins around &lt;table&gt;
elements, and some other default styling, wrap the custom HTML within
an element with class="gv-base-styling".  This could be done by adding
this class to an element that already wraps this email content, or
adding an overally &lt;div&gt; wrapper like this:

```
    <div class="gv-base-styling">
        ... your custom HTML ...
    </div>
```


<span id="gv-2htmlSource-embedded"></span>
## Embedding HTML Blocks

Adding Embedded HTML blocks in the editor allows entering or pasting
HTML into an embedded editor widget and have it included in the email
exactly as entered, with little or no default GroupVine styling
applied.

Note that if the direct HTML source editing above works, it is
generally preferred since it facilitates easier integration with
GroupVine-specific elements, such as Email Widgets.  However,
when including HTML exactly as entered is required, these embedded
HTML blocks can be used.


## Test first!

As always, check the formatting in Preview page, and when sending to a
large recipient list (and particularly when editing/adding custom
HTML), we strongly recommend sending and reviewing a DRAFT email first
in common email readers for your membership, including if appropriate,
MS Outlook which has a number of unique limitations (e.g., see
[here](https://www.litmus.com/blog/a-guide-to-rendering-differences-in-microsoft-outlook-clients),
[here](https://mailtrap.io/blog/email-rendering-issues-outlook), or
[here](https://elasticemail.com/blog/transactional_email/email-rendering-issues-in-outlook-and-hacks-to-save-the-day)).



