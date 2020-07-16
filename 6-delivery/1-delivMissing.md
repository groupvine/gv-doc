# Email Delivery & Troubleshooting

<span id="gv-6delivery-1delivmissing"></span>
## Members aren't getting emails

* [Is the member opted-out or "bounced out"?](#gv-6delivery-1delivmissing-opted-or-bounced-out)
* [Other possibilities based on delivery data](#gv-6delivery-1delivmissing-other-based-on-deliv-data)
* [Tips to help ensure recipients receive your emails](#gv-6delivery-1delivmissing-tips-to)
* [Information to whitelist GroupVine servers](#gv-6delivery-1delivmissing-information-to)
* [Verizon or Comcast delivery issue](#gv-6delivery-1delivmissing-verizon-comcast-issue)

<span id="gv-6delivery-1delivmissing-opted-or-bounced-out"></span>
## Is the member opted-out or "bounced out"?
 
A couple of common reasons can be easily resolved by a simple look-up for whether the member's email address is listed on the **Membership**'s **Membership's Delivery Issues** page.

* If the member's email address is a "problem" address or has "bounced out" ([what this?](/6-delivery/4-delivProblems.md?[LINK-QARGS-DOC]#gv-6delivery-4delivProblems-problem-addr)), then confirm the correctness of their address and update their email address from the **Membership**'s **Member Listing** page.

<span class="g4s">
 
* If the member is opted-out, click their email address to jump
to their settings and uncheck the `Opted out?` checkbox in
the **Membership status** section. 

</span> <!-- g4s -->

<span class="sub">
 
* If the member is opted-out, have them re-submit their information on
your subscription page.  By confirming their interest in the confirmation
email, they will be opted back in.  (Your subscription page's URL is on the **Membership**'s **Add New Member** page.) 

<span class="highlight">
Note, if **Admin approval required for new subscribers?** is 
`Yes` on the <img src="/docimages/transparent-gear-icon.png" height="22"> **Account Settings** page, then an Administrator 
will need to approve the application before the member is opted-in.
</span> <!-- highlight -->
</span> <!-- sub -->

<span class="free">
 
* If the member is opted-out, have them re-submit their information
on your subscription page.  By confirming their interest in the confirmation
email, they will be opted back in.  (Your subscription page's URL is
on the **Membership**'s **Add New Member** page.) 

</span> <!-- free -->

<span id="gv-6delivery-1delivmissing-other-based-on-deliv-data"></span>
## Other possibilities based on delivery data

For other possible reasons, [download the email's detailed delivery data](/6-delivery/5-delivStats.md?[LINK-QARGS-DOC]#gv-6delivery-5delivstat-download-detailed)
and see if one of these scenarios matches your situation.

* If you see "bounced" or "delayed" in the list of delivery failures,
then most likely the email address is not valid, either due
to a typo, their account no longer exists or their email service
provider happened to be "down" at the time of the send.  Confirm the
correctness of the member's email address and update the address in your membership. 

* Comcast or Verizon may drop an email if they think it is spam
instead of saving it to the user's spam folder.  See [Verizon or Comcast delivery issue](#gv-6delivery-1delivmissing-verizon-comcast-issue) for information.

* If several delivery failures are from the same domain, the
  provider may be preventing deliveries and you may need to ask
  them to [whitelist the IP addresses of GroupVine's email servers](#gv-6delivery-1delivmissing-information-to).

* If no errors are being reported, ask the recipient to check
  their spam or junk mail folder.  If the email is not there,
  ask them to add an email filter to their personal email
  account to filter emails 'To' `@groupvine.com` to their inbox.  Members should consult their email service's help pages for instructions on setting up filters.

If there are questions, please contact us at support@groupvine.com.

<span id="gv-6delivery-1delivmissing-tips-to"></span>
## Tips to help ensure recipients receive your email

To ensure emails reach recipients and avoid emails ending in spam/junk folders, send your community an email with the following:

* Include a list of the email addresses that will be sending community emails and have members add these address to their personal email account's contact list.

* Set up a "To" filter in their personal email account so all emails
  sent 'To' `@groupvine.com` will be saved to their
  inbox. Members should consult their email service's help
  pages for instructions.

<span id="gv-6delivery-1delivmissing-information-to"></span>
## Information to whitelist GroupVine servers

If you find several delivery failures from the same domain,
the provider may be cautious or strict about who is sending
email to their customers and is only allowing deliveries from
senders who they have “whitelisted” or have been trusted.  

If this is the case, contact the domain's IT
department and ask them to add the following GroupVine IP
addresses to their "trusted whitelist" and to let you know once it's done.

    54.241.130.69  mailer-02.groupvine.com
    54.241.131.129 mailer-03.groupvine.com
    54.219.172.113 mailer-04.groupvine.com
    54.219.154.88  mailer-05.groupvine.com

If you need any help with this, contact support@groupvine.com.

<span id="gv-6delivery-1delivmissing-verizon-comcast-issue"></span>
## Verizon or Comcast delivery issue

Comcast or Verizon may drop an email if they think it is spam
instead of saving it to the user's spam folder.  This will make it
appear as if the email was never delivered even though our records
show a successful status from the provider. (Note: We only receive
a status about whether the provider successfully receives an email
without additional information about whether the email was
delivered to the user's inbox, spam folder or if the provider
dropped the email entirely.)

 It is important to have emails marked as spam delivered to your
 spam folder so they can be marked as "not spam".  Then, subsequent
 emails should get delivered to the user's inbox.

 For Comcast users,
 click [here](https://www.xfinity.com/support/articles/spam-filters-and-email-blocking-new-experience)
 and follow the steps under Change Spam Filter preference.
 Note: At step 3, click both the checkboxes Enable spam filter
 of my  account and Save a copy of emails marked as spam that
 appear. The steps on Comcast's site are slightly out of date.

 For Verizon users, contact your Verizon support to get help
 setting up your own spam filters.

 <span class="highlight">
 Once your spam preferences are set up, be sure to check them by
 signing directly in to your provider's site, e.g.
 `comcast.net` or `verizon.net`, instead of from an email
 program like  Outlook. If you find an email there, set the email 
 to "Not Spam." (Do this soon after you expect an email since
 your provider  may automatically clear your spam folder within
 days.)
 </span> <!-- highlight -->
