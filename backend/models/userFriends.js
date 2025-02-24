import mongoose from 'mongoose';

const userFriendsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});


const UserFriends = mongoose.model('UserFriends', userFriendsSchema);
export default UserFriends;