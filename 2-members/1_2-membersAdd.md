# Managing your Membership

<span id="gv-2members-12membersAdd"></span>
## Upload a Membership FIle

* [How Uploading a File Impacts Your Membership](/2-members/1_2-membersAdd.md?[LINK-QARGS-DOC]#gv-2members-12membersAdd-impactMem)
* [Uploading Recipient Addresses-only](/2-members/1_2-membersAdd.md?[LINK-QARGS-DOC]#gv-2members-12membersAdd-uploading-recipient-addresses)
* [Uploading Member Attributes](/2-members/1_2-membersAdd.md?[LINK-QARGS-DOC]#gv-2members-12membersAdd-uploading-member-attributes)
* [Uploading Membership Roles](/2-members/1_2-membersAdd.md?[LINK-QARGS-DOC]#gv-2members-12membersAdd-uploading-membership-roles)
* [Uploading to Member Lists](/2-members/1_2-membersAdd.md?[LINK-QARGS-DOC]#gv-2members-12membersAdd-uploading-to-member-lists)
* [Uploading to Groups](/2-members/1_2-membersAdd.md?[LINK-QARGS-DOC]#gv-2members-12membersAdd-uploading-to-groups)


<span id="gv-2members-12membersAdd-impactMem"></span>
### How Uploading a File Impacts Your Membership

<span class="sub g4s">

Uploading a file changes a member's attribute values, role, and memberships to lists and sub-groups based on how these are set in the  file.  An empty cell will remove an attribute value or remove the member from a list or sub-group, and an empty cell in the "Role" column will remove the member from the account.

</span> <!-- sub g4s -->

<span class="free">

Uploading a file changes a member's attribute values, role, and memberships
to lists based on how these are set in the file.  An empty cell will remove an attribute value or
remove the member from a list, and an empty cell in the 
"Role" column will remove the member from the account.

</span> <!-- free -->

Columns not included in your file are unaffected when the file is uploaded.


<span id="gv-2members-12membersAdd-uploading-recipient-addresses"></span>
### Uploading Recipient Addresses-only

An easy way to add community members to your account is to
use a spreadsheet program (e.g., Excel, Numbers, Google Spreadsheet) to
create and save a "CSV" file that simply has email
addresses in a column with an "Email" header, like the following: 

| Email                    |
|:-------------------------|
|tim.tangelo@example.com   |
|beth.blue@example.com     |
|quiet.quinn@example.com   |


To upload, select this file after clicking the **Upload Membership File** on the Membership's Upload & Export
page.


<span id="gv-2members-12membersAdd-uploading-member-attributes"></span>
### Uploading Member Attributes

Attributes, which can be used to save additional member information,
and then personalize emails or target recipients based on their
attribute value, can have their values set or removed by adding the
attribute name to a column header and the member's value for that
attribute in their row. An empty cell will remove the attribute's
value for that member.

Note

* New text-based attributes can be created in the upload file by simply
adding a column with the attribute's name in the header.  Other
attribute types are required to be defined from your account.

* A small number of attribute names are reserved, such as ‘Email' and
‘Last Name.'  A complete list of reserved attribute names are at the
bottom of the <img src="/docimages/transparent-gear-icon.png" height="22"> Member Attributes page.

For example:

| Email                   | City       | Sport      | Fav Color    |
|:------------------------|:-----------|:-----------|:-------------|
|tim.tangelo@example.com  | Boston     | Baseball   | blue         |
|beth.blue@example.com    | Montecito  |            | black        |
|quiet.quinn@example.com  | Toronto    | Hockey     | red          |


You can now include these attribute names in your emails from either the
Pers…” (short for Personalization) editor menu from your online account
or your personal email account by surrounding the attribute name (**with
blanks removed**) surrounded with {{ ... }}, for example:

    Hello {{ sport }},
    We see you're a "{{ favcolor }}" person,
    so look for your {{ favcolor }} BingoTech
    bingo board coming to your mailbox soon!

    Bingo!

For more information on member attributes, click [here](/2-members/4-membersAttributes.md?[LINK-QARGS-DOC]#gv-2members-4membersattributes).


<span id="gv-2members-12membersAdd-uploading-membership-roles"></span>
### Uploading Membership Roles
    
<span class="sub g4s">    
    
By default, new members are given the basic "Member" role, however, you
can also have an arbitrary number of Administrators and Editors.  Here
are the available role types with their default capabilities and how
they are used in the upload file.

**Member:** Can receive and respond to Email Widgets.  'x' can be used as an abbreviation.

**Editor:** In addition to a Member's capabilities, can also send group
emails.

**Administrator:** In addition to an Editor's capabilities, can
also manage group settings and membership, and approve moderated group
emails.  'Admin' can be used as an abbreviation.
 
To set or change a member's role, specify their role in a "Role"
column, like this (the City, Sport, and Fav Color custom attributes are
just shown to give a more complete example).  
 
Note

* Uploading an empty cell for a member's Role will remove the member from
the account, and similarly for sub-groups and their sub-group column.

| Email                   | City      | Sport     | Fav Color | Role  |
|:------------------------|:----------|:----------|:----------|:------|
|tim.tangelo@example.com  | Boston    | Baseball  | blue      | Admin |
|beth.blue@example.com    | Montecito |           | black     |   x   |
|quiet.quinn@example.com  | Toronto   | Hockey    | red       | Editor|

</span> <!-- sub g4s -->

<span class="free">

By default, new members are given the basic "Member" role, which can receive and respond to Email Widgets.  'x' can be used as an abbreviation.
 
To set a member's role, specify their role in a "Role"
column, like this (the City, Sport, and Fav Color custom attributes are
just shown to give a more complete example).  
 
Note

* Uploading an empty cell for a member's Role will remove the member from
the account, and similarly for sub-groups and their sub-group column.

| Email                     | City      | Sport     | Fav Color | Role  |
|:--------------------------|:----------|:----------|:----------|:------|
|tim.tangelo@example.com    | Boston    | Baseball  | blue      | Member|
|beth.blue@example.com      | Montecito |           | black     |   x   |

</span> <!-- free -->


<span id="gv-2members-12membersAdd-uploading-to-member-lists"></span>
### Uploading to Member Lists

Lists allow you to target emails to a subset of
community members. For example, the following specifies
which members are on the musicians and/or golfers
lists (this time, we've simplified the file, removing the custom
attributes and role columns, to just update the list memberships):

| Email                   | list:musicians | list:golfers |
|:------------------------|:---------------|:-------------|
|tim.tangelo@example.com  | x              |              |
|quiet.quinn@example.com  |                | x            |
|beth.blue@example.com.   | x              | x            |


Note
* Looking just at Tim, if Tim was on the golfers list before this file
was uploaded, then he would have been removed from the golfers list
when the upload was complete.

* New lists can be created when uploading simply by adding
list:[list name] to a new column header in your file.

For more information about lists, click [here](/2-members/2-membersList.md?[LINK-QARGS-DOC]#gv-2members-2memberslist).

<span class="sub g4s">


<span id="gv-2members-12membersAdd-uploading-to-groups"></span>
### Uploading to Groups

Groups are similar to lists in that they too allow specific
targeting of community members, but are more powerful in a number
of ways such as allowing groups to have their own Administrators
and Editors.  For more information about sub-groups,
click [here](/2-members/3-membersGroups.md?[LINK-QARGS-DOC]#gv-2members-3membersGroups).

Where new lists can be created using with an upload file, groups need
to be created before referencing them in the upload file.

Group columns are in the format group:[group name] with the
value in this column representing each member's role
in that group.  Whereas a member's role for the entire account is
under the "Role" column (see Membership Roles section
above), the member's role within a specific sub-group is under the
group:[group name] column.

| Email                    | group:east | group:west |
|:-------------------------|:-----------|:-----------|
|tim.tangelo@example.com   |  Admin     |            |
|sue.steeler@example.com   |  x         |            |
|quiet.quinn@example.com   |  Editor    |            |
|beth.blue@example.com     |            | x          |
|sam.salsa@example.com     |            | x          |
|billy.banjo@example.com   |            | Admin      |


Sub-groups can define their own lists, whose columns
immediately follow their group:[group name] column and before the
next group column.  In the following example, Tim belongs to the
account-wide "musicians" list as well as the "redsox" list defined in
(and only relevant in) the eastregion group. Sue is also a musician and
is in the "giants" list defined in the westregion group:

| Email                  | list:musicians | group:east | list:redsox | group:west | list:giants |
|:-----------------------|:---------------|:-----------|:------------|:-----------|:------------|
|tim.tangelo@example.com | x              |  Admin     | x           |            | x           |
|beth.blue@example.com   | x              |            |             | x          | x           |

</span> <!-- sub g4s -->
