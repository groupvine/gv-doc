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

* Use ```<span class="xxx">``` blocks to surround conditional sections.
```<div>``` elements can't be used for this since Markdown skips over all
block-level elements, so default presentation, e.g., on GitHub, would have
just the raw text within these ```<div>```elements.

* In GroupVine documentation, use Javascript to show/hide ```<span>```
sections as appropriate, and then these sections are converted to
divs, after pre-processing the contents.

## Documentation Guide

* Use Markdown for (nearly) all styling (except for styling added to
  conditional "adv" "support", and "todo" blocks, "highlight"
  boxes mentioned below, and possibly the
  initial Topics page).  E.g., see
  [here](https://guides.github.com/features/mastering-markdown/) for
  GitHub-style Markdown guide.

* Certain sentences or paragraphs can be highlighted (enclosed in
  a box) by surrounding with ```<span class="highlight"> ... </span>```.

* To permit automatically scrolling to section and sub-section headings
  (# and ## headings in Markdown), each such heading should be
  immediately followed by an id tag, like:

```
# Introduction to Sub-Groups
<span id="sub-groups-intro"></span>
```

* For conditional sections, enclose the conditional Markdown with
  ```<span>``` elements, like the following:

```

<span class="g4s sub">

Conditionally-included Markdown documentation that's only shown in
GroupVine 4 School and Subscription documentation modes.

</span>


```

* The conditional tags related to account service levels are:

    * **free**  Free Service accounts
    * **g4s**  GroupVine 4 School accounts
    * **sub**  Subscription and Full-features trial accounts

* The following "depth" related tags are also available:

    * **adv**  If the user has checked the "advanced features" checkbox.
    * **support** GroupVine support notes, displayed if "support=1" is added as a
      query arg.  (Should **NOT** include any information we
      wouldn't want to show to users, in case they add this support=1
      query arg themself ... may add security to this later.)
    * **todo** "hidden unless in support mode."

* Note that these class tags may also be used on block-level
  elements (like div or tr) for conditional code, but only if all the
  enclosed content is in pure HTML (generally frowned-on),
  since these blocks will be ignored by the Markdown converter when
  viewed on GitHub.

## Brand-related notes

* Web and email addresses in the documentation to GroupVine should use
  the groupvine.com domain.  Examples include support@groupvine.com or
  the lighthouselabs.groupvine.com example site.  If the help pages are
  being reached by a trivy.email address, then all "groupvine.com"
  references will be changed to "trivy.email"

* Similarly, to insert "GroupVine" or "Trivy" depending on the domain 
  used to reach the help site, insert "GV-BRAND" and it will be
  changed to the appropriate brand.

## "Internal" links to other doc pages or within home site

To ensure that the documentation mode (including the service level,
account id, advanced and support mode settings) are carried along to
the new page, each internal link should include a special query arg of
the form either [LINK-QARGS-DOC] or [LINK-QARGS] (if to a non-doc home
page).  E.g., like:

```
[importing membership](/4-membership/2-importing.md?[LINK-QARGS-DOC]#gv-import)
```


## Updating Online Documentation

To update the test or production servers, go to the admin-help page, e.g.,
[https://admin.trivy.email/help](https://admin.trivy.email/help).
