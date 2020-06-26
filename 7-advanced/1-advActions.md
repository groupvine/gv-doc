# Advanced Info  **JHJHJH from google doc**
<div id="gv-advanced-info"></div>

## Email Actions
<div id="gv-email-actions"></div>

**Advanced info JHJHJH this IF does not reconcile with the div
class specification in topics.md because we should never arrive
here**

# Advanced - Email Actions **JHJHJH from aside**

A number of operations can be conducted without visiting your online
account at all, but simply by emailing instructions to your account
server from a recognized Administrator email address.  In each case, a
confirmation email is first emailed back to you to confirm your
authorization for the action (to avoid the risk of imposters) before
the action is processed, and the results emailed to you.

For the examples below, we're using the fictitious "bingotech"
account, which you should replace with your account name.

## Exporting your membership

To have your full membership sent to you, along with delivery
statistics, any list and sub-group memberships, etc., send an email
to:

```
~export~~[account name]@groupvine.email
```

For example:

```
~export~~bingotech@groupvine.email
```

## Exporting your pending membership applications

To export your the membership applications pending for your account, 
send an email to:

```
~exportapps~~[account name]@groupvine.email
```

For example:

```
~exportapps~~bingotech@groupvine.email
```

This export file will be in a form ready to be imported into the
account (into the accounts's top-level group for accounts with
sub-groups).  It will also include reserved "appId" and "appStatus"
columns which are used to identify any Pending appications to be
imported.


## Importing membership or membership changes

You can email your membership file to your account's server to be
imported using the following address:

```
~import='[membership file]'~~[account]@groupvine.email
```

For example, for bingotech with a membership file named "bt_members.csv", use:

```
~import='bt_members.csv'~~bingotech@groupvine.email
```

<div class="adv">

If you'd like to ensure that no modifications are done to settings of existing members, replace
"~import" with "~importadd", like the following:

```
~importadd='bt_members.csv'~~bingotech@groupvine.email
```
</div>


## Adding, deleting, or modifying sub-groups

An account's sub-groups can also be managed by email by creating and
attaching a group-instructions CSV file using the following columns:

* **action** - one of 'add', 'update', or 'delete'.  Note that group deletions will 
  also associated group lists and memberships.
* **abbrev** - the group's abbreviated name.
* **title** - Optional group title.  If not specified, it default to
  "[abbrev] group".
* **description** - Optional group description.
* **isModerated** - Optional column, set to 'x' to enable group moderation or left
  blank for unmoderated.
* **membersSend** - Optional column, set to 'x' to allow group members to send
  blank for unmoderated.
* **membersRequest** - Optional column, set to 'x' to include sub-group on profile page
* **membersApply** - Optional column, set to 'x' to require new group members to 
  apply and be admitted by an Admin.  Note: sub-groups can potentially have a
  more (but not less) restrictive policy here, though not currently, this
  flag is only meaningful at the account level (top-level group).
* **imgFilename** - Optional column to provid an URL to an image file
    for the group logo.

<div class="support">

An optional column is the "id" for the groupId.  For update
operations, if the "id" is specified as well as an "abbrev", then it's
taken as an instruction to change the group's abbreviation.

</div>

For example:

| action      | abbrev      | title               | isModerated |
|:------------|:------------|:--------------------|:------------|
| add         | grade1      | First Grade         | x           |
| add         | grade2      | Second Grade        | x           |
| delete      | test-group  |                     |             |
| update      | frontoffice | School Front Office | x           |


<div class="adv" id="emailactions-dot-group">

The special group abbreviation "." is used to indicate the top-,
account-level group.  Actions on this account level are handled as
follows:

* 'add' is invalid, and ignored.
* 'update' is handled normally, allowing changes to the account's group-related properties.
* 'delete' is also handled normally, except that this account "group" itself is not deleted.

</div>

<div class="support">

A handy way to initialize an account to no members, other than the
account Admin doing the action, and some set of sub-groups is to
import a group instructions file like the following:

| action      | abbrev      | title               | isModerated |
|:------------|:------------|:--------------------|:------------|
| delete      | .           |                     |             |
| add         | grade1      | First Grade         | x           |
| add         | grade2      | Second Grade        |             |

</div>

<div class="adv">

In accounts with multiple levels of sub-groups, the abbreviated group
name should give the full abbreviated name path to the sub-group,
for example, to add a "skit" sub-group of the "grade1" group:

| action      | abbrev      | title               | isModerated |
|:------------|:------------|:--------------------|:------------|
| add         | grade1/skit | 1st Grade Skit Team |             |

Also note that when deleting a group that has it's own sub-groups,
those sub-groups will also be deleted.

</div>


Then, to process the group instruction file, send the file to your
account's server using the address:

```
~groups='[instructions file]'~~[account]@groupvine.email
```

For example, for the bingotech account and a file named
"groupinstrs.csv", it would be:

```
~groups='groupinstrs.csv'~~bingotech@groupvine.email
```

<div class="support">

## Configuring an account

[*NOTE:* this email-action (configuring an account) contains very
little error checking, so is only provided for possible use by GroupVine support
and for automated tests.]

Account information can be configured by email using an account-instructions
CSV file using an address like:

```
~account='accountinstrs.csv'~~bingotech@groupvine.email
```

and some or all of the following columns in the account instructions file:

* **ownerId** - Integer of userId, not typically used

* **orgTypeId** - Integer organization type
* **orgSubTypes** - string

* **address1** 
* **address2** 
* **city** 
* **stateProvinceId** - Integer state/province code
* **postalCode**
* **countryId** - Integer country code

* **timezone**
* **dmaCode** - Marketing region code

* **isForProfit** - boolean
* **taxid**

* **dfltOptedIn** - boolean
* **groupAdminRights** - Integer code
* **supervisoryMode** - Integer code, if site is under Supervisor moderation

* **accountCreated** - datetime
* **accountDeleted** - datetime

* **serviceType** - Integer service type code
* **subscriptionId** - Integer
* **expires** - datetime

* **attributes** - JSON structured custom attributes
* **behavior** - JSON structured account behavior overrides
* **terms** - JSON structured custom terminology
* **customizations** - JSON structured other customizations

</div>
