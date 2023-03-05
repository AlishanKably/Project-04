from app import ma
from models.trail_location import TrailLocationModel
from marshmallow import fields

class TrailLocationSchema(ma.SQLAlchemyAutoSchema):
  location = fields.Nested("LocationSchema")

  class Meta:
    include_fk = True
    model = TrailLocationModel
    load_instance = True