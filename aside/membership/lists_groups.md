# Membership Lists
<span id="gv-membership-lists"></span>

Lists give you flexibility in how you can target an email's
receipients list to a specific interest group or classification
sub-set of your membership.  Key features of lists include the
following.

* Lists allow cross-account identification of your members,
* New lists can be added easily using membership imports, and
* List membership is available to all sub-groups below the group where
  the list is defined (e.g., a list defined in the main group account
  are available to all sub-groups).

## Example

For example, for an account named "lighthouselabs", you might wish to
classify your Lighthouselabs community members using Lists to identify some of
their interests, such as "golfers" and "musicians".  You could then
send an email to all the musicians using the address:

```
musiclovers~~lighthouselabs@groupvine.com
```

<span class="adv">

For an account with sub-groups (see information on sub-groups below),
you'll be pleased to know that group Administrators can define their
own lists, which will then apply to that group, as well as any
sub-groups of that group.  This also means that Lists defined at the
account level apply to all sub-groups in the account.

</span>

<span class="support">

List membership may only occur within the group where the list was defined.  
For example, to add or remove members from a list in an import file, the
associated 'list:' header must follow the 'group:' header which owns that list.

</span>

# Membership Sub-groups
<span id="gv-membership-sub-groups"></span>

Sub-groups provide additional flexibility in how you manage your
membership and target your emails.  Key features of sub-groups include
the following.

* Sub-groups can be assigned their own set of Administrators and Editors,
* Sub-groups can either be moderated or not, and
* Sub-groups can define their own set of lists.

Multiple sub-group levels are possible (contact us to allow for more
than 1 sub-group level).  Members of a sub-group are automatically a
member of the parent (grand-parent, ...) groups.

<span class="support"> 
Remember that group membership applies "upward" from that group's
sub-groups (or sub-sub-groups).  So a group Member (or Editor or
Admin) in a child sub-group will automatically be a Member in the
current group.

For example, if you're an Editor of the "classclowns" sub-group of the
"2ndgrade" group in the "central valley" account, then you'll be at
least a Member of the "2ndgrade".
</span>

<span class="adv">  <!-- START ADVANCED -->

Additions, modifications, and deletions of new or existing sub-groups
can also be performed by emailing instructions to your account server; 
[see here](./emailactions?gv-qargs=0) for instructions.


</span>  <!-- END ADVANCED -->



## Example

For example, for a main group account named "lighthouselabs", you might
have sub-groups named "team", "advisors", and "investors".  Emails to
the team could be easily targetted using the address:

```
team.lighthouselabs@groupvine.com
```

It may also make sense to further classify your Lighthouse Labs community
members using Lists to identify some of their interests, such as
"golfers" and "musiclovers".  You could then send an email to all the
musiclovers using the address:

```
musiclovers~~lighthouselabs@groupvine.com
```

Or, if you only want to send it to music-loving advisors, use:

```
musiclovers~~advisors.lighthouselabs@groupvine.com
```

Don't worry, you can always use the address helper on the site.

<span class="adv">
Note that role privileges apply "downward." So an
Administrator at the account level will have Admin privileges
throughtout all sub-groups in the account, or an Administrator of a
"2ndgrade" sub-group also have Admin privileges in its "classclowns"
sub-group.   

However, one sidenote is that only Administrators that are explicit
Admins for that specific group are are listed under the "group:"
columns of membership Exports, and only explicit group Admins receive
the group's moderation request emails.
</span>

