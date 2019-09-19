---
layout: default
title: Membership Import
---

# Membership Import

## Recipent addresses-only

An easy way to add a list of community members to your account is to use a
spreadsheet program (e.g., Excel, Numbers, Google Spreadsheet) to
create and save a "CSV" file that simply lists your recipient's email
addresses, like the following:

```
beth.blueberry@example.com
quiet.quinn@example.com
Tim Tangelo <tim.tangelo@example.com>
```

Then upload the spreadsheet using the **Import** button on your
account's membership page.

<div class="adv">  <!-- START ADVANCED -->

If you prefer, you can also email membership additions or
modifications to your account's server for processing; [see
here](./emailactions?view=GV-SET-VIEW) for instructions.

</div>  <!-- END ADVANCED -->

<div class="support">  <!-- START SUPPOR -->

If a "display name" is included in the import with a member's primary
address, it is used to initialize the member's first and last name
fields for that account member.  These names are subsequently used to
construct the email display name used in the "From" address in any
emails subsequently sent by this member.  Because the firstName and
lastName fields are stored separately on a per-account basis, a given
user can have different names (and thus, different email display
names) in different accounts.

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


## Custom Member attributes

To define text-based member attributes (which can then be included in
personalized, group emails), add a header row to your CSV import file,
put the member email addresses under an "email" column, and then add
"[attribute name]" columns for your custom attributes.

For example:

| email                       | City       | Sport      | Favorite Color |
|:----------------------------|:-----------|:-----------|:---------------|
|tim.tangelo@example.com      | Boston     | Baseball   | blue           |
|beth.blueberry@example.com   | Montecito  |            | black          |
|quiet.quinn@example.com      | Toronto    | Hockey     | red            |

You can now include these attribute names in your email surrounded by 
```{% raw %} {{ {% endraw %} ... {% raw %} }} {% endraw %}```, 
such as:

```
Hello {% raw %}{{{% endraw %} sport {% raw %}}}{% endraw %}, 

We see you're a "{% raw %}{{ {% endraw %} favoritecolor {% raw %} }}{% endraw %}" person,
so look for your {% raw %} {{ {% endraw %} favoritecolor {% raw %} }} {% endraw %} BingoTech
bingo board coming to your mail box soon!

Bingo!
```

Custom member attributes may only consist of alphanumeric and the
underscore (‘_’) character, and must contain at least one letter. Note
that a small number of attribute names are reserved, such as 'email'
and 'Last Name.'  You can checkout the full list
[here](./reservedatts?view=GV-SET-VIEW).


## Making Membership Changes

By default, an **Import** will only make member additions or fill-in
information that's missing.  To make modifications of your existing
member attributes, use the **Import Modifications** button.

<div class="trivy only">   <!-- START TRIVY ONLY -->

Also, the 'role' column can optionally be included to modify
membership status of your community members.  Those with 'x'
indicate a continuing member, or an empty field is used to a remove a
member.

(If the account administrator is included in the import file, "Admin"
should be entered in the role field for that member.)

</div>   <!-- END TRIVY ONLY -->


<div class="gv">   <!-- START GROUPVINE -->

## Membership Roles

By default, new members are given the basic "Member" role, however, you
can also have an aribtrary number of Administrators and Editors.

* **Member** Receives and can engage with group emails (unless opted-out).
  (or abbreviation '**x**').

* **Editor**  Can also create and send group emails.

* **Administrator** Can also manage group membership and approve moderated
  group emails (or abbreviation '**Admin**').

