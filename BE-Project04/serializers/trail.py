from app import ma
from models.trail import TrailModel
from marshmallow import fields

class TrailSchema(ma.SQLAlchemyAutoSchema):

  comments = fields.Nested('CommentSchema', many=True)
  locations = fields.Nested("TrailLocationSchema", many=True)

  class Meta:
    model = TrailModel
    load_instance = Trueinclude_fk = True
    include_fk = True