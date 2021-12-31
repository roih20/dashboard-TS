import UsersAdmin from "../models/userAdminModel.js";
import mongoose from 'mongoose';
import express from 'express';
import Joi from '@hapi/joi';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'


const schemaRegister = Joi.object({
    firstName: Joi.string().min(3).max(255).required(),
    lastName: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

export const registerUser = async (req, res) => {


    const { firstName , lastName, email, password } = req.body;

    const { error } = schemaRegister.validate(req.body)

    if(error) {
        return res.status(400).json({error: error.details[0].message})
    }

    try {
        
        const oldEmail = await UsersAdmin.findOne({email});

        if(oldEmail) return res.status(400).json({message: 'The email already exists'});

        const hashPassword = await bcrypt.hash(password, 12);

        const userDB = await UsersAdmin.create({email: email, password: hashPassword, name: `${firstName} ${lastName}`});

        res.status(201).json({
            data: userDB
        })


    } catch (error) {
        res.status(404).json(error)
    }
}

const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

export const loginUser = async (req, res) => {
    const {email, password} = req.body

    const {error} = schemaLogin.validate(req.body)

    if(error){
        return res.status(400).json({error: error.details[0].message})
    }

    try {
        const oldUser  = await UsersAdmin.findOne({email});

        if(!oldUser) return res.status(404).json({error: 'User does not exist'});

        const comparePassword = await bcrypt.compare(password, oldUser.password);

        if(!comparePassword) return res.status(400).json({error: 'Invalid credential'});

        const token = jwt.sign( {email: oldUser.email, id: oldUser._id}, 'secret')

        res.status(201).json({
            result: oldUser,
            token
        })

    } catch (error) {

        res.status(500).json(error);
    }
} 