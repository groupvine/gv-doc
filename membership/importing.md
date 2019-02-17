# Membership Import

## Simple Example

Use a spreadsheet program (e.g., Excel, Numbers, Google Spreadsheet)
to create and save a "CSV" file with a simple list of your recipient
member's email addresses.  For example:

```
tim.tangelo@example.com
beth.blueberry@example.com
quiet.quinn@example.com
```

Then, create an email, attach the file (e.g., "emails.csv"), and send
to your account address (e.g., "bingotech" as the account name):

```
~import='emails.csv'~~bingotech@trivy.email
```

Want to see your resulting membership?  Send an email to:

```
~export~~bingotech@trivy.email
```

to get a membership export.


## Member attributes

To define attributes (which can then be included in personalized,
group emails), add a header row to your CSV import file, put the
member email addresses under an "email" column, and then add
"<attribute name>" columns for your custom attributes.  

For example:

| email                       | first      | last       | favcolor       |
|:----------------------------|:-----------|:-----------|:---------------|
|tim.tangelo@example.com      | Tim        | Tangelo    | blue           |
|beth.blueberry@example.com   | Beth       | Blueberry  | black          |
|quiet.quinn@example.com      | Quiet      | Quinn      | red            |


### Reserved Attributes

The following member attributes are reserved (and thus, can't be used to
define your custom attributes).

Memmber identification:

*  **email**  member's primary email address
*  **emailAltN** alternate addresses, where N is an optional integer (2, 3, ...) in
*  **id** number used internally

Opted-in/-out status:

*  **optedOut** indicates whether the member has opted out (or hasn't yet opted-in) to receiving emails.

Text notifications::

*  **textingNumber**  mobile phone number for receiving text notifications of new group emails
*  **textingCarrier** mobile phone carrier or service provider
    (e.g., att, verizon, tmobile, ...)
*  **textingMode** one of "none" (no notifications sent), "urgent"
    (notifications only sent for emails marked as "urgent"), or "all"
    (notifications sent for all group emails)

Also, attributes may not begin with the following prefixes:

*  **group:**    used for setting group memberhips and roles
*  **list:**     used for setting list memberships
*  **delivery:** used in exports for reporting delivery statistics
*  **ignored:**  informational columnn which should be ignored in import process.


## Making Membership Changes

To change existing member information, use "~importmod" (for
import-modify) in the email address in place of "~import".


## Groups & lists

... [like GroupVine]


## Other notes

- Email addresses can imported using various formats, most commonly like
  one of the following:
  - tim.tangelo@example.com
  - "Tim Tangelo" <tim.tangelo@example.com>
  
