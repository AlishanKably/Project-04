from app import db
from models.base import BaseModel

class LocationModel(db.Model, BaseModel):

  __tablename__ = "locations"
  region = db.Column(db.Text, nullable=False)
  city = db.Column(db.Text, nullable=False)
  climate = db.Column(db.Text, nullable=False)
  trail_type = db.Column(db.Text, nullable=False)

  trails = db.relationship('TrailLocationModel', back_populates="location")