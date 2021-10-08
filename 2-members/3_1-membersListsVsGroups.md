# Managing your Membership

<span id="gv-2members-31membersListsVsGroups"></span>
## Comparing Lists with Sub-Groups


|                       |                     List                     |                      Sub-group                      |
|:---------------------:|:--------------------------------------------:|:---------------------------------------------------:|
| Configuration         | None                                         | Similar to account configuration but just for the sub-group |
| Scope                 | Lists can be created within a sub-group      | ... but not vice versa                              |
| Allowed sender policy | Same as account policy*                      | Specific to sub-group                               |
| Moderation policy     | Same as account policy*                      | Specific to sub-group                               |
| Membership delegation | None                                         | Can have its own Admins                             |
| Email delegation      | None                                         | Can have its own Editors                            |
| Email Feed            | Included in account's Email Feed*            | Has its own Email Feed (with own Visibility policy) |
| Logo and color theme  | Included in account (so same logo & colors)* | Can have its own logo & color theme                 |

* For Lists created within a specific sub-group, replace "acccount"
  with "sub-group".


In general, if a set of members could potentially use a level of
autonomy, such as being able to reply-all to the others (without also
being able to reply-all to the entire account), then using a sub-group
is recommended.

On the other hand, to simply address a set of members within the same
account (or sub-group if created within one) without the need for any
autonomy, delegation, or policies different than the entire account
(or sub-group), then a simple list is recommended.
