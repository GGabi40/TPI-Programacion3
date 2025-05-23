import { User } from "./User.js";
import { Book } from "./Book.js";
import { Activity } from "./Activity.js";
import { Club } from "./Club.js";
import { Review } from "./Review.js";
import { ReviewRating } from "./ReviewRating.js";
/* Agg comentario de review */

// 1:N
User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });

Book.hasMany(Activity, { foreignKey: 'bookId' });
Activity.belongsTo(Book, { foreignKey: 'bookId', targetKey: 'id' })

Club.hasMany(Activity, { foreignKey: 'activityId' });
Activity.belongsTo(Club, { foreignKey: 'activityId', targetKey: 'id' });

// ReviewRating.belongsTo(User, { foreignKey: 'userId' });
// ReviewRating.belongsTo(Review, { foreignKey: 'reviewId' });

User.hasMany(ReviewRating, { foreignKey: 'userId' });
Review.hasMany(ReviewRating, { foreignKey: 'reviewId' });

// N:M
User.belongsToMany(Club, { through: 'UserClubs', foreignKey: 'userId' });
Club.belongsToMany(User, { through: 'UserClubs', foreignKey: 'clubId' });


export default { User, Book, Activity, Club, Review, ReviewRating };