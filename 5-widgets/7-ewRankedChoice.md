# Ranked Choice Email Widgets

<span id="gv-5widgets-ewRankedChoice"></span>

## Introduction

The Ranked Choice email widget provides an excellent way to poll your
membership for their preferences among multiple choices.  Whereas the
simpler single- or multiple-choice widget can result with "plurality"
winners (winning selections that have more votes than the others,
though still only have minority support), Ranked Choice helps ensure
that the winners are those with the broadest support.

To add a Ranked Choice widget to your email, select the "Widget" menu
in the online editor, and then "Custom Choice."  Then, in the
configuration pop-up, select "Ranked Choice" from the choice type
menu.  You'll then have options to limit the 
maximum number of preferences each member can rank (default 3), and also to
set the number of resulting winners (default 1).

## Example

Here's an example of a Ranked Choice in action, with this member
selecting "Bananas", "Peaches", and then "Blueberries" as their top
fruit preferences.

<div style="margin-left:20px">
  Fruit makes us happy,  please let us know your favorites.  You can rank
  up to 3 preferences and we'll bring a bowl of the two inners to the
  party:

  <img src="/docimages/ranked-choice-widget.png" width="100%">
</div>

After 6 responses, Bananas and Peaches (marked with the asterisks)
have the most support.

## How results are computed

<a href="https://youtu.be/oHRPMJmzBBw?si=R9BXgSfeuJedUd96"
target="_blank"> This video </a> presents a good introduction for how
ranked-choice voting (RCV) can be used to select a single winner.
When selecting multiple winners, the specific computer-friendly,
method used by the Email Widget is slightly more complicated, although
<a href="https://youtu.be/lNxwMdI8OWw?si=LDvKYt8OeATUfM9I"
target="_blank"> this instant-runoff video </a> presents the concepts
well.

As is the case for all email widgets, results can also be
arbitrarily analyzed later by downloading a spreadsheet with the raw
response data.

For even more detail, the specific algorithm used is the proportional,
single-transferrable vote method described in detail <a
href="https://prfound.org/resources/reference/reference-meek-rule/"
target="_blank"> here</a>.

Finally, (probably) all the information you ever wanted to know on
Ranked Choice Voting can be found <a
href="https://fairvote.org/our-reforms/ranked-choice-voting/"
target="_blank"> here </a> and <a
href="https://www.rcvresources.org/what-is-rcv/" target="_blank">
here, </a> or if you prefer cute pets, you might like <a
href="https://youtu.be/7P6aYbUo19U?si=XeZqpZzwK80PwsKV"
target="_blank"> this.  </a>

## Disclaimer

Note that these Email Widgets should not be utilized for official
elections that require stronger security than is currently possible
using such email and online services.
