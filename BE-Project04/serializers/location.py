from app import ma
from models.location import LocationModel

class LocationSchema(ma.SQLAlchemyAutoSchema):
  class Meta:
    model = LocationModel
    load_instance = True