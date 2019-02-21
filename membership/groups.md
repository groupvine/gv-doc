---
layout: default
title: Membership Sub-groups
---

# Sub-groups

Sub-groups provide additional flexibility in how you manage your
membership and target email recipients.  Sub-groups can have:

* Can have their own Admins and Editors
* Can be moderated or not
* Can have their own set of lists
* Multiple sub-group levels are possible, members of a sub-group are
  automatically a member of the parent (grand-parent, ..) groups.

## Example

For example, for a main group account named "bingotech", you might
have sub-groups named "team", "advisors", and "investors".  Emails to
the team could be easily targetted using the address:

```
team.bingotech@trivy.email
```

It may also make sense to further classify your BingoTech followers
using Lists to identify some of their interests, such as "golfers" and
"musiclovers".  You could then send an email to all the musiclovers
using the address:

```
~list=musiclovers~~bingotech@trivy.email
```

Or, if you only want to send it to musicloving advisors, use:

```
~list=musiclovers~~advisors.bingotech@trivy.email
```

Don't worry, you can always use the address helper on the site.

