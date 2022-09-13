Project Idea
-------------------------
My idea for my second project is to make a simple Hockey forum that allows people to register as users,
and post threads or comments about their favorite teams once members. Growing up in Buffalo, NY hockey 
was my first love in life. I've been a die hard Buffalo Sabres fan since before Kindergarden. Also I've 
been a member of a hockey forum https://forums.hfboards.com/ for close to 20 years at this point. So it
 seemed like a good choice for a theme for a blog, especially with the season right around the corner.


API
-------------------------
The API i am planning on using is called StatsAPI NHL. https://statsapi.web.nhl.com/api/v1/schedule It has
player stats and team standings going back years. It also has scores for all of the current games and 
already played games. Seing as the season hasn't started yet I'm planning on using it for the last few years
standings and maybe the scores for any preseason games scheduled to be played. Fairly limited scope for my 
application, but interesting to see how analytics departments track data betwen leagues in real time.

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
Postgres - StatsAPI NHL
Thunder Client


ERD
-------------------------
![](https://github.com/kubeshauseli17/project2-Hockey-forum/blob/main/tables.png)



Restful Routing
-------------------------
VERB   |   URL pattern     |   Action (CRUD)  |    Description
------------------------------------------------------------------------
GET    | /threads          | Index (Read)     | List all threads
GET    | /threads/new      | New (Read)       | Shows form to create new thread
POST   | /threads          | Create(Create)   | Creates new thread for user
GET    | /threads/:id      | Show (Read)      | Read specific thread
GET    | /threads/edit/:id | Edit (Read)      | Shows form for editing post
PUT    | /threads/:id      | Update (Update)  | Updates User's post
DELETE | /threads/:id      | Destroy (Delete) | Delete's User's post


Wireframe Views
-------------------------
![](https://github.com/kubeshauseli17/project2-Hockey-forum/blob/main/new.png)







User Stories
-------------------------
As a user I want to login and post my thoughts about the game I'm watching.

As a developer I want to be able to verify the users identity and log their content sitewide.

As a visitor I'd like to browse the forum. If I appreciate the content I'd like to become a member.

As the thread poster I'd like to moderate the posts on my thread. Deleting posts or updating my own 
to my needs.

As a User I'd like to post a GIF and comments on my teams game thread.


MVP Goals
-------------------------
Setup a sequelize database for my forum. Have Users, Threads, and Comments tables in it. Link my database up to my webpage.

Log new users information and add it to the users table.

Track signed in users. Allow them to post new threads and comment on other's threads. Update database with their content.

Setup StatsAPI NHL Pull standings and Scores from it. Use EJS to pipe the scores into a sidebar. Standings onto a Standings page

Redirect Visitors to the Signup page if they try to post a thread or a comment.

Setup a search bar for users to search the database for content.


Stretch Goals
-------------------------
Style page nicely

Add Player Stats page. Pipe information in from API-HOCKEY


Roadblocks
-------------------------
Getting everything linked up properly will probably be a pain along with user authentication possibly
