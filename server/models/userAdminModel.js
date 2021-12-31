import mongoose from 'mongoose';

const userAdminSchema = mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const UsersAdmin = mongoose.model('Admin-Users' , userAdminSchema);

export default UsersAdmin;


