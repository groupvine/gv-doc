# Membership Import

## How Importing Membership
<span id="gv-2members-zmembersimport"></span>

Importing will change a member’s attributes, roles, and membership
to lists and sub-groups to reflect how this information is set in
the import file.  A “blank” cell will remove an attribute value or
remove the member from the specific lists or sub-groups.  For the
“Role” column, which defines account membership, a blank will
remove the member from the group.

Columns not included in your import file are unaffected by an import.

## Uploading Recipient addresses-only
<span id="gv-uploading-recipient-addresses"></span>

An easy way to add a list of community members to your account is to
use a spreadsheet program (e.g., Excel, Numbers, Google Spreadsheet) to
create and save a “CSV” file that simply lists your recipient’s email
addresses in a column with an “Email” header, like the following: 

| Email                       |
|:----------------------------|
|tim.tangelo@example.com      |
|beth.blueberry@example.com   |
|quiet.quinn@example.com      |

Then select this file to import on the Membership’s Import & Export
page.

## Uploading Member Attributes
<div id="gv-uploading-member-attributes"></div>

Attributes, which can be used to save additional member information,
and then personalize emails or target recipients based on their
attribute value, can have their values set or removed by adding the
attribute name to a column header and the member’s value for that
attribute in their row. A “blank” cell will remove the attribute’s
value for that member.

Note

* New text-based attributes can be created in an import file by simply
adding a column with the attribute’s name in the header.  Other
attribute types are required to be defined from your account.

* A small number of attribute names are reserved, such as ‘Email’ and
‘Last Name.’  A complete list of reserved attribute names are at the
bottom of the Gear’s **Member Attributes** tab.

For example:

| Email                       | City       | Sport      | Fav Color    |
|:----------------------------|:-----------|:-----------|:-------------|
|tim.tangelo@example.com      | Boston     | Baseball   | blue         |
|beth.blueberry@example.com   | Montecito  |            | black        |
|quiet.quinn@example.com      | Toronto    | Hockey     | red          |


You can now include these attribute names in your emails from either the
Pers…” (short for Personalization) editor menu from your online account
or your personal email account by surrounding the attribute name (**with
blanks removed**) surrounded with {{ ... }}, for example:

    Hello {{ sport }},
    We see you're a "{{ favcolor }}" person,
    so look for your {{ favcolor }} BingoTech
    bingo board coming to your mailbox soon!

    Bingo!

For more information, visit the **Member Attributes** page.

<span class="sub g4s">

## Uploading Membership Roles
<span id="gv-uploading-membership-roles"></span>

By default, new members are given the basic "Member" role, however, you
can also have an arbitrary number of Administrators and Editors.  Here
are the available role types with their default capabilities and how
they are used in an import file.

**Member:** Can receive and respond to Email Widgets Receives and can
engage with group emails (unless they are opted-out). (or abbreviation
'x').

**Editor:** In addition to a Member’s capabilities, can also send group
emails.

**Administrator:** In addition to an Editor’s capabilities, can
also manage group settings and membership, and approve moderated group
emails (or abbreviation 'Admin').
 
To set or change a member's role, specify their role in a "Role"
column, like this (the City, Sport, and Fav Color custom attributes are
just shown to give a more complete import example necessary).  
 
<span class="box">
Uploading a blank cell for a member’s Role will remove the member from
the account, and similarly for sub-groups and their sub-group column.
</span>
 
</span> <!-- sub g4s -->

| Email                     | City      | Sport     | Fav Color | Role  |
|:--------------------------|:----------|:----------|:----------|:------|
|tim.tangelo@example.com    | Boston    | Baseball  | blue      | Admin |
|beth.blueberry@example.com | Montecito |           | black     |   x   |
|quiet.quinn@example.com    | Toronto   | Hockey    | red       | Editor|

## Uploading to Member Lists
<div id="gv-uploading-to-member-lists"></div>

Lists allow you to target emails by certain sub-sets to a subset of
community members. For example, the following import would specify
which members are on one of two lists the musicians and/or golfers
lists (this time, we've simplified the import, removing the custom
attributes and role columns, to just update the list memberships):

* Notes
Looking just at Tim, if Tim was on the golfers list before this file
was imported, then he would have been removed from the golfers list
when the import was complete.

New lists can be created using an import file simply by adding
list:[list name] to a new column header in your import file.
For more information about lists, **click here**
<span class="todo">
**JHJHJHJHlink-needed for click here.**
</span>
.

## Uploading to Groups
<div id="gv-uploading-to-groups"></div>

Groups are similar to lists in that they too allow specific
targeting of community members, but are more powerful in a number
of ways such as allowing groups to have their own Administrators
and Editors.  for delegation of their Administrator and Editor
roles to to specific users for that sub-group.  For more information
about sub-groups, **click here**
<span class="todo">
**JHJHJHJHlink-needed for click here.**
</span>
.

Where new lists can be created using an import file, groups need
to be created in your account before referencing them in an import
file.  Group columns are in the format group:[group name] with the
value in this column representing values giving each member's role
in that group.  Whereas a member's role for the entire account is
under the optional "Role" column (see Membership Roles section
above), the member's role within a specific sub-group is under the
group:[group name] column.

Note also that Sub-groups can define their own lists, whose columns
immediately follow their group:[group name] column and before the
next group column.  In the following example For example, in the
following, Tim belongs to the account-wide "musicians" list as well
as the "redsox" list defined in (and only relevant in) the
eastregion group. Sue is also a musician and is in the "giants"
list defined in the westregion group:

