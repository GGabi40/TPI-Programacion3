import { User } from "./User.js";
import { Book } from "./Book.js";
import { Activity } from "./Activity.js";
import { Club } from "./Club.js";
import { Review } from "./Review.js";
/* Agg comentario y valoracion de review */

// 1:N
User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });

Book.hasMany(Activity, { foreignKey: 'bookId' });
Activity.belongsTo(Book, { foreignKey: 'bookId', targetKey: 'id' })

Club.hasMany(Activity, { foreignKey: 'activityId' });
Activity.belongsTo(Club, { foreignKey: 'activityId', targetKey: 'id' });

// N:M
User.belongsToMany(Club, { through: 'UserClubs', foreignKey: 'userId' });
Club.belongsToMany(User, { through: 'UserClubs', foreignKey: 'clubId' });


export default { User, Book, Activity, Club, Review };