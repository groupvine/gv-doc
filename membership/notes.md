
# Advanced Notes on Membership

## Importing and Alternate Address Handling

* When importing a member with a primary ('email') address that
  matches any existing user record (whether by their primary or one of
  their alternate addresses), then that existing user record is used
  to represent this new member.  If the importing member also has
  alternate ('emailAlt\<N\>') address(es) that happen to match
  different existing user records, those alternate addresses are
  ignored.

* When importing a member with a primary ('email') address that does
  not match any existing user record, then a new user record is
  created with this primary address, whether or not the importing
  member has any alternate addresses that do match existing user
  records.  The new user record will also have the importing member's
  alternate addresses that don't match any existing users (the ones
  that do match will be ignored).
