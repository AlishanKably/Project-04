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

An MVC approach was used on this project where models were firstly created to describe the different components of the app. Along with this, controllers were created to describe the methods for retrieving information via SQL from the postgresql database with the use of serializers to allow python to communicate with the database. These serializers are described within the schemas for each of the models.

On this project, I used the Flask library which allowed me to incorporate flask-SQLAlchemy and marshmallow. Postgresql was used as a means to store the apps required data as tables of rows and columns within a relational SQL database, with relatioinships between the models. To test this on our local server, Tableplus was used. Object relational mapping (ORM) must be considered meaning I must convert between Python objects and database tables.

Considerations had to be made on the type of relationship between each of the models. To plan this, an ERD (Entity Relationship Diagram) was mapped out to visualise the concepts.


![](Images/image2.png)



The relationship describes the model which refers to the classes of the individual trail model and location model. Secondly it contains a backpopulates method which describes the other side of the relationship and shows the connections between the models. SQLAlchemy must be told what the relationships are so that it can both make the tables in the database and allow me to do serilization and to allow one models data to be nested within another. The relationships are described in the models as follows:

* Trail Model:
```
comments = db.relationship('CommentModel', backref='comments', cascade='all, delete')
  locations = db.relationship("TrailLocationModel", back_populates="trail")
  user = db.relationship("UserModel", back_populates="trail")
```

* Location Model:
```
trails = db.relationship('TrailLocationModel', back_populates="location")
```

* Trail_Location Model:
```
trail = db.relationship("TrailModel", back_populates="locations")
  location = db.relationship("LocationModel", back_populates="trails")

```


A trail location model contains a single trail and single location as these are being connected. This creates a unique pairing and individual row in the SQL table. Similarly, connections are made between the user model and the trails model to allow us to keep track of which user posted which trail and permissions can be implemented on the trail. This also allows us to search by user on frontend if required. This demonstrates a one to many relationship as many trails can be owned by a single user.

```
trail = db.relationship("TrailModel", back_populates="user")
```


Serialization and de-serialization was a technique used within the backend. Serialiszation was required to convert objects into a transferrable format that can be sent or communicated whilst de-serialization to convert JSON to Python objects. This was shown with the use of schemas such as:

```
class TrailSchema(ma.SQLAlchemyAutoSchema):

  comments = fields.Nested('CommentSchema', many=True)
  locations = fields.Nested("TrailLocationSchema", many=True)

  class Meta:
    model = TrailModel
    load_instance = Trueinclude_fk = True
    include_fk = True
```

Lastly, Flask-marshmallow

### Frontend



The frontend was made up of several different components including:
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



## Authentication/Authorization

Authentication and authorization played a major role in this project. It was important to incorporate this to allow users to make account and securely log in. A ```secure route``` file was made to include the token for a user. JSON web token (JWT) was used as the protocol for authentication which involved a secure token creation when signing up and is implemented when loging in or when a user chooses to upload a trail. An element of this is the password hash function in the user model:

```
 @hybrid_property
    def password(self):
        pass

    @password.setter
    def password(self, password_plaintext):
        encoded_pw = bcrypt.generate_password_hash(password_plaintext)
        self.password_hash = encoded_pw.decode("utf-8")
```

Similarly to this, the validate password function is run to log in:

```
   def validate_password(self, password_plaintext):
       return bcrypt.check_password_hash(self.password_hash, password_plaintext)
```

This is also used in the serializer/deserializer process in the user controller:

```
user = user_schema.load(user_dictionary)
```
```
return user_schema.jsonify(user)
```


## Challenges

## Wins

