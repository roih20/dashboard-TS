import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Users = mongoose.model('Users', usersSchema);

export default Users;