from app import db
from models.base import BaseModel


class CommentModel(db.Model, BaseModel):

    __tablename__ = "comments"

    content = db.Column(db.Text, nullable=False)
    trail_id = db.Column(db.Integer, db.ForeignKey('trails.id'), nullable=False)