To set or change a member's role, specify each member's role in a
"role" column, like this (the City, Sport, and Favorit Color custom
attributes are just shown to give a more complete import example, but
aren't necessary).


| email                       | City       | Sport      | Favorite Color |  role   |
|:----------------------------|:-----------|:-----------|:---------------|:--------|
|tim.tangelo@example.com      | Boston     | Baseball   | blue           | Admin   |
|beth.blueberry@example.com   | Montecito  |            | black          |   x     |
|quiet.quinn@example.com      | Toronto    | Hockey     | red            | Editor  |

</div>

<div class="adv" id="admin-members">  <!-- START ADVANCED -->

Every account (and every sub-group) must have at least one Admin
member.  When an account (or sub-group) is first created, the user
that created it is initially added as an opted-in Administrator
member.

Also, in order to avoid the risk of an Administrator accidentally
locking him/herself out of Admininstrator privileges, Admins can't
demote themselves.  So, In order to demote an Admin member to an
Editor or regular Member role, a different member first needs to be
promoted to Administrator, and then that other Administrator can then
demote the original Administrator.

</div>

<div class="support">  <!-- START SUPPORT -->

Note that the user that initially creates an account is also stored as
the account "owner," but this is for informational purposes only and
has no effect or relation to the members (or member Administrators) of
the account, other than the fact that this account creator is also the
first Administrator member of the account.

</div>

<div class="gv">   <!-- START GROUPVINE -->

## Lists

Lists allow you to target emails by certain sub-sets of community members.
For example, the following import would specify which members are on
one of two lists (this time, we've simplified the import, removing the
custom attributes and role columns, to just update the list
memberships):


| email                       | list:musicians | list:golfers  |
|:----------------------------|:---------------|:--------------|
|tim.tangelo@example.com      | x              |               |
|quiet.quinn@example.com      |                | x             |
|beth.blueberry@example.com   | x              | x             |

</div>

<div class="gv">   <!-- START GROUPVINE -->

## Groups

Groups are similar to lists in that they too allow specific targeting
of community members, but are more powerful in a number of ways such 
as allowing for delegation of their Administrator and Editor roles to
to specific users for that sub-group. 

Group columns are in the format group:[group name] with the values
giving each member's role in that group.  Whereas a member's role for
the entire account is under the optional "role" column (see above),
the member's role within a specific sub-group is under the 
group:[group name] column.

| email                       | group:eastregion | group:westregion |
|:----------------------------|:-----------------|:-----------------|
|tim.tangelo@example.com      |  Admin           |                  |
|sue.steeler@example.com      |  x               |                  |
|quiet.quinn@example.com      |  Editor          |                  |
|beth.blueberry@example.com   |                  | x                |
|sam.salsa@example.com        |                  | x                |
|billy.banjo@example.com      |                  | Admin            |

Note also that sub-groups can define their own lists (but not the
other way around).  For example, in the following, Tim belongs to the
account-wide "musicians" list as well as the "redsox" list defined in
(and only relevant in) the eastregion group.  Sue is also a musician
and is in the "giants" list defined in the westregion group:

| email                       | list:musicians | group:eastregion | list:redsox    | group:westregion | list:giants    |
|:----------------------------|:---------------|:-----------------|:---------------|:-----------------|:---------------|
|tim.tangelo@example.com      | x              |  Admin           | x              |                  | x              |
|beth.blueberryr@example.com  | x              |                  |                | x                | x              |

For more information on groups and lists, see the [Groups and
Lists](./groups_lists?view=GV-SET-VIEW) page.

</div>   <!-- END GROUPVINE -->


## Other Notes

<div class="trivy only">
* Custom attributes must only consist of alphanumeric and the
  underscore ('_') character, are treated as case-insensitive, and
  typically handled in lower-case.
</div>

<div class="gv">
* Custom attributes, list and group names must only consist of
  alphanumeric and the underscore ('_') character.  They are all
  treated as case-insensitive, and are typically handled in
  lower-case.
</div>

* Any number of informational-only columns with header names prefixed
  with "ignore:" can be included in import files and will be
  entirely ignored by the membership import process.  (Also, columns
  with headers names prefixed with "delivery:", used for
  [exports](./exporting?view=GV-SET-VIEW), will also be ignored in
  imports.)
  
  