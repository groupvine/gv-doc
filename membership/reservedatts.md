---
layout: default
title: Reserved Member Attributes
---

# Reserved Member Attributes

Custom member attributes may consist of most characters other than
colons (':') and a handful of others, and must avoid the following
reserved member attributes.

Email delivery:

*  **email**  member's primary email address,
*  **emailAltN** alternate addresses, where N is an optional integer (2, 3, ...),
*  **optedOut** indicates whether the member has opted out (or hasn't yet opted-in) to receiving emails.
*  **firstName** member's first name
*  **lastName** member's last name
*  **photoUrl** web address of member's profile photo

Identification:

*  **role** Member's role in the account, one of Admininistrator (or abbrev. 'Admin'), 
   Editor, or Member (or abbrev. 'x')
*  **id**    number used internally to identify users.
*  **appId** number used internally to identify member applications.

Text notifications:

*  **mobileNumber**  mobile phone number for receiving text notifications of new group emails,
*  **mobileService** mobile phone service provider
    (e.g., att, verizon, sprint, tmobile, ...),
*  **textingMode** one of "none" (no notifications sent), "urgent"
    (notifications only sent for emails marked as "urgent"), or "all"
    (notifications sent for all group emails).

System-reserved:

* **sys**, **data**, and **std** are reserved for system use.

<div class="trial sub g4s">

Miscellanous:

* Note that in addition to member attributes, import files are also
  used to specify sub-group and list membership, using header field
  labels prefixed by "list:" for list membership and "group:" for
  sub-group membership.  See [Membership
  Lists](./lists[LINK-QARGS]) and [Membership
  Sub-groups](./groups[LINK-QARGS]) for more information on
  these.

* Additionally, import columns with header labels prefixed with
  "delivery:" (used in exports) and "ignore:" are silently ignored
  during imports.

</div>
