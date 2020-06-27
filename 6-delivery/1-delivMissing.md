# Email Delivery & Troubleshooting

## Members are not getting emails
<span id="gv-Members-are-not-getting"></span>

### Some of our members are not receiving their email, or they don't realize they landed in spam/junk folders. What can we do?

Some of our members don't receive our emails, but most often, they don't
realize that the emails have landed in their spam or junk folders.
How can we get our emails to not be classified as junk or spam?

<span class="todo">
  Following sections needed
</span>

* **JHJHJHicon-needed**
* **JHJHJHsomething-needed? EMPLOYEE**
* **GroupVine Support (Official Rep) over 4 years ago JHJHJHthis-probably-not-needed**
* Another possibility that we found with Comcast and Verizon users in
particular is that, by default, emails marked as spam by these providers
were not being saved to the user's spam folder.
This made it appear as if the email was never delivered, even though our
records showed that we delivered the email to the provider and received
a successful status back. Note: once the provider successfully receives
the email, we don't receive additional status information as to whether
the email was delivered to the user's inbox, spam folder or if the
provider dropped the email entirely.

* It's important to have emails marked as spam delivered to your spam
folder so that users can mark them as "not spam".
Once the provider processes this information, subsequent emails should
start getting delivered to the user's inbox.


<span class="todo">
  link needed for Comcast users below
</span>

* For Comcast users, **click here** and follow the
steps under **Change Spam Filter** preference **JHJHJHgrammar?**.
**Note: At step 3 JHJHJHunderline?**, click both the checkboxes **Enable
spam filter of my account** and **Save a copy of emails marked as spam**
that appear.
The steps on Comcast's site are slightly out of date.

* For Verizon users, **click here JHJHJHlink-needed** and follow the
steps to view messages that Verizon's Spam Detector filters.

Once your spam folder is set up, be sure to check it by signing directly
to your provider's site, e.g. `comcast.net` or `verizon.net`, instead of
from an email program like Outlook.
(Please do this soon after you're expecting an email since your provider
could be clearing your spam folder automatically for you within a few to
several days).
If you find an email there, click on its checkbox and click **Not Spam**.

**JHJHJHicon-needed?**

**Employee JHJHJHicon-needed?**

** the text 'Groupvine Support' from the doc is probably not needed here **

!-- JHJHJH Note to Groupvine Staff: limiting to some number of columns,
 -- perhaps 72, maybe even a lot less, is important here because the text
 -- is essentially quoted/indented
 -->

!-- Note to Groupvine Staff: couldn't get markdown blockquotes ('>') to work
 -- here, so trying indent with four spaces. The downside of this approach
 -- causes the text to be in 'code' format (font not so pleasing)
 
    Hi Everyone,
     
    If you didn't experience email delivery problems in the past that
    required explicit "whitelisting" of our server IP addresses, then this
    change will likely not impact you.
    
    However, if your emails had been blocked in the past (for example, if
    some recipients with addresses ending in `@mycompany.org` or
    `@myschool.k12.edu` were not receiving your emails), and it was
    necessary for the company or school/district IT department to
    explicitly add the GroupVine servers onto their trusted "whitelist,"
    then please contact them again to request that they add our two new
    server addresses.  If this step isn’t done, then they may block emails
    coming from our new servers.
    
    What information do you need to provide? You just need to ask them to
    add the following GroupVine IP addresses to their trusted "whitelist"
    of email addresses:

        54.241.130.69 mailer-02.groupvine.com
        54.241.131.129 mailer-03.groupvine.com
        54.219.172.113 mailer-04.groupvine.com (new)
        54.219.154.88 mailer-05.groupvine.com (new)
    
    In case it's helpful, we've prepared an email below.
    Just replace the highlights with your specific information.
    
    If you have any questions or need any assistance, please
    contact us at `support@groupvine.com` **JHJHJHmailto-link needed?**.
    
---
!-- Note to Groupvine Staff: limiting to some number of columns,
 -- perhaps 72, maybe even a lot less, is important here because the
 -- text is essentially quoted/indented
 -->
