# Worship Apps

This repository is published with GitHub Pages at https://moreteavicar126.github.io/Lectionary/ and holds a landing page plus two apps, each of which can be saved for offline use:

| Folder | App |
| --- | --- |
| `/` (index.html) | Landing page: choose an app, open it, or save it for offline use |
| `worship-planner/` | The Worship Planner (Lectionary, Bible Readings, Hymn Selector) |
| `lectern/` | Lectern, a service leader's companion for iPad |

`Worship_Planner.html` at the top level is the single-file download of the Worship Planner (see below).

**Updating an app:** change its `index.html`, then bump the cache name in that folder's `sw.js` (Worship Planner: also `APP_VERSION` in the app and `version.json`). Each app deletes only its own caches, so updating one never affects the others.

---

Thank you for downloading the Worship Planner. 

**INSTALLATION**
The Worship Planner html file runs offline in any browser. Save it somewhere on your computer, so that when you open it, you can Favourite it as you would a website, and come back to it easily in a click.
Otherwise open the INDEX file on your phone, while online, let it download the other files it needs, and then it will run offline.

**Select a Sunday**
At the top of the screen is a Sunday Selector, which defaults to today or the most recent Sunday. Use the Calendar pick the date you want. The Browse All Dates button gives you a list of all dates this church year - scroll it to see the current Sunday selected. You can click on any date in this scrollable list.

**Lectionary Readings**
The Lectionary Readings for the selected Sunday, as printed in the Methodist Worship Book (which follows the Revised Common Lectionary for the Principal Service), are displayed. If you are online, these readings can be opened on Bible Gateway in either the NRSV or NIV translation.
For each reading you select, related hymns are displayed below.

**Covenant Sunday**
On the first Sunday in September and the first Sunday in January, a "Covenant Sunday" tick-box appears under the date. Ticking it switches to the Methodist Covenant Service: the first reading of each Either/Or pair (Exodus 24:3-11 and John 15:1-10) is pre-selected along with Jeremiah and Romans, and hymn 549, "Come, let us use the grace divine", is added automatically. Tick the alternative readings (Deuteronomy 29:10-15, Mark 14:22-25) instead if you prefer. Change the date to return to the normal readings.

**The Collect**
Two Collects are provided for each Sunday. You can select either one to include in your export.

Beneath the Collect there is also a **Special Sundays and services** drop-down: choose it to swap in the collect for Mothering Sunday, Church Anniversary, Harvest Thanksgiving, Bible Sunday, Christian Unity, Remembrance Sunday, John and Charles Wesley (Wesley Day), Christmas Eve, Christmas Day (Midnight and Day) or Easter Day (after sunset or after dawn). The seasonal ones appear only when they are needed: Mothering Sunday on the Fourth Sunday in Lent (three weeks before Easter Day), Remembrance Sunday for the Sunday nearest 11 November, the Christmas collects from 19 to 25 December, the Easter Day collects in the six days up to Easter Day (Palm Sunday onwards), and New Year: Watchnight between 25 December and 7 January. The chosen collect is the one that is exported; changing the date returns to that Sunday's own collect.

**The Hymns**
Hymns are grouped under the readings to which they are linked. The Details on the right gives the verses which have been linked to that reading.

**Other Hymns**
There are two ways to add other hymns - by Bible Reading and by Hymn Number/Title. Hymns selected in either of these ways will appear here.

**Bible Reading**
Select A Bible Book and Chapter. This drop down is populated by those Scriptures to which a reference exists. No one has yet written a hymn inspired by Obadiah, for example!

**Hymn Number / Title**
This section is useful for helping you find a partially remembered first line. If you knew, for example, that the first line contained "GLORY" then this section would narrow it down to the 27 hymns in StF which have "GLORY" in the first line.
This section also works as a Hymn Explorer. When you click Details on one of these hymns, it lists ALL the Scripture references in the hymn. Take a look at almost any Charles Wesley hymn to see how rich in Scripture they are.

**Hymn Authors**
Type an author's name (for example "Wesley" or "Watts") into the Hymn Authors box, or tap one of the quick buttons for the most-represented authors. Their hymns are then highlighted in the Hymns suggested for your readings (with a count against each reading), in Hymns by Bible Passage, in Other Hymns and in the hymn search results, and every hymn in the book by that author is listed in the box itself, where you can tick to add it to Other Hymns. Tick "Show only this author's hymns" to hide the rest in the reading and Bible Passage lists (hymns you have already ticked stay visible). Matching is on part of the name, so "Wesley" finds Charles and John Wesley (and Scott Wesley Brown); choose the full name from the suggestions to be precise. Adapters, such as "adapted by Norman Wallwork", are not counted as authors.

**Updates**
The footer shows the version you are running. Tap "Check for updates" at any time (the app also checks quietly a few seconds after opening, when you are online). If a newer version exists, "Refresh now" clears the saved offline copy and reloads the latest from the web; your current selections are cleared. A copy of Worship_Planner.html saved on your computer cannot update itself - "Refresh now" opens the online version, and you can download the new file from GitHub to replace your saved one.

**Export**
Once you have chosen your Readings and Collect, select the hymns in the order they will be used in the service. The app then builds the service sheet based on that order, so that you can export to text or pdf to email to the Church Steward.
