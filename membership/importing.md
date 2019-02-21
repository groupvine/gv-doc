---
layout: default
title: Membership Import
---

# Membership Import

## Simple, addresses-only

An easy way to add a list of recipients to your account is to use a
spreadsheet program (e.g., Excel, Numbers, Google Spreadsheet) to
create and save a "CSV" file that simply lists your recipient's email
addresses, like the following:

```
tim.tangelo@example.com
beth.blueberry@example.com
quiet.quinn@example.com
```

Then upload the spreadsheet using the **Import** button on your
account's membership page.

<div class="adv">  <!-- START ADVANCED -->

Or, if you prefer, you can email the file to your account's
server to be imported.  For example, if your account name is
"bingotech" and your import file is names "followers.csv",
then send an email with this file attached to address:

```
~import='followers.csv'~~bingotech@trivy.email
```

And, to have your up-to-date account membership emailed to you, send 
an email to:

```
~export~~bingotech@trivy.email
```

</div>  <!-- END ADVANCED -->


## Member attributes

To define attributes (which can then be included in personalized,
group emails), add a header row to your CSV import file, put the
member email addresses under an "email" column, and then add
"\<attribute name\>" columns for your custom attributes.  

For example:

| email                       | first      | last       | favcolor       |
|:----------------------------|:-----------|:-----------|:---------------|
|tim.tangelo@example.com      | Tim        | Tangelo    | blue           |
|beth.blueberry@example.com   | Beth       | Blueberry  | black          |
|quiet.quinn@example.com      | Quiet      | Quinn      | red            |


### Reserved Attributes

The following member attributes are reserved (and thus, can't be used to
define your custom attributes).

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

Also, member attributes may not begin with the following prefixes:

*  **group:**    used for setting group memberhips and roles,
*  **list:**     used for setting list memberships,
*  **delivery:** used in exports for reporting delivery statistics, or
*  **ignored:**  informational columnn, ignored by import process.


## Making Membership Changes

To make modifications of your existing member information, use
"~importmod" in the email address in place of "~import".


## Groups & lists

Group member roles:

*  **Member** Receives and can engage with group emails (unless opted-out). 
   (or abbreviation '**x**').
*  **Editor**  Can also create and send group emails.
*  **Administrator** Can also manage group membership and approve moderated 
   group emails (or abbreviation '**Admin**').

Group columns are in the format group:\<group name\> with the values
giving each member's role in that group.  The member's role for the
whole account is under the optional "role" column.

... [like GroupVine v1 except column header field 'group:.' renamed 'role']


## Other notes

- Email addresses can be imported either with or without an associated "display name", 
  for example, like:
  - tim.tangelo@example.com, or
  - "Tim Tangelo" \<tim.tangelo@example.com\>
  
