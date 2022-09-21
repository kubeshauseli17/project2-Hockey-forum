Project Idea
-------------------------
My idea for my second project is to make a simple Hockey forum that allows people to register as users,
and post threads or comments about their favorite teams once members. Growing up in Buffalo, NY hockey 
was my first love in life. I've been a die hard Buffalo Sabres fan since before Kindergarden. Also I've 
been a member of a hockey forum https://forums.hfboards.com/ for close to 20 years at this point. So it
 seemed like a good choice for a theme for a blog, especially with the season right around the corner.

App description
-------------------------
My app ended up roughly like I was planning. It's a simple forum where you can register as a user, post
threads about what's happeneing around the league and comment on other users posts. I hav ethe NHL API 
setup to pull the latest standings for teams in the league on the standings page.

App Links
-------------------------
https://github.com/kubeshauseli17/project2-Hockey-forum
https://app.koyeb.com/apps/402d1d41-c54d-43d5-89ad-e697d1d2e3eb/services/f110c434-ec05-4921-b316-fce5a095c5b1
https://app.supabase.com/project/fxbzfslsmgcpzguzkgid/settings/database


Installation
-------------------------
To setup this app 

* Fork and clone this repository
* Run `npm install` to install dependencies
* Setup your database (this app already has two existing models)
  * Run `sequelize db:create` to create the database
  * Run `sequelize db:migrate` to run migrations
* Use `npx nodemon` (or just `nodemon` if you installed it globally) to start your application



API
-------------------------
The API I am planning on using is called the NHL API. https://github.com/dword4/nhlapi It has
player stats and team standings going back years. It also has scores for all of the current games and 
already played games. Seing as the season hasn't started yet I'm planning on using it for the last few years
standings and maybe the scores for any preseason games scheduled to be played. Fairly limited scope for my 
application, but interesting to see how analytics departments track data betwen leagues in real time.

Example JSON
-------------
{
"copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team
 marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved.",
"records": [
{
"standingsType": "regularSeason",
"league": {
"id": 133,
"name": "National Hockey League",
"link": "/api/v1/league/133"
},
"division": {
"id": 18,
"name": "Metropolitan",
"nameShort": "Metro",
"link": "/api/v1/divisions/18",
"abbreviation": "M"
},
"conference": {
"id": 6,
"name": "Eastern",
"link": "/api/v1/conferences/6"
},
"teamRecords": [
{
"team": {
"id": 12,
"name": "Carolina Hurricanes",
"link": "/api/v1/teams/12"
},
"leagueRecord": {
"wins": 54,
"losses": 20,
"ot": 8,
"type": "league"
},
"regulationWins": 47,
"goalsAgainst": 202,
"goalsScored": 278,
"points": 116,
"divisionRank": "1",
"divisionL10Rank": "1",
"divisionRoadRank": "2",
"divisionHomeRank": "1",
"conferenceRank": "2",
"conferenceL10Rank": "1",
"conferenceRoadRank": "2",
"conferenceHomeRank": "3",
"leagueRank": "3",
"leagueL10Rank": "2",
"leagueRoadRank": "3",
"leagueHomeRank": "5",
"wildCardRank": "0",
"row": 53,
"gamesPlayed": 82,
"streak": {
"streakType": "wins",
"streakNumber": 6,
"streakCode": "W6"
},
"clinchIndicator": "y",
"pointsPercentage": 0.7073170731707317,
"ppDivisionRank": "1",
"ppConferenceRank": "2",
"ppLeagueRank": "3",
"lastUpdated": "2022-06-27T14:40:39Z"
},

Tech Used in Project
-------------------------
HTML - CSS BOOTSTRAP - Javascript 
Express - EJS - Sequelize
Postgres - NHL API
Thunder Client


ERD
-------------------------
![](https://github.com/kubeshauseli17/project2-Hockey-forum/blob/main/tables.png)



Restful Routing
-------------------------
![](https://github.com/kubeshauseli17/project2-Hockey-forum/blob/main/restful.png)

Wireframe Views
-------------------------
![](https://github.com/kubeshauseli17/project2-Hockey-forum/blob/main/new.png)







User Stories
-------------------------
As a user I want to login and post my thoughts about the game I'm watching.

As a developer I want to be able to verify the users identity and log their content sitewide.

As the thread poster I'd like to moderate the posts on my thread. Deleting posts or updating my own 
to my needs.

As a User I'd like to post a GIF and comments on my teams game thread.


MVP Goals
-------------------------
Setup a sequelize database for my forum. Have Users, Threads, and Comments tables in it. Link my database up to my webpage.

Log new users information and add it to the users table.

Track signed in users. Allow them to post new threads and comment on other's threads. Update database with their content.

Setup NHL API Pull standings from it. Use EJS to pipe the scores into a sidebar. Standings onto a Standings page

Setup a search bar for users to search the database for content.


Stretch Goals
-------------------------
Style page nicely

Add Player Stats page. Pipe information in from NHL API

Redirect Visitors to the Signup page if they try to post a thread or a comment.

Figure out how to add user_avatar to users table in bytea


Roadblocks
-------------------------
Getting everything linked up properly will probably be a pain along with user authentication possibly

Reflections
-------------------------
This project really was a great way to solidify all of the concepts taught in this chapter. Getting everything linked up and
working properly was really a pain. My users table ended up getting corrupted at one point and having to trouble shoot what 
was wrong with my previously functional page was a real enlightening expeience. That being said I'm fairly happy with the 
results of this project, basic though it may be.

Sources
-------------------------
This source was invaluble in my ability to understand and get the NHL API working. It's an undocumented but free API so thankfully
there is a small community of people who've dug into it and documented how it works.