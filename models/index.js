const Album = require('./album');
const User = require('./user');
const Genre = require('./genre');
const Comment = require('./comments');

//Album has one genre
Genre.hasMany(Album, {
    foreign_key: 'genre_id',
});
//Genre belongs to many albums
Album.belongsTo(Genre, {
    foreign_key: 'genre_id'
});
//Album has many comments
Album.hasMany(Comment, {
    foreign_key: 'album_id'
});
//Comment belongs to album
Comment.belongsTo(Album, {
    foreign_key: 'album_id'
});
//User has many comments
User.hasMany(Comment, {
    foreign_key: 'user_id'
});
//comment has one user
Comment.belongsTo(User, {
    foreign_key: "user_id"
});


module.exports = {
    User,
    Album,
    Comment,
    Genre,
  };

// Each Playlist album_id references => multiple Album Id’s
// Each Album genre_id references => a Genre Id
// Each Album tag_id references => multiple Tag Id’s
// Each Comment album_id references => A Album Id
