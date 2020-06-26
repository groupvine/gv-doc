# Membership Lists

Lists give you flexibility in how you can target an email's
receipients list to a specific interest group or classification
sub-set of your membership.  Lists:

* Allow cross-account identification of your members
* Can easily be added in membership imports
* Are available to all sub-groups below the group where the list is
  defined (e.g., a list defined in the main group account are available
  to all sub-groups).

## Example

For example, for an account named "bingotech", you might wish to
classify your BingoTech community members using Lists to identify some of
their interests, such as "golfers" and "musicians".  You could then
send an email to all the musicians using the address:

```
musiclovers~~bingotech@groupvine.com
```

<div class="adv">

For an account with sub-groups
([see information on sub-groups here](./groups[LINK-QARGS-DOC])), you'll be 
pleased to know that group Administrators can define their own lists, which
will then apply to that group, as well as any sub-groups of that group.  This
also means that Lists defined at the account level apply to all sub-groups 
in the account.

</div>

<div class="support">

List membership may only occur within the group where the list was defined.  
For example, to add or remove members from a list in an import file, the
associated 'list:' header must follow the 'group:' header which owns that list.

</div>

