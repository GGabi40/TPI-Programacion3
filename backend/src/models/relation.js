import { User } from "./User.js";
import { Book } from "./Book.js";
import { Activity } from "./Activity.js";
import { Club } from "./Club.js";
import { Review } from "./Review.js";
import { ReviewRating } from "./ReviewRating.js";

// 1:N
User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });

Activity.hasMany(Review, { foreignKey: 'activityId' });
Review.belongsTo(Activity, { foreignKey: 'activityId' });

Book.hasMany(Activity, { foreignKey: 'bookId' });
Activity.belongsTo(Book, { foreignKey: 'bookId', targetKey: 'id' })

Club.hasMany(Activity, { foreignKey: 'clubId' });
Activity.belongsTo(Club, { foreignKey: 'clubId', targetKey: 'id' });

ReviewRating.belongsTo(User, { foreignKey: 'userId' });
ReviewRating.belongsTo(Review, { foreignKey: 'reviewId' });

User.hasMany(ReviewRating, { foreignKey: 'userId' });
Review.hasMany(ReviewRating, { foreignKey: 'reviewId' });

// N:M
User.belongsToMany(Club, { through: 'UserClubs', as: 'misClubes', foreignKey: 'userId' });
Club.belongsToMany(User, { through: 'UserClubs', as: 'usuarios', foreignKey: 'clubId' });


export default { User, Book, Activity, Club, Review, ReviewRating };