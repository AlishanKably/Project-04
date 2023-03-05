
from http import HTTPStatus
from flask import Blueprint, request, g
from marshmallow.exceptions import ValidationError
from models.user import UserModel
from serializers.user import UserSchema
from middleware.secret_route import secure_route

user_schema = UserSchema()
router = Blueprint("users", __name__)

@router.route('/signup', methods=["POST"])
def signup():
    user_dictionary = request.json
    
    try:
        user = user_schema.load(user_dictionary)
        user.save()
    except ValidationError as e:
        return {"errors": e.messages, "messsages": "Something went wrong"}
    return user_schema.jsonify(user)

@router.route('/login', methods=["POST"])
def login():
    user_dictionary = request.json
    user = UserModel.query.filter_by(email=user_dictionary["email"]).first()
    if not user:
        return { "message": "Your email or password was incorrect." }, HTTPStatus.UNAUTHORIZED
    if not user.validate_password(user_dictionary["password"]):
        return { "message": "Your email or password was incorrect." }, HTTPStatus.UNAUTHORIZED
    token = user.generate_token()
    
    return { "token": token, "message": "Welcome back!" }


@router.route('/user', methods=["GET"])
@secure_route
def user():
  user_id = g.current_user.id
  user_data = UserModel.query.get(user_id)
  return user_schema.jsonify(user_data)