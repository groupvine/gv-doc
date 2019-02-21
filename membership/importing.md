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

<div class="support">  <!-- START SUPPORT -->

When importing a new member, the imported member's primary ('email')
address is given a high priority when matching (or not matching)
existing user records.

* When that primary address matches any existing user record (whether
by their primary or one of their alternate addresses), then that
existing user record is used to represent this new account or group
member.  If the importing member also has alternate
('emailAlt[N]') address(es) that happen to match different
existing user records, those alternate addresses of the member being
imported are ignored.

* When that primary address does not match any existing user record,
then a **new** user record is created based on this primary address,
whether or not the member being imported has any alternate addresses
that do match existing user records.  This new user record will also
have the alternate addresses of the member being imported that don't
match any existing user's addresses (the ones that do match existing
user records will be ignored).

</div>  <!-- END SUPPORT -->


## Member attributes

To define attributes (which can then be included in personalized,
group emails), add a header row to your CSV import file, put the
member email addresses under an "email" column, and then add
"[attribute name]" columns for your custom attributes.  

For example:

| email                       | first      | last       | favcolor       |
|:----------------------------|:-----------|:-----------|:---------------|
|tim.tangelo@example.com      | Tim        | Tangelo    | blue           |
|beth.blueberry@example.com   | Beth       | Blueberry  | black          |
|quiet.quinn@example.com      | Quiet      | Quinn      | red            |

You can now include these variables in your email surrounded by 
```{% raw %} {{ {% endraw %} ... {% raw %} }} {% endraw %}```, 
such as:

```
Hello {% raw %}{{{% endraw %} first {% raw %}}}{% endraw %}, 

We see you're a "{% raw %}{{ {% endraw %} favcolor {% raw %} }}{% endraw %}" person,
so look for your {% raw %} {{ {% endraw %} favcolor {% raw %} }} {% endraw %} BingoTech
bingo board coming to your mail box soon!

Bingo!
```

Note that a small number of attribute names are reserved, such as 'email'.  
You can checkout the full list [here](./reservedatts?view=GV-SET-VIEW).


## Making Membership Changes

By default, an **Import** will only make member additions or fill-in
information that's missing.  To make modifications of your existing
member information, use the **Import Modifications** button.

<div class="adv">   <!-- START ADVANCED -->

Or, if sending an email, replace ```~import``` with ```~importmod``` in the email
address.  So, the above address would instead be:

```
~importmod='followers.csv'~~bingotech@trivy.email
```

</div>   <!-- END ADVANCED -->


<div class="gv">   <!-- START GROUPVINE -->

## Roles

By default, new recipients are given the "Member" role, however, you
can also have an aribtrary number of Administrators and Editors.

*  **Member** Receives and can engage with group emails (unless opted-out). 
(or abbreviation '**x**').

*  **Editor**  Can also create and send group emails.

*  **Administrator** Can also manage group membership and approve moderated 
group emails (or abbreviation '**Admin**').

To set or change a member's role, specify each member's role in a
"role" column, like this (the first, last, and favcolor custom attributes are just 
shown to give a more complete import example, but aren't necessary).


| email                       | first      | last       | favcolor       |  role   |
|:----------------------------|:-----------|:-----------|:---------------|:--------|
|tim.tangelo@example.com      | Tim        | Tangelo    | blue           | Admin   |
|beth.blueberry@example.com   | Beth       | Blueberry  | black          |   x     |
|quiet.quinn@example.com      | Quiet      | Quinn      | red            | Editor  |


</div>   <!-- END GROUPVINE -->


## Lists

Lists allow you to target emails by certain sub-sets of recipients.
For example, the following import would specify which members are on
one of two lists (this time, we've simplified the import, removing the
custom attributes and role columns, to just update the list
memberships):


| email                       | musicians  | golfers    |
|:----------------------------|:-----------|:-----------|
|tim.tangelo@example.com      | x          |            |
|beth.blueberry@example.com   | x          | x          |
|quiet.quinn@example.com      |            | x          |


<div class="gv">   <!-- START GROUPVINE -->

## Groups

Groups allow ...

Group columns are in the format group:[group name] with the values
giving each member's role in that group.  Whereas a member's role for
the entire account is under the optional "role" column (see above),
the member's role within a specific sub-group is uncer the 
group:[group name] column.

... [otherwise like GroupVine v1]

</div>   <!-- END GROUPVINE -->


## Other notes

- Email addresses can be imported either with or without an associated "display name", 
for example, like:

  - tim.tangelo@example.com, or

  - "Tim Tangelo" \<tim.tangelo@example.com>
  
