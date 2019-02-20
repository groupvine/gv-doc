---
layout: default
permalink: /membership/notes
---

# Advanced Notes on Membership

## Importing and Alternate Address Handling:

When importing a nenw member, the imported member's primary ('email')
address is given a high priority when matching (or not matching)
existing user records.

* When that primary address matches any existing user record (whether
  by their primary or one of their alternate addresses), then that
  existing user record is used to represent this new account or group
  member.  If the importing member also has alternate
  ('emailAlt\<N\>') address(es) that happen to match different
  existing user records, those alternate addresses of the member being
  imported are ignored.

* When that primary address does not match any existing user record,
  then a **new** user record is created based on this primary address,
  whether or not the member being imported has any alternate addresses
  that do match existing user records.  This new user record will also
  have the alternate addresses of the member being imported that don't
  match any existing user's addresses (the ones that do match existing
  user records will be ignored).
