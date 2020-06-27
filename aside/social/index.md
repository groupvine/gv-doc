# Social Email Options

## Sending new emails

### From your own email inbox
<span id="gv-email-from-inbox"></span>

To send an email to your account from your own inbox, simply send it to
your account's Abbreviation '@' groupvine.com, for example:

```
bingotech@groupvine.com
```

Note, Abbreviation can be found by going to Settings->Account Info.

<span class="g4s sub">

To send to a specific sub-group, use the sub-group's Abbreviation with the account's Abbreviation, for example:

```
team.bingotech@groupvine.com
```

Or, to send to a list, use an email address like:

```
~list=musiclovers~~bingotech@groupvine.com
```

</span>

<span class="adv">

Note that you can also send to a specific list of members from your
own email inbox (and/or to specific new members that haven't yet been
imported). To do this, create a CSV file in the format of an import
file (such as simply listing email addresses, one per line,
[see here](../membership/importing?view=GV-SET-VIEW) for full options)
that lists the members you want to send to.
Then send the email to an address in the following format:

```
~sendto='[filename]'~~[group name]@groupvine.com
```

For example:

```
~sendto='myhelpers.csv'~~bingotech@groupvine.com
```

</span>

<span class="adv">

If some addresses have failed in a previous send attempt due to a
temporary problem, you can resend the same email to those addresses
that have failed thus far simply by sending an email to your group and
use the "~retry=[message id]" qualifier, like the following (for
BingoTech's message ID number 100123):

```
~retry=100123~~bingotech@groupvine.com
```

</span>

<span class="adv">

An email can be scheduled for sending later by adding a "senddate" to
the email address, for example like the following:

```
~senddate='2019-04-10T13_30-08'~~bingotech@trivy.email
```

</span>


### From your online account

...

## Commenting and Reacting to Emails

Yes, your GV-BRAND community email recipients can **comment** on and **like**,
**wow** (**dislike**, etc.), your emails!

...

## Sharing Emails on Social Feeds

...

## Who can send new emails

<span class="free">

  With the Free service, only the account administrator is permitted to send 
  new emails (or replies) to the group.

</span>

<span class="g4s sub">

Any member designated with the group Admin or Editor role is permitted
to send new emails (or replies) to a group.  Additionally, if the
**"Allow group members to send"** setting is enabled for that group
(disabled by default), then any member can send.

</span>

<span class="adv">

Note that in the case of sub-groups, Admins and Editors of parent (or
grandparent...) group(s) are also permitted to send to the group.  This
may at times cause some confusion since these members don't
necessarilly receive the group emails, unless they are also explicit members
of the group.
     
</span>

<span class="support">

Lastly, regardless of any Admin or Edtitor role, the account owner is also always a valid
group (or sub-group...) sender.

</span>


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

<span class="g4s sub">

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

</span>


