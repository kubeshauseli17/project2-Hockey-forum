Project Idea
-------------------------
My idea for my second project is to make a simple Hockey forum that allows people to register as users,
and post threads or comments about their favorite teams once members. Growing up in Buffalo, NY hockey 
was my first love in life. I've been a die hard Buffalo Sabres fan since before Kindergarden. Also I've 
been a member of a hockey forum https://forums.hfboards.com/ for close to 20 years at this point. So it
 seemed like a good choice for a theme for a blog, especially with the season right around the corner.


API
-------------------------
The API i am planning on using is called API Hockey. https://rapidapi.com/api-sports/api/api-hockey It has
player stats and team standings going back years. It also has scores for all of the current games and 
already played games. Seing as the season hasn't started yet I'm planning on using it for the last few years
standings and maybe the scores for any preseason games scheduled to be played. Fairly limited scope for my 
application, but interesting to see how analytics departments track data betwen leagues in real time.

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "adc5f02acfmsha3cd71d94f1b43fp1bebf1jsncd36e7ddb757");
myHeaders.append("x-rapidapi-host", "v1.hockey.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v1.hockey.api-sports.io/{endpoint}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));




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

As a thread poster I'd like to moderate the posts on my thread. Deleting posts or updating my own 
to my needs.

As a User I'd like to post a GIF on my teams game thread.


MVP Goals
-------------------------
Setup a sequelize database for my forum. Have Users, Threads, and Comments tables in it. Link my database up to my webpage.

Log new users information and add it to the users table.

Track signed in users. Allow them to post new threads and comment on other's threads. Update database with their content.

Setup API-HOCKEY Pull standings and Scores from it. Use EJS to pipe the scores into a sidebar. Standings onto a Standings page

Redirect Visitors to the Signup page if they try to post a thread or a comment.

Setup a search bar for users to search the database for content.


Stretch Goals
-------------------------
Style page nicely

Add Player Stats page. Pipe information in from API-HOCKEY


Roadblocks
-------------------------
Getting everything linked up properly will probably be a pain along with user authentication possibly
