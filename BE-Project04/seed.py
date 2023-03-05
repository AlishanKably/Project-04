from app import app, db
from models.trail import TrailModel
from models.comment import CommentModel
from models.location import LocationModel
from models.trail_location import TrailLocationModel
from models.user import UserModel

with app.app_context():

    try:
        print('Creating our database...')
        db.drop_all()
        db.create_all()

        print('Seeding the database!')
        user = UserModel(
            email='alishan@alishan.com', 
            username="alishan",
            password="576HYfsj&"
        )
        user.save()

        cleveland = TrailModel(name="Cleveland Way", duration="9 days", length="175km", difficulty="Hard",image="https://d1hirb55zrpywb.cloudfront.net/media/images/31335/thumbnail-image-block/coastal-path-near-robin-hood-s-bay-1-thumbnail-image-block.jpg", description="Starting from the attractive market town of Helmsley, the Cleveland Way heads across the inspirational, and breathtaking heather moorland of the North York Moors National Park, before reaching the coast at Saltburn-by-the-Sea.", map="https://shoreline-cottages.com/wp-content/uploads/2019/11/cleveland_overview.jpg", user_id=user.id)
        cleveland.save()

        north = LocationModel(region="North", city="York", climate="Wet", trail_type="Hills")
        north.save()

        cleveland_north = TrailLocationModel(trail_id=cleveland.id, location_id=north.id)
        cleveland_north.save()

        comment = CommentModel(content="Great hike.", trail_id=cleveland.id)
        comment.save()

        print("Database seeded!")
    except Exception as e:
        print(e)