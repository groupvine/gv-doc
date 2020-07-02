# Email Delivery & Troubleshooting

<span id="gv-6delivery-1delivmissing"></span>
## Members aren't getting emails

* [Tips to help ensure recipients receive your emails](#gv-6delivery-1delivMissing-tips-to)
* [Information to whitelist GroupVine servers](foo.md?[#gv-6delivery-1delivMissing)

There are several reasons why recipients might not be receiving emails. 
A couple of common reasons can be easily resolved by looking up to see
if the recipient's email address is listed on the **Delivery Issues**
tab on the **Membership** page.

* If the recipient has a "problem" email address, then confirm their
correct address and update their email address in their membership.

<span class="highlight">
Once a member's email address has bounced twice, it is considered an
invalid address and we no longer attempt to deliver emails to the
address.  This is done to keep us in good standing with email providers
so that they don't consider us spammers and will continue deliver our
emails to inboxes.  
</span>

<span class="g4s">
* If the recipient is opted-out, click their email address to jump
to the member's settings and uncheck the **Opted out?** checkbox in
the Membership status section. 
</span> <!-- g4s -->

<span class="sub">
If the recipient is opted-out, have them re-submit their information on
your subscription page and confirm their interest in the confirmation
email sent to them.  (Your subscription page's URL is on the Add New
Member tab on the Membership page.) 

Note, if **Admin approval required for new subscribers?** is set to
**Yes** on your **Account Settings** tab, then an Administrator will
need to approve of the application before they are opted-in.
</span> <!-- sub -->

<span class="free">
* If the recipient is opted-out, have them re-submit their information
on your subscription page and then confirm their interest in the
confirmation email sent to them.  (Your subscription page's URL is
on the **Add New Member** tab on the **Membership** page.) 
</span> <!-- free -->

For other possible reasons, 
[view your email's detailed delivery data](etc) 
<span class="todo">
**Fix the link above**
</span>

and based on the email address domain or bounce reason, here are some
scenarios that may match your situation.

* If you see "bounced" or "delayed" in the list of delivery failures,
then it is most likely that the email address is not valid, either due
to a typo, their account no longer exists or their email service
provider happened to be "down" at the time of the send.  Confirm the
correctness of the email address and update the member's profile as
needed. 

* Comcast or Verizon may drop an email if they think it is spam
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
 click [**here**](etc?[...])
 <span class=todo">
 **does the above link work?**
 </span>
 and follow the steps under **Change Spam Filter** preference.
 Note: At step 3, click both the checkboxes **Enable spam filter**
 of my
 <span class="todo">
 **my? or their?**
 </span>
 account and **Save a copy of emails marked as spam that
 appear**. The
 steps on Comcast's site are slightly out of date.

 For Verizon users, contact your Verizon support to get help
 setting up your
 <span class="todo">
  **your? or their?**
  </span>
 own spam filters.

 <span class="highlight">
 Once your spam preferences are set up, be sure to check them by
 signing directly in to your provider's site, e.g.
 `comcast.net` or `verizon.net`, instead of from an email
 program like  Outlook. If you find an email
 <span class="todo">
 ** any email? **
 </span>
 there, set it
 <span class="todo">
 ** what is "it"? **
 </span>
 to "Not Spam." (Do this soon after you expect an email since
 your provider  may automatically clear your spam folder within
 days.)
 </span> <!-- highlight -->

* If several delivery failures are from the same domain, the
  provider may be preventing deliveries and you may need to ask
  them to [**whitelist the IP addresses of GroupVine's email
  servers**](foopage]?#foohash)
  <span class="todo">
  ** does the above link work? **
  </span>
  .

* If no errors are being reported, ask the recipient to check
  their spam or junk mail folder.  If the email is not there,
  ask them to add an email filter to their personal email
  account to filter emails "To" groupvine.com to their inbox.

If there are questions, please contact us at
[support@groupvine.com](mailto:support@groupvine.com).

<span id="gv-6delivery-1delivMissing-tips-to"></span>
## Tips to help ensure recipients receive your email

To ensure emails reach recipients, we suggest emailing the
following from an existing, already established address or
by creating a paper flyer to send home to all members (see
example text below):

* Add all community senders' email addresses to their
  email account's contact list.
* Set up a "To" filter in their email account so all emails
  sent to "anything `@groupvine.com`" will be saved in their
  inbox. Members should consult their email service's help
  pages for instructions.

Below is an example email message, with bolded text
indicating appropriate information as it pertains to your
specific account.
<span class="todo">
JH: Apologies in advance, but I've changed the whole
sentence above to use "improved" grammar
</span>

<span class="highlight">
**IMPORTANT:**

We need your help to ensure our communications reach your inbox!

To avoid our emails ending up in your spam/junk folder, please
add these email addresses to your contact list in your email tool:

    aaa@bbb.com
    ccc@ddd.com
    ...

Thank you for your cooperation!

< your name >  
< your title >

<span class="todo">
JH: Not sure how to boldify bits of text in the the above
</span>

</span> <!-- highlight -->

<span id="gv-6delivery-1delivMissing-information-to"></span>
## Information to whitelist GroupVine servers

If you find several delivery failures from the same domain,
the provider may be cautious or strict about who is sending
email to their customers and only allows deliveries from
senders who they have “whitelisted” or have been trusted.  

If this is the case, you may need to contact their IT
department to ask them to add the following GroupVine IP
addresses to their "trusted whitelist".

    54.241.130.69  mailer-02.groupvine.com
    54.241.131.129 mailer-03.groupvine.com
    54.219.172.113 mailer-04.groupvine.com
    54.219.154.88  mailer-05.groupvine.com

<span class="highlight">

Hello,

I am the administrator for the **YOUR COMMUNITY NAME**
GroupVine account that we use to send emails, and I am
contacting you because you are listed as the contact
for the **ENTER THE COMPANY OR SCHOOL DOMAIN**,e.g.
`mycompany.org domain`.

GroupVine (http://www.groupvine.com), which provides
the group email services, just informed us that to
increase the robustness and performance of their email
delivery service, they are adding additional servers to
send email for `groupvine.com`, and thus have
introduced a set of new IP addresses. Here is the list
of the updated IP addresses for the GroupVine email
servers that we need whitelisted:

    54.241.130.69  mailer-02.groupvine.com
    54.241.131.129 mailer-03.groupvine.com
    54.219.172.113 mailer-04.groupvine.com
    54.219.154.88  mailer-05.groupvine.com

We appreciate your quick action on this to ensure our
emails continue to be delivered successfully!

If you have any questions, please contact **CONTACT'S
NAME** at **YOUR EMAIL ADDRESS**, or you can email
support@groupvine.com for any technical questions.

Thank you!

< **YOUR NAME** >  

</span>

<span id="gv-6delivery-1delivMissing-bounced-emails"></span>
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

<span id="gv-6delivery-1delivMissing-what-to-do"></span>
## What to do when some email addresses bounce?

For the bounced email addresses, the goal is to correct
the addresses in your account and resend the email to
those corrected addresses.  Here's how to do that:

1. Confirm the correctness of the email address and update
the member's email address from the Member Listing tab on
the Membership page.

2. From your Email Feed in Gallery view, open the email
you're interested in, click its 
<span class="todo">
icon-needed
</span>
(hamburger menu) in the top right corner of the email,
and select **View delivery data**.  On the **New Email**
page select the option **Resend published email without any
changes** and click **Review & Send**.  (Note, if changes
will be made to the email, then select **Copy published
email to your new email** and **make changes**, enter the
new email subject, and click **Compose**.) Click **Send**
and select those members whose address who you corrected
on the **Select Individuals**.  Click **Resend!**

If the Email Feed is in the Listing view, click the ellipsis
of the email and select **Resend email**.

If you have any questions or need any additional help,
please contact us at
[support@groupvine.com](mailto:support@groupvine.com).

<span class="highlight">

Once a member's email address has bounced twice, it is 
considered a "problem" address and we no longer attempt to
deliver emails to the address.  This is done to keep us in
good standing with email service providers so they don't
consider us spammers and will continue to accept and
deliver our emails to their customers' inboxes.

</span>

<span id="gv-6delivery-1delivMissing-who-opened"></span>
## Who opened my email?

<span class="highlight">
An "open" is only counted if the recipient opens their
email from their inbox with images displayed.
</span>

Here is how to find how many and who has opened your email:

1. From your Email Feed in Gallery view, open the email
you're interested in.

2. Click the 
<span "todo">
**icon-needed**
</span>
(hamburger menu) in the top right corner of the email and
select **View delivery data**.

3. The email's delivery data summary will appear with
information on deliveries and on failures.  Click **Download
Delivery Data** to see which recipients opened your email.

If the Email Feed is in the Listing view, click the email's
ellipsis and select **View delivery data**.

## "Bounced out" or "problem" email addresses

Once a member's email address has bounced twice, it's
considered a "problem" address and the address has
"bounced out" where we no longer attempt to deliver
emails to that address.  

This is done to keep us in good standing with email
service providers so they don't consider us spammers
and will continue to accept and deliver our emails
to their customers' inboxes. 

<span id="gv-6delivery-1delivMissing-download-detailed"></span>
## Download detailed email delivery information

To download detailed email delivery information:

1. From your Email Feed in Gallery view, click on the
email you're interested in.

2. Click the
<span "todo">
icon-needed
</spann>

(hamburger menu) in the top right corner of the email and
select **View delivery data**.

The email's delivery data summary will appear with information on deliveries and on failures.  Click Download Delivery Data for a spreadsheet of the email's detailed delivery information.

3. The email's delivery data summary will appear with
information on deliveries and on failures.  Click **Download
Delivery Data** for a spreadsheet of the email's detailed
delivery information.

If the Email Feed is in the Listing view, click the email's
ellipsis and select **View delivery data**. 
