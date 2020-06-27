# GroupVine Help Documentation

## Goals

* Support conditionals, so that, for instance, a Free Service account
  won't be shown details on unavailable features, and advanced notes
  can be hidden unless the user enables them via a checkbox.

* Support embedded support notes, only visible to the GV support team.

* Use Markdown wherever possible for all documentation.  Currently,
  the sole exception case is the Topics page, for more
  compact/friendly initial navigation.

* Online presentation on GitHub should be reasonable (though will
  always show **all** documentation; i.e., won't obey 'conditional'
  documentation sections).  This will permit optional editing and
  previewing directly online on GitHub.

## Approach

* Use ```<span class="xxx">``` blocks to surround conditionnal sections.
```<div>``` elements can't be used for this since Markdown skips over all
block-level elements, so default presentation, e.g., on GitHub, would have
just the raw text within these elements.

* In GroupVine documentation, use Javascript to show/hide span sections as
appropriate, and here these are converted to divs, after pre-processing
the contents.

## Documentation Guide

* Use Markdown for **all** styling (except for styling added to conditional "adv"
"support", and "todo" blocks).  E.g., see [here](https://guides.github.com/features/mastering-markdown/) for GitHub-style Markdown guide.

* To permit automatically scrolling to section and subsection headings (# and ## headings in Markdown), each such heading
  should be immediately followed by an id tag, like:

```
# Introduction to Sub-Groups
<span id="sub-groups-intro"></span>
```

* For conditional sections, enclose the conditional Markdown with
  ```<span>``` elements, like the following, including the blank lines before
  and after the opening and closing ```<span>``` tags:

```

<span class="g4s sub">

... Conditionally-included Markdown documentation

</span>


```

* The following tags are available for the conditionals related to account service levels:

    * **free**  Free Service accounts
    * **g4s**  GroupVine 4 School accounts
    * **sub**  Subscription and Full-features trial accounts

* The following "depth" related tags are also available:

    * **adv**  If the user has checked the "advanced features" checkbox.
    * **support** GroupVine support notes, if "support=1" is added as a
      query arg.  (Still, should **NOT** include any information we
      wouldn't want to show to user, in case they add this support=1
      query arg themself ... may add security to this later.)
    * **todo** TODO blocks, currently always shown, but
      will later be hidden unless in support mode.

* Note that if these class tags may also be used on block-level
  elements (like div or tr) for conditional code, but only if all
  content is already in HTML (frowned-on except possibly for Topics
  page), since these blocks will be ignored by the Markdown converter.
  

## Updating Online Documentation

To update the test or production servers, go to the admin-help page, e.g.,
[https://admin.trivy.email/help](https://admin.trivy.email/help).
