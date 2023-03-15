# Project-04
## The Hiking Club
### Overview

For my fourth and final project, I have created an app for people that share my passion for hiking and want to explore the outdoors. The app allows users to filter through different regions of the UK to see locations of hikes which they may want to experience. Furthermore, the user can create a password protected account on the app which allows them to upload hikes they discover and want to share with the community. This was a solo project which was complete over the span of 2 weeks and incorporates a frontend, backend, API and database.

### Deployment link

To view the app, click here : https://trails-project4.netlify.app

### Technical Requirements

* **Build a full-stack application** by making my own backend and my own frontend.
* **Use a Python Flask API** using a Flask REST Framework to serve my data from a Postgres database.
* **Consume my API with a separate front-end** built with React.
* **Be a complete product** which includes multiple relationships and CRUD functionality for models.
* **Be deployed online** so it's publicly accessible.


### Technologies

Technologies used to design this app included the following:

* TypeScript
* Python
* Postgres
* React
* Flask
* SqlAlchemy
* Insomnia
* Tableplus
* Git and GitHub
* Netlify
* Fly.io
* Bit.io


## Build

### Backend

Considerations had to be made on the type of relationship between each of the models. To plan this, an ERD (Entity Relationship Diagram) was mapped out to visualise the concepts.
The relationships are described in the models as follows:
SQLAlchemy must be told what the relationships are so that it can both make the tables in the database, and allow me to do serilization and nest items inside each other at a later stage
The relationship describes the model which refers to the classes of the individual trail model and location model. Secondly it contains a backpopulates method which describes the other side of the relationship and shows the connections between the models

A trail location model contains a snigle trail and single location as these are being connected. This creates a unique pairing and individual row in the SQL table.

Serialization/De-serialization
Required to convert my objects into a transferrable format that can be sent or communicated.
de-serialization to convert JSON to Python objects.

postgres was used as a means to store the apps required data as tables of rows and columns with relatioinships between the models. object relational mapping must be considered. To test this on our local server, Tableplus was used.

to allow locations/comments to be nested within the trails data.


### Frontend

Promises - Uses async functions to retrieve information from an API
useEffect to run a section of code everytime a specific part of state changes on the rendered screen
Functions
useState - to tell React to remember an action such as const [trail, setTrail]
Event handling - to run a section of code when commanded by the user - handleClick...
props - uses a parent child relationship and allows data to be used within a function

React router:
Routes - To ensure the page does not reload howver the components in the page are controlled by the routes.../trails, /location
Links - To redrect the user to another page without reloading the page <Link...>
Hooks - useParams lets me get variables from a route
Hooks - useNavigate gives me a navigate function. Used to redirect the page inside functions


### API
Flask
User/token - When we fetch from our API, we can provide a token to get user information. this token is also used on the frontend.


## Authentication/Authorization
secure route to which means user can login and coauthorise certain controllers. Post cannot be done unless loged in as a user.
Trail user relationship is then added.


oauth

## Challenges

## Wins

