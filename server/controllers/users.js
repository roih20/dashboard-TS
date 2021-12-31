import mongoose from 'mongoose';
import express from 'express';
import Users from '../models/usersModel.js';

const router = express.Router();

export const getUsers = async (req, res) => {
try {

    const users  = await Users.find();
    res.status(200).json(users);

} catch (error) {
    res.status(404).json({message: error});
}

}

export const createUser = async (req, res) => {
    const user = req.body;

    const newUser = new Users(user);

    try {
        await newUser.save();

        res.status(201).json(newUser);

    } catch (error) {
        res.status(409).json({message: error});
    }

}

export const updateUser = async (req, res) => {
    
    const  { id } = req.params;
    const userUpdated = req.body;

    try {

        if(!mongoose.isValidObjectId(id)) return res.status(404).json({message: `No user with id: ${id}`});

        await Users.findByIdAndUpdate(id, userUpdated, {new: true});

        res.status(201).json({user_updated: userUpdated, message: 'User updated correctly'})
        
    } catch (error) {
        res.status(400).json({message: error});
    }
}

export const findUserById = async (req, res) => {

    const { id } = req.params;
 try {
    if(!mongoose.isValidObjectId(id)) return res.status(404).send({error: `No user with id: ${id}`});

    const user =  await Users.findById(id);

    res.status(200).json(user)
 } catch (error) {
     res.status(404).json({error: error});    
 }

}


export const deleteUser = async (req, res) => {
    const  { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user whit id: ${id}`);

    await Users.findByIdAndRemove(id);

    res.json({message: 'User deleted '});

}

export const getUsersBySearch = async (req, res) => {
    const { searchQuery } = req.query;
    try {
        const name  = new RegExp(searchQuery, 'i')
        const users = await Users.find({ $or: [ {name }]})
        res.json({data: users});

    } catch (error) {
        res.status(404).json({message: 'Does not find anything', error: error});
    }
}


export default router;