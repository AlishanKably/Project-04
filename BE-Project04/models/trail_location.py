from app import db
from models.base import BaseModel
from models.location import LocationModel


class TrailLocationModel(db.Model, BaseModel):

  __tablename__ = "trails_locations"
  trail_id = db.Column(db.Integer, db.ForeignKey("trails.id"))
  location_id = db.Column(db.Integer, db.ForeignKey("locations.id"))

  trail = db.relationship("TrailModel", back_populates="locations")
  location = db.relationship("LocationModel", back_populates="trails")