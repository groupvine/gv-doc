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

