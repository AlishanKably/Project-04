from http import HTTPStatus
from flask import Blueprint, request, g
from marshmallow.exceptions import ValidationError

from models.trail_data import trails_db
from models.comment import CommentModel
from models.trail import TrailModel

from serializers.trail import TrailSchema
from serializers.comment import CommentSchema
from serializers.trail_location import TrailLocationSchema
from serializers.location import LocationSchema

from middleware.secret_route import secure_route

trail_schema = TrailSchema()
trail_location_schema = TrailLocationSchema()
comment_schema = CommentSchema()
location_schema = LocationSchema()
router = Blueprint("trails", __name__)

@router.route("/trails", methods=["GET"])
def get_trails():
  trails = TrailModel.query.all()
  return trail_schema.jsonify(trails, many=True)

@router.route("/trails/<int:trail_id>", methods=["GET"])
def get_single_trail(trail_id):
  trail = TrailModel.query.get(trail_id)
  return trail_schema.jsonify(trail)

@router.route("/trails", methods=["POST"])
@secure_route
def create():
  trail_dictionary = request.json
  trail_dictionary["user_id"] = g.current_user.id

  try:
    trail = trail_schema.load(trail_dictionary)
    trail.save()
  except ValidationError as e:
    return {"errors": e.messages, "message": "Something went wrong"}
  return trail_schema.jsonify(trail)

@router.route("/trails/<int:trail_id>", methods=["PUT", "PATCH"])
@secure_route
def update_trail(trail_id):
    trail_dictionary = request.json
    existing_trail = TrailModel.query.get(trail_id)
    if not existing_trail:
        return {"message": "Trail lost"}, HTTPStatus.NOT_FOUND
    try:
        if existing_trail.user_id != g.current_user.id:
            return { "message": "You are on the wrong path" }, HTTPStatus.UNAUTHORIZED
        trail = trail_schema.load(
            trail_dictionary,
            instance=existing_trail, 
            partial=True
        )
        trail.save()
    except ValidationError as e:
        return {"errors": e.messages, "message": "Something went wrong"}
    return trail_schema.jsonify(trail), HTTPStatus.OK

@router.route('/trails/<int:trail_id>', methods=["DELETE"])
@secure_route
def remove_trail(trail_id):
    trail = TrailModel.query.get(trail_id)
    if not trail: 
        return {"message": "No trail found"}, HTTPStatus.NOT_FOUND
    trail.remove()
    return '', HTTPStatus.NO_CONTENT

@router.route("/trails/<int:trail_id>/comments", methods=["POST"])
@secure_route
def create_comment(trail_id):

    comment_dictionary = request.json

    existing_trail = TrailModel.query.get(trail_id)
    if not existing_trail:
        return {"message": "No trail found"}, HTTPStatus.NOT_FOUND
    try:
        comment = comment_schema.load(comment_dictionary)
        comment.trail_id = trail_id
        comment.save()
    except ValidationError as e:
        return {"errors": e.messages, "message": "Something went wrong"}
    return comment_schema.jsonify(comment), HTTPStatus.CREATED

@router.route('/comments/<int:comment_id>', methods=["DELETE"])
@secure_route
def remove_comment(comment_id):
    comment = CommentModel.query.get(comment_id)
    if not comment:
        return {"message": "No comment found"}, HTTPStatus.NOT_FOUND
    comment.remove()
    return '', HTTPStatus.NO_CONTENT

@router.route('/locations', methods=["POST"])
@secure_route
def create_location():
    location_dictionary = request.json
    try:
        location = location_schema.load(location_dictionary)
    except ValidationError as e:
        return {"errors": e.messages, "message": "Something went wrong"}
    location.save()
    return location_schema.jsonify(location)

@router.route('/trail-locations', methods=["POST"])
@secure_route
def create_trail_location():
    trail_location_dictionary = request.json
    try:
        trail_location = trail_location_schema.load(trail_location_dictionary)
    except ValidationError as e:
        return {"errors": e.messages, "message": "Something went wrong"}
    trail_location.save()
    return trail_location_schema.jsonify(trail_location)