---
** ~~~~~~~~~~~~~~~~~~~ prepared email below ~~~~~~~~~~~~~~~~~~~~~ JHJHJHstyle ** 
***


    Hello,
    
    I am the administrator for the <YOUR COMMUNITY NAME> GroupVine
    account that we use to send emails, and I’m contacting you because
    you are listed as the contact for the <ENTER THE COMPANY OR SCHOOL
    DOMAIN>, e.g. `mycompany.org domain`.
    
    GroupVine (**http://www.groupvine.com**), which provides the
    **JHJHJHour?** group email services, just informed us that to
    increase the robustness and performance of their email delivery
    service, they are adding additional servers to send email for
    `groupvine.com`, and thus have introduced two new IP addresses.
    Here is the list of the updated IP addresses for the GroupVine email
    servers that we need whitelisted:
    
        54.241.130.69 mailer-02.groupvine.com
        54.241.131.129 mailer-03.groupvine.com
        54.219.172.113 mailer-04.groupvine.com (new)  **JHJHJHstyle-for-'new'**
        54.219.154.88 mailer-05.groupvine.com (new)   **JHJHJHstyle-for-'new'**

    We appreciate your quick action on this to ensure our emails
    continue to be delivered successfully!

    If you have any questions, please contact <CONTACT'S NAME at YOUR
    EMAIL ADDRESS>, or you can email `support@groupvine.com` for any
    technical questions.

    Thank you!
    <YOUR NAME>
    
**JHJHJHicon-needed?**

**Employee JHJHJHicon-needed?**

** the text 'Groupvine Support' from the doc is probably not needed here **

*BEWARE, the rest has not been prettified, it has just been copied from
*the doc and just pasted here since I'm
* not sure I've done the right thing with the quoted text above

There are a number of reasons why members may not be receiving your emails. To begin the process of diagnosing why users are not receiving your emails, please do the following:


Click View email archive on your **Home** page.
Locate an email you have previously sent and click on its Stats icon ( ).
If you have delivery failures, click the link "X Email Address Delivery Failures and Delays". The two possible errors are "bounced” and “delayed”.

After you have completed the above steps please identify which scenarios match your current situation and scroll down to get answers.

Scenarios:


I’m seeing “bounced” or “delayed” for one or more recipients in the list of delivery failures and they do NOT have an email address from one of the big Email Service Providers (eg. Gmail, Yahoo, AOL, or Hotmail). In this case you may find a number of recipients with addresses in the same domain (eg. xxx@k-5school.us) which are bouncing or being delayed or there could be no errors for these addresses but a number of people are reporting not receiving your email.
Members with an email address from one of the Email Service Providers (eg. Gmail, Yahoo, AOL, etc). are reporting they are not receiving my emails.
Members with an email address from Hotmail (including Administrators or Editors) are not receiving their own emails when it’s sent from their Hotmail address.
Members with an email address from AOL (including Administrators or Editors) are not receiving their own emails when it’s sent from their AOL address.


Scenario 1: I’m seeing “bounced” or “delayed” for one or more recipients in the list of delivery failures and they do NOT have an email address from one of the big Email Service Providers (eg. Gmail, Yahoo, AOL, or Hotmail). In this case you may find a number of recipients with addresses in the same domain (eg. xxx@k-5school.us) which are bouncing or being delayed or there could be no errors for these addresses but a number of people are reporting not receiving your email.

If you’re sure the email address for your recipient is valid then their organization’s email server is probably bouncing or delaying email from GroupVine due to the organization’s email security settings. Please contact the IT department and ask them to investigate how their mail server is handling incoming email from the groupvine.com web domain. Most likely they need to whitelist the GroupVine email server IP addresses listed below to their safe senders or exception list to allow your emails to be forwarded along to the recipients.

54.241.130.69
54.241.131.129
54.219.172.113
54.219.154.88

(Use the sample email we've prepared in this question to contact your IT department.)

If there are no errors being reported for these recipients then please check to see if your email is landing in the spam or junk mail folders. If so, please ask them to add your sender email address to their safe senders and/or contact lists or add a "To" filter in their personal email for "groupvine.com" (see here for details).

Scenario 2: Members with an email address from one of the Email Service Providers (eg. Gmail, Yahoo, AOL, etc). are reporting they are not receiving my emails.

If you see “bounced” or “delayed” in the list of delivery failures for these users then most likely their email address is not valid, either due to a typo or perhaps their account no longer exists. Please confirm the email address and update their member profile as needed. To update a recipient’s email address:


In the list of delivery failures, click on the recipient's email address
that needs to be updated to reach their **User Profile** page.
On the **User Profile** page you can update the user’s Primary email
address or Alternate email address.
Note that if the username may also need updating to match-up with the
new email address.
After pressing Save, use the **Back** button in the upper right to return
to the **recipients JHJHJHcapitalize-and-bold?** page.

If there are no errors being reported for these recipients then please check to see if your email is landing in the spam or junk mail folders. If so, please ask them to add your sender email address to their safe senders and/or contact lists or add a "To" filter in their personal email for "groupvine.com" (see here for details).

Scenario 3: Members with an email address from Hotmail (including Administrators or Editors) are not receiving their own emails when it’s sent from their Hotmail address.

If members with Hotmail email addresses are not receiving their own emails
they likely need to set-up filters in Hotmail to remedy the problem.
Here’s a support page to pass along to your members with simple
step-by-step instructions on setting up Hotmail filters.

Scenario 4: Members with an email address from AOL (including Administrators or Editors) are not receiving their own emails when it’s sent from their AOL address.

If you’re an AOL user then most likely you will not be able to receive emails that you send because of AOL’s security settings. You may want to consider creating a new email address for your account to send emails so that you can also receive them properly in your AOL account. Instructions for creating a new email address can be found here.

Then here's a tip to help your recipients receive your email:
As soon as possible so nothing is missed, we strongly suggest your account Administrator informs every member which email addresses to add to their contact list and instructions, which can be found here, on how to set up "To" filters in their email. Both of these pieces of information can be passed on to members by doing one or, preferably, both of the following:


Sending from an existing email address to all members
If your account is for a school or family group, then sending home a paper flyer to every member or family


Example email/flyer text
IMPORTANT
We need your help to ensure our communications reach your inbox!

To make sure our emails don’t end up in your spam/junk folder, simply add these email
addresses to your contact list in your email tool:

    aaa@bbb.com
    ccc@ddd.com
    ...

That’s it! Done! Thank you for your cooperation!

(If you find you’re not receiving our emails, please contact XXX at xxx@yyy.com.)

[IMPORTANT NOTE: replace the above 'XXX' and email addresses with all email addresses that you use to send emails to your community.]

EMPLOYEE
GroupVine Support (Official Rep) over 9 years ago
There are a number of reasons why members may not be receiving your emails. To begin the process of diagnosing why users are not receiving your emails, please do the following:


Click on View email archive from your **Home** page.
Locate an email you have previously sent and click on its Stats icon ().
On the **Recipient Information** page you can click to see delivery failures
and delays.
The two errors that are possible are “Bounced” and “Delayed”.

After you have completed the above steps please identify which scenarios match your current situation and scroll down to get answers.


Scenarios:


I’m seeing “Bounced” or “Delayed” for one or more recipients in the Errors column and they do NOT have an email address from one of the big Email Service Providers (eg. Gmail, Yahoo, AOL, or Hotmail). In this case you may find a number of recipients with addresses in the same domain (eg. xxx@k-5school.us) which are bouncing or being delayed. Or perhaps there are no errors for these addresses but a number of people are reporting not receiving your email.
Members with an email address from one of the Email Service Providers (eg. Gmail, Yahoo, AOL, etc). are reporting they are not receiving my emails.
Members with an email address from Hotmail (including Administrators or Editors) are not receiving their own emails when it’s sent from their Hotmail address.
Members with an email address from AOL (including Administrators or Editors) are not receiving their own emails when it’s sent from their AOL address.

Scenario 1: I’m seeing “Bounced” or “Delayed” for one or more recipients in the Errors column and they do NOT have an email address from one of the big Email Service Providers (eg. Gmail, Yahoo, AOL, or Hotmail). In this case you may find a number of recipients with addresses in the same domain (eg. xxx@k-5school.us) which are bouncing or being delayed. Or perhaps there are no errors for these addresses but a number of people are reporting not receiving your email.
If you’re sure the email address for your recipient is valid then their organization’s email server is probably bouncing or delaying email from GroupVine due to the organization’s email security settings. Please contact the IT department and ask them to investigate how their mail server is handling incoming email from the groupvine.com web domain. Most likely they will need to add the following list of mail server IP addresses to their safe senders or exception list:

54.241.130.69
54.241.131.129

Most likely they need to whitelist the GroupVine email server listed above to allow your emails to be forwarded along to the recipients.

If there are no errors being reported for these recipients then please check to see if your email is landing in the spam or junk mail folders. If so, please ask them to add your sender email address to their safe senders and/or contact lists. For more information on how to add email addresses to a safe sender list or address book click here.

Scenario 2: Members with an email address from one of the Email Service Providers (eg. Gmail, Yahoo, AOL, etc). are reporting they are not receiving my emails.
If you see “Bounced” or “Delayed” in the Errors column for these users then most likely their email address is not valid, either due to a typo or perhaps their account no longer exists. Please confirm the email address and update their member profile as needed. To update a recipient’s email address:


On the **Recipients** page for a previously sent email, click on the
email address of the recipient that needs to be updated to reach their
**User Profile** page.
On the **User Profile** page you can update the user’s Primary email
address or Alternate email address.
Note that if the username may also need updating to match-up with the new
email address.
After pressing Save use the Back button in the upper right **JHJHJHwhere?** to
return to the **Recipients** page.

If there are no errors being reported for these recipients then please check to see if your email is landing in the spam or junk mail folders. If so, please ask them to add your sender email address to their safe senders and/or contact lists.

Scenario 3: Members with an email address from Hotmail (including Administrators or Editors) are not receiving their own emails when it’s sent from their Hotmail address.

If members with Hotmail email addresses are not receiving their own emails
they likely need to set-up filters in Hotmail to remedy the problem.
Here’s a support page to pass along to your members with simple
step-by-step instructions on setting up Hotmail filters.

Scenario 4: Members with an email address from AOL (including Administrators or Editors) are not receiving their own emails when it’s sent from their AOL address.
If you’re an AOL user then most likely you will not be able to receive emails that you send because of AOL’s security settings. You may want to consider creating a new email address for your account to send emails so that you can also receive them properly in your AOL account. Instructions for creating a new email address can be found here.



A tip to help your recipients receive your email:
As soon as possible so nothing is missed, we strongly suggest your account Administrator informs every member which email addresses to add to their contact list and instructions, which can be found here, on how to set up "To" filters in their email. Both of these pieces of information can be passed on to members by doing one or, preferably, both of the following:


Sending from an existing email address to all members
If your account is for a school or family group, then sending home a paper flyer to every member or family

Example email/flyer text
IMPORTANT
We need your help to ensure our communications reach your inbox!

To make sure our emails don’t end up in your spam/junk folder, simply add these
email addresses to your contact list in your email tool:

    aaa@bbb.com
    ccc@ddd.com
    ...

That’s it! Done! Thank you for your cooperation!

(If you find you’re not receiving our emails, please contact XXX at xxx@yyy.com.)

[IMPORTANT NOTE: replace the above 'XXX' and email addresses with all email addresses that you use to send emails to your community.]


More details about spam avoidance
As you are probably aware, we're constantly fighting the battle to keep emails from ending up in members' spam/junk folders. To alleviate the spam issue and to ensure your communications successfully reach your families, we've found the easiest and best way is to have ALL members add your account senders' email addresses to their email contacts in their preferred email application (per the above tip). This is especially true for users using an online email provider, like Yahoo, AOL, Hotmail, etc.

The content in your email also has a big impact on the likelihood your email will be categorized as spam. Here are a couple references that provide good tips on avoiding spam filters:


**http://www.internetbasedmoms.com/ezin..**
**http://www.interspire.com/content/200..**


