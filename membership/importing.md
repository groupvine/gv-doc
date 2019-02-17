# Membership Import

## Simple Example

Contents of your file ```emails.csv```:

```
tim.tangelo@example.com
beth.blueberry@example.com
quiet.quinn@example.com
```

Create an email, attach ```emails.csv```, and send to (using ```gvdev``` as the account name):

```
~import='emails.csv'~~gvdev@trivy.email
```

Want to see your resulting membership?  Send an email to:

```
~export~~gvdev@trivy.email
```

to get a membership export.


## Member attributes

To define attributes (which can then be included in personalized,
group emails), add a header row to your CSV import file, put the
member email addresses under a "user:email" column, and then add
"user:<attribute name>" columns for your custom attributes.  

For example:

| user:email                  | user:first | user:last  | user:favcolor  |
|:----------------------------|:-----------|:-----------|:---------------|
|tim.tangelo@example.com      | Tim        | Tangelo    | blue           |
|beth.blueberry@example.com   | Beth       | Blueberry  | black          |
|quiet.quinn@example.com      | Quiet      | Quinn      | red            |


### Reserved Attributes

The following user attribute are reserved (and thus, can't be used to
define your custom attributes).

Memmber email addresses:

*  *user:email*  member's primary email address

* *user:emailAlternateN* alternate addresses, where N is an integer (1, 2, ...)

Opted-in/-out status:

*  *user:optedOut* indicates whether the member has opted out (or hasn't yet opted-in) to receiving emails.

Text notifications::

*  *user:textingNumber*  mobile phone number for receiving text notifications of new group emails

* *user:textingCarrier* mobile phone carrier or service provider
    (e.g., att, verizon, tmobile, ...)

* *user:textingMode* one of "none" (no notifications sent), "urgent"
    (notifications only sent for emails marked as "urgent"), or "all"
    (notifications sent for all group emails)


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
  
