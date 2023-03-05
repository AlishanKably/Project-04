from app import db
from models.base import BaseModel
from models.comment import CommentModel
from models.user import UserModel
from models.trail_location import TrailLocationModel

class TrailModel(db.Model, BaseModel):
  __tablename__ = "trails"

  name = db.Column(db.Text, nullable=False, unique=True)
  duration = db.Column(db.Text, nullable=False)
  length = db.Column(db.Text, nullable=False)
  difficulty = db.Column(db.Text, nullable=False)
  image = db.Column(db.Text, nullable=True)
  description = db.Column(db.Text, nullable=False)
  map = db.Column(db.Text, nullable=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  
  comments = db.relationship('CommentModel', backref='comments', cascade='all, delete')
  locations = db.relationship("TrailLocationModel", back_populates="trail")
  user = db.relationship("UserModel", back_populates="trail")

