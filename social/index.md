---
layout: default
title: Social Email Options
---

# Social Email Options

## Sending new emails


### From your own email inbox

To send an email to your group from your own inbox, simply send it to
the name of your group '@' groupvine.email name, for example:

```
bingotech@groupvine.email
```

<div class="gv">

To send to a specific sub-group, use the full sub-group path, such as:

```
team.bingotech@groupvine.email
```

Or, to send to a list, use an email address like:

```
~list=musiclovers~~bingotech@groupvine.email
```

</div>

<div class="adv">

Note that you can also send to a specific list of members from your
own email inbox (and/or to specific new members that haven't yet been
imported). To do this, create a CSV file in the format of an import
file (such as simply listing email addresses, one per line,
[see here](../membership/importing?view=GV-SET-VIEW) for full options)
that lists the members you want to send to.
Then send the email to an address in the following format:

```
~sendto='[filename]'~~[group name]@groupvine.email
```

For example:

```
~sendto='myhelpers.csv'~~bingotech@groupvine.email
```

</div>


<div class="adv">

To send a Draft email that will only go to the Admins and Editors (or
the group Admins and Editors of a sub-group), use the "~draft" email
qualifier, like the following:

```
~draft~~bingotech@groupvine.email
```

</div>

<div class="adv">

An email can be scheduled for sending later by adding a "senddate" to
the email address, for example like the following:

```
~senddate='2019-04-10T13_30-08'~~bingotech@trivy.email
```

</div>

<div class="support" id="resend">

There are three ways to resend the same email using an action email. 

- *Retry* If some addresses have failed in a previous send attempt due to a
  temporary problem, you can resend the same email to those addresses
  that have failed thus far simply by sending an action email to the same 
  group address and add ```~retry=[message id]```, like the following
  ```~retry=100123~~bingotech@groupvine.email```.  

- *Resend* To resend an email to a new set of recipients, send the
   action email to the new group address and add ```~resend=[message id]```.
   For example, ```~resend=100123~~newgroup.bingotech@groupvine.email```.
   With Resend, recipients which have been targetted for this email
   before are not included in the resent email recipient list.   Resend
   could be useful, for example, to resend an email with a social engagement
   widget to new recipients and have their responses included in the same
   response set as the original email.

- *ResendAll* To resend the same email, send the
   action email to a group address and add ```~resendall=[message id]```.
   For example, ```~resendall=100123~~newgroup.bingotech@groupvine.email```.
   With ResendAll, all recipients of the group address will be resent
   the email, whether or not they've received it before.

In all cases, the contents of the action email itself are ignored.

</div>


### From your online account

...

## Commenting and Reacting to Emails

Yes, your GV-SERVICE community email recipients can add **comments**
and other responses to your emails!

...

## Sharing Emails on Social Feeds

...

## Who can send new emails

<div class="trivy only">

  With the Trivy service, only the account administrator is permitted to send 
  new emails (or replies) to the group.

</div>

<div class="gv">

Any member designated with the group Admin or Editor role is permitted
to send new emails (or replies) to a group.  Additionally, if the
**"Allow group members to send"** setting is enabled for that group
(disabled by default), then any member can send.

</div>

<div class="adv">

Note that in the case of sub-groups, Admins and Editors of parent (or
grandparent...) group(s) are also permitted to send to the group.  This
may at times cause some confusion since these members don't
necessarilly receive the group emails, unless they are also explicit members
of the group.
     
</div>

<div class="support">

Lastly, regardless of any Admin or Edtitor role, the account owner is also always a valid
group (or sub-group...) sender.

</div>


### Email confirmation

To avoid the risk of spammers sending emails to your group from a
possibly compromised email account, all emails sent from your own
personal email account to the group must be confirmed (by clicking on
a "Proceed" button in a "confirmation email") before it is forwarded
to the group.

So, when a group Admin sends an email to the group from their personal
email account, a confirmation email is immediately sent back to this
Admin for their confirmation before the email is forwarded to the
group.

<div class="gv">

For emails sent by group Editors, the responsibility for confirming
the email depends on the "Group moderation" setting:

* If "Group moderation" is disabled (the default), then the confirmation 
  is handled the same way, being sent directly back to the sender.  

* If "Group moderation" is enabled, then the confirmation email is
  instead sent to the group Admins who, in addition to guarding
  against spammers, can also moderate the group emails sent by Editors
  to deny distribution of any they feel are not appropriate for their
  group membership.

For group emails generated within your online group account, only
emails sent by Editors when the "Group moderation" setting is enabled
require the above confirmation (Admin approval) step.

</div>


