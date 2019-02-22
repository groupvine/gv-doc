---
layout: default
title: Reserved Member Attributes
---

# Reserved Member Attributes

Custom member attributes may only consist of alphanumeric and the
underscore ('_') character.  Also, they must avoid the following
reserved member attributes.

Email delivery:

*  **email**  member's primary email address,
*  **emailAltN** alternate addresses, where N is an optional integer (2, 3, ...),
*  **optedOut** indicates whether the member has opted out (or hasn't yet opted-in) to receiving emails.

Identification:

*  **role** Member's role in the account, one of Admininistrator (or abbrev. 'Admin'), 
   Editor, or Member (or abbrev. 'x')
*  **id**   number used internally.

Text notifications::

*  **textingNumber**  mobile phone number for receiving text notifications of new group emails,
*  **textingService** mobile phone service provider
    (e.g., att, verizon, sprint, tmobile, ...),
*  **textingMode** one of "none" (no notifications sent), "urgent"
    (notifications only sent for emails marked as "urgent"), or "all"
    (notifications sent for all group emails).

