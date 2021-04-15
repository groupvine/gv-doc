# Managing your Membership

<span id="gv-2members-12membersAdd"></span>
## Upload a Membership FIle

* [How Uploading a File Impacts Your Membership](/2-members/1_2-membersAdd.md?gv-qargs=0#gv-2members-12membersAdd-impactMem)
* [Uploading Recipient Addresses-only](/2-members/1_2-membersAdd.md?gv-qargs=0#gv-2members-12membersAdd-uploading-recipient-addresses)
* [Uploading Member Attributes](/2-members/1_2-membersAdd.md?gv-qargs=0#gv-2members-12membersAdd-uploading-member-attributes)
* [Uploading Membership Roles](/2-members/1_2-membersAdd.md?gv-qargs=0#gv-2members-12membersAdd-uploading-membership-roles)
* [Uploading to Member Lists](/2-members/1_2-membersAdd.md?gv-qargs=0#gv-2members-12membersAdd-uploading-to-member-lists)
* [Uploading to Groups](/2-members/1_2-membersAdd.md?gv-qargs=0#gv-2members-12membersAdd-uploading-to-groups)

<div style="text-align:center" class="tutorialVid">
  <iframe width="560" height="315" title="Uploading a Membership File" frameborder="0" 
          src="https://www.youtube.com/embed/TzyHstc2IJA?modestbranding=1&listType=playlist&list=PLDpr40ac-3iJxubj8z77-Y-b81zevRF_L&rel=0"
          allow="accelerometer; autoplay=0; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture" allowfullscreen>
  </iframe>
</div>


<span id="gv-2members-12membersAdd-impactMem"></span>
### How Uploading a File Impacts Your Membership

<span class="highlight">

When using the default "Add" mode, uploading a file only changes or
adds settings or memberships that are not already set.  To make a change
to an existing setting or remove a membership, use the "Modify" mode
which can be set by first clicking on "Options" in the top right of the page
before doing your upload.

In the default "Add" mode, empty cells will be ignored.  In "Modify"
mode empty cells will remove an attribute value or remove the member
from a list or sub-group, and an empty cell in the "Role" column will
remove the member from the account.

</span> <!-- highlight -->
  

<span class="free">
  
A member's attribute values, role, and memberships
to lists are set based on the values of these columns in the uploaded file.  An empty cell will remove an attribute value or
remove the member from a list, and an empty cell in the 
"Role" column will remove the member from the account.

</span> <!-- free -->

Columns not included in the upload file are unaffected when the file is uploaded.

<span class="g4s">
  
New members will be opted-in and ready to receive email.

If Welcome emails will be sent (as set on the <img src="/docimages/transparent-gear-icon.png" height="22"> **Account Settings** page),
new members will receive an email with links to your Email Feed and 
their Profile, where they can set attributes and join available
lists and sub-groups.  We recommend sending Welcome emails to give
new members access to their Profile. 

</span> <!-- g4s -->

<span class="sub">
  
Also, new members will be sent an email to accept an invitation to join.  This email also has links to your Email Feed and their Profile, where they can set attributes and join available lists and sub-groups. Once they accept, they are opted-in and ready to receive email.

</span> <!-- sub -->

<span class="free">
  
Also, new members will be sent an email to accept an invitation to join.  This email also has links to your Email Feed and their Profile, where they can set attributes and join available lists. Once they accept, they are opted-in and ready to receive email.

</span> <!-- free -->

<span id="gv-2members-12membersAdd-uploading-recipient-addresses"></span>
### Uploading Recipient Addresses-only

An easy way to add community members to your account is to
use a spreadsheet program (e.g., Excel, Numbers, Google Spreadsheet) to
create a "CSV" file that simply has email
addresses in a column with an "Email" header, like the following: 

| Email                    |
|:-------------------------|
|tim.tangelo@example.com   |
|beth.blue@example.com     |
|quiet.quinn@example.com   |

Then to upload, click `Upload Membership File` on the **Membership**'s **Upload & Export** page and select your file.

<span id="gv-2members-12membersAdd-uploading-member-attributes"></span>
### Uploading Member Attributes

Attributes are used to save additional member information that's specific to your account's needs, and their values can be used to personalize emails and target recipients.  Member attributes are set in an upload file by adding the attribute name to a column header and the member's value for that attribute in the member's row. An empty cell will remove the attribute's value for that member.

Note

* New text-based attributes can be created in the upload file by simply
adding a column with the attribute's name in the header.  Other
attribute types are required to be defined on the <img src="/docimages/transparent-gear-icon.png" height="22"> **Member Attributes** page.

* A small number of attribute names are reserved, such as ‘Email' and
‘Last Name.'  A complete list of reserved attribute names are at the
bottom of the <img src="/docimages/transparent-gear-icon.png" height="22"> **Member Attributes** page.

For example:

| Email                   | City       | Sport      | Fav Color    |
|:------------------------|:-----------|:-----------|:-------------|
|tim.tangelo@example.com  | Boston     | Baseball   | blue         |
|beth.blue@example.com    | Montecito  |            | black        |
|quiet.quinn@example.com  | Toronto    | Hockey     | red          |

Now when sending emails, the recipient’s attribute value can be included in emails created in your online account by selecting the attribute from the editor's "Pers…" menu (short for Personalization), or for emails created in your personal email account, include the attribute by surrounding its name (with blanks removed) with {{ ... }}, for example:

    Hello {{ sport }},
    We see you're a "{{ favcolor }}" person,
    so look for your {{ favcolor }} Lighthouse Labs
    T-shirt coming to your mailbox soon!

    Cheers, 
    From the Lighthouse

For more information on Member Attributes, click [here](/2-members/4-membersAttributes.md?gv-qargs=0#gv-2members-4membersattributes).

<span id="gv-2members-12membersAdd-uploading-membership-roles"></span>
### Uploading Membership Roles
    
<span class="sub g4s">    
  
By default, new members are given the basic "Member" role, however, you
can also have an arbitrary number of Administrators and Editors.  Here
are the available role types with their default capabilities and how
they are used in the upload file.

**Member**: Can receive email and respond to [Email
Widgets](/5-widgets/1-ewIntro.md?gv-qargs=0#gv-5widgets-1ewintro),
browse and search the online Email Feed, and manage their individual
member settings on their Profile page.  Can also send emails from
their personal inbox if "Can general members send emails" has been
enabled.  'x' can be used as an abbreviation.

**Editor**: In addition to a Member's capabilities, can also prepare
and send group emails online.

**Administrator**: In addition to an Editor's capabilities, can also
manage group settings and membership, and approve moderated group
emails.  'Admin' can be used as an abbreviation.
 
To set or change a member's role, specify their role in a "Role"
column, like this (the City, Sport, and Fav Color attributes are
just shown to give a more complete example).  

| Email                   | City      | Sport     | Fav Color | Role  |
|:------------------------|:----------|:----------|:----------|:------|
|tim.tangelo@example.com  | Boston    | Baseball  | blue      | Admin |
|beth.blue@example.com    | Montecito |           | black     |   x   |
|quiet.quinn@example.com  | Toronto   | Hockey    | red       | Editor|

Note

* When using the default "Add" mode, uploading an empty cell for the
  Role column will cause that row to be ignored.  If using the
  "Modify" mode, an empty Role cell will cause the member to be
  removed from the account, and similarly for sub-groups and their
  sub-group column.

</span> <!-- sub g4s -->

<span class="free">
  
By default, new members are given the basic "Member" role, which can receive email and respond to [Email Widgets](/5-widgets/1-ewIntro.md?gv-qargs=0#gv-5widgets-1ewintro).  'x' can be used as an abbreviation.
 
To set a member's role, specify their role in a "Role"
column, like this (the City, Sport, and Fav Color attributes are
just shown to give a more complete example).  
 
| Email                     | City      | Sport     | Fav Color | Role  |
|:--------------------------|:----------|:----------|:----------|:------|
|tim.tangelo@example.com    | Boston    | Baseball  | blue      | Member|
|beth.blue@example.com      | Montecito |           | black     |   x   |

Note

* Uploading an empty cell for "Role" will remove the member from
the account.

</span> <!-- free -->

<span id="gv-2members-12membersAdd-uploading-to-member-lists"></span>
### Uploading to Member Lists

Lists allow you to target emails to a subset of
community members. For example, the following specifies
which members are on the musicians and/or golfers
lists (this time, we've simplified the file, removing the 
attributes and "Role" columns, to only update the list memberships):

| Email                   | list:musicians | list:golfers |
|:------------------------|:---------------|:-------------|
|tim.tangelo@example.com  | x              |              |
|quiet.quinn@example.com  |                | x            |
|beth.blue@example.com.   | x              | x            |


Note
* Looking at Tim, if Tim was on the golfers list before this file
was uploaded, then he would have been removed from the golfers list
when the upload was complete.

* New lists can be created when uploading simply by adding
*list:[list name]* to a new column header in your file.

For more information about lists, click [here](/2-members/2-membersList.md?gv-qargs=0#gv-2members-2memberslist).

<span class="sub g4s">

<span id="gv-2members-12membersAdd-uploading-to-groups"></span>
### Uploading to Groups

Groups are similar to lists by also allowing specific
targeting of community emails, but are more powerful by having their own Administrators
to manage the group's settings and membership, and moderate their own emails.  For more information about sub-groups,
click [here](/2-members/3-membersGroups.md?gv-qargs=0#gv-2members-3membersGroups).

Where new lists can be created using with an upload file, groups need
to be created before they are referenced in the upload file.

Group columns are in the format *group:[group name]* and whereas a member's role for the entire account is
under a "Role" column (see [Uploading Membership Roles](/2-members/1_2-membersAdd.md?gv-qargs=0#gv-2members-12membersAdd-uploading-membership-roles)), the member's role in a sub-group is under the *group:[group name]* column.

| Email                    | group:east | group:west |
|:-------------------------|:-----------|:-----------|
|tim.tangelo@example.com   |  Admin     |            |
|sue.steeler@example.com   |  x         |            |
|quiet.quinn@example.com   |  Editor    |            |
|beth.blue@example.com     |            | x          |
|sam.salsa@example.com     |            | x          |
|billy.banjo@example.com   |            | Admin      |

Sub-groups can also define their own lists, whose columns
immediately follow their *group:[group name]* column and before the
next group column.  In the following example, Tim belongs to the
account-wide "musicians" list as well as the "redsox" list defined in
(and only relevant in) the east group. Sue is also a musician and
is in the "giants" list defined in the west group.

| Email           | list:musicians | group:east | list:redsox | group:west | list:giants |
|:----------------|:---------------|:-----------|:------------|:-----------|:------------|
|tim@example.com  | x              |  Admin     | x           |            | x           |
|beth@example.com | x              |            |             | x          | x           |

</span> <!-- sub g4s -->
