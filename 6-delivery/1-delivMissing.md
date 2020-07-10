# Email Delivery & Troubleshooting

<span id="gv-6delivery-1delivmissing"></span>
## Members aren't getting emails

* [Tips to help ensure recipients receive your emails](#gv-6delivery-1delivmissing-tips-to)
* [Information to whitelist GroupVine servers](#gv-6delivery-1delivmissing-information-to)
* [Bounced emails](#gv-6delivery-1delivmissing-bounced-emails)
* [What to do when email addresses bounce?](#gv-6delivery-1delivmissing-what-to-do)
* [Who opened my email?](#gv-6delivery-1delivmissing-who-opened)
* [What are "Bounced out" or "problem" email addresses?](#gv-6delivery-1delivmissing-problem-addr)
* [Download detailed email delivery information](#gv-6delivery-1delivmissing-download-detailed)
* [Verizon or Comcast delivery issue](#gv-6delivery-1delivmissing-verizon-comcast-issue)

There are several reasons why recipients are not receiving community emails. 
A couple of common reasons can be easily resolved by doing a simple look-up to see
if the recipient's email address is listed on the Membership's Delivery Issues page.

* If the recipient's email address is a "problem" address or has bounced out ([what this?](#gv-6delivery-1delivmissing-problem-addr)), then confirm their
correct address and update their email address in your membership.

<span class="g4s">
 
* If the recipient is opted-out, click their email address to jump
to the member's settings and uncheck the `Opted out?` checkbox in
the Membership status section. 

</span> <!-- g4s -->

<span class="sub">
 
* If the recipient is opted-out, have them re-submit their information on
your subscription page.  By confirming their interest in the confirmation
email sent, they will be opted back in.  (Your subscription page's URL is on the Membership's Add New Member page.) 

<span class="highlight">
Note, if `Admin approval required for new subscribers?` is set to
`Yes` on the <img src="/docimages/transparent-gear-icon.png" height="22"> Account Settings page, then an Administrator will
need to approve of the application before the recipient can be opted-in.
</span> <!-- highlight -->
</span> <!-- sub -->

<span class="free">
 
* If the recipient is opted-out, have them re-submit their information
on your subscription page.  By confirming their interest in the confirmation
email sent, they will be opted back in.  (Your subscription page's URL is
on the Add New Member tab on the Membership page.) 

</span> <!-- free -->

For other possible reasons, [download your email's detailed delivery data](#gv-6delivery-1delivmissing-download-detailed)
and see if one of these scenarios match your situation.

* If you see "bounced" or "delayed" in the list of delivery failures,
then most likely the email address is not valid, either due
to a typo, their account no longer exists or their email service
provider happened to be "down" at the time of the send.  Confirm the
correctness of the email address and update from the Membership's Member List page. 

* Comcast or Verizon may drop an email if they think it is spam
instead of saving it to the user's spam folder.  See [Verizon or Comcast delivery issue](#gv-6delivery-1delivmissing-verizon-comcast-issue) for information.

* If several delivery failures are from the same domain, the
  provider may be preventing deliveries and you may need to ask
  them to [whitelist the IP addresses of GroupVine's email servers](#gv-6delivery-1delivmissing-information-to).

* If no errors are being reported, ask the recipient to check
  their spam or junk mail folder.  If the email is not there,
  ask them to add an email filter to their personal email
  account to filter emails "To" groupvine.com to their inbox.

If there are questions, please contact us at support@groupvine.com.

<span id="gv-6delivery-1delivmissing-tips-to"></span>
## Tips to help ensure recipients receive your email

To ensure emails reach recipients and avoid emails from ending in their spam/junk folders, send them an email with the following:

* Include a list of community senders to add to their email account's contact list.
* Set up a "To" filter in their email account so all emails
  sent to @groupvine.com will be saved in their
  inbox. Members should consult their email service's help
  pages for instructions.

<span id="gv-6delivery-1delivmissing-information-to"></span>
## Information to whitelist GroupVine servers

If you find several delivery failures from the same domain,
the provider may be cautious or strict about who is sending
email to their customers and is only allowing deliveries from
senders who they have “whitelisted” or have been trusted.  

If this is the case, you may need to contact their IT
department to ask them to add the following GroupVine IP
addresses to their "trusted whitelist".

    54.241.130.69  mailer-02.groupvine.com
    54.241.131.129 mailer-03.groupvine.com
    54.219.172.113 mailer-04.groupvine.com
    54.219.154.88  mailer-05.groupvine.com

<span id="gv-6delivery-1delivmissing-bounced-emails"></span>
## Bounced emails

A bounced email is an email could not be delivered to
the recipient's email address which can happen for a
variety of reasons, but usually occurs when an email
address is incorrect or a recipient's mailbox is full.

If, after sending an email from an online account or from
a personal email account, there were any failed
deliveries, an "Email delivery report" from "Trivy Worker
Bee" is sent to the sender containing a list of bounced
email addresses and the reason for the bounce.  If all
deliveries were successful, then a delivery report will
not be sent.  

<span id="gv-6delivery-1delivmissing-what-to-do"></span>
## What to do when email addresses bounce?

For the bounced email addresses, the goal is to correct
the addresses in your account and resend the email to
those corrected addresses.  Here's how to do that:

* Confirm the correctness of the email address and update the member's email address from the the Membership's Member Listing page.
* View the Email Feed in Listing view (<img src="/docimages/listing-view-icon.png" height="22">) and locate your email.
* Click on the email's ellipsis (<img src="/docimages/ellipsis.png" height="22">) and select <img src="/docimages/feed-menu-resend-email.png" height="22">.
* On the New Email page select the option `Resend published email without any changes` and click `Review & Send`.  (Note, if email changes
 are needed, then select `Copy published email to your new email`, enter a subject and click `Compose`.) 
* When ready, click `Send`, select the Select Individuals tab and select those members whose address you corrected.  
* Click `Resend!`

The Resend option can also be selected by viewing the online email and making the selection from the email's menu (<img src="/docimages/menu-icon.png" height="22">).

If you have any questions or need any additional help, please contact us at support@groupvine.com.

<span id="gv-6delivery-1delivmissing-who-opened"></span>
## Who opened my email?

<span class="highlight">
An "open" is only counted if the recipient opens their
email from their inbox with images displayed.
</span>

To find how many and who has opened your email:

* [Download detailed email delivery information](#gv-6delivery-1delivmissing-download-detailed)
* View `Opens` statistics or click `Download Delivery Data` to download a spreadsheet of delivery data with specifics on who opened your email.

<span id="gv-6delivery-1delivmissing-problem-addr"></span>
## What are "Bounced out" or "problem" email addresses?

Once a member's email address has bounced twice, it's
considered a "problem" address and the address has
"bounced out" where we no longer attempt to deliver
emails to that address.  

This is done to keep us in good standing with email
service providers so they don't consider us spammers
and will continue to accept and deliver our emails
to their customers' inboxes. 

<span id="gv-6delivery-1delivmissing-download-detailed"></span>
## Download detailed email delivery information

To download an email's detailed email delivery information:

* View the Email Feed in Listing view (<img src="/docimages/listing-view-icon.png" height="22">) and locate your email.
* Click on the email's ellipsis (<img src="/docimages/ellipsis.png" height="22">) and select <img src="/docimages/feed-menu-view-delivery.png" height="24">.
* Click `Download Delivery Data` to download all delivery details to a spreadsheet.

This can also be done when viewing the online email and making the selection from the email's menu (<img src="/docimages/menu-icon.png" height="22">).

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
