# Reserved Member Attributes

Custom member attributes may consist of most characters other than
colons (':') and a handful of others, and must avoid the following
reserved member attributes.

Email delivery:

*  **Email**  member's primary email address,
*  **Email AltN** alternate addresses, where N is an optional integer (2, 3, ...),
*  **Opted Out** indicates whether the member has opted out (or hasn't yet opted-in) to receiving emails.

Identification:

*  **First Name** member's first name
*  **Last Name** member's last name
*  **Photo URL** web address of member's profile photo
*  **id**    number used internally to identify users.

Membership:

*  **Role** Member's role in the account, one of Admininistrator (or abbrev. 'Admin'), 
   Editor, or Member (or abbrev. 'x')
*  **appId** number used internally to identify member applications.
*  **appStatus** used internally to identify member application status.
* **Membership Vis** membership visibility for non-Admins (when
    enabled by the account).  In increasing visibility, must be one
    of: 'None', 'Name', 'Email' or 'Phone'. Only settable by the
    member (or GroupVine system administrator).

Text notifications:

*  **Mobile Number**  mobile phone number for receiving text notifications of new group emails,
*  **Mobile Service** mobile phone service provider
    (e.g., att, verizon, sprint, tmobile, ...),
*  **Texting Mode** one of "none" (no notifications sent), "urgent"
    (notifications only sent for emails marked as "urgent"), or "all"
    (notifications sent for all group emails).

System-reserved:

* **sys**, **data**, and **std** are reserved for system use.

<span class="sub g4s">

Miscellanous:

* Note that in addition to member attributes, import files are also
  used to specify sub-group and list membership, using header field
  labels prefixed by "list:" for list membership and "group:" for
  sub-group membership.  See [Membership
  Lists](./lists?gv-qargs=0) and [Membership
  Sub-groups](./groups?gv-qargs=0) for more information on
  these.

* Additionally, import columns with header labels prefixed with
  "delivery:" (used in exports) and "ignore:" are silently ignored
  during imports.

</span>
