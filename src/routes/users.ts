import { guid } from './../types/guid';
import { User } from './../models/user';
import { UsersRepository } from "../services/usersRepository";
import * as express from 'express';
import { ObjectID } from 'bson';
const uuidv1 = require('uuid/v1');
const usersRouter = express.Router();

//////////////////

const usersRepo = new UsersRepository(env.MONGO_URI);

usersRouter.get('/', async (req, res) => {
    try {
        const users = await usersRepo.getAll();
        res.send(users);

    } catch (error) {
        throw error;
    }
})

usersRouter.post('/', async (req, res) => {
    const receivedUser: User = new User();
    const newID = uuidv1();
    
    receivedUser.id = newID;
    receivedUser.name = req.body.name;
    receivedUser.surname = req.body.surname;
    receivedUser.town = req.body.town;
    receivedUser.email = req.body.email;
    receivedUser.date = req.body.date;

    await usersRepo.add(receivedUser);

    res.status(200).send(newID);
})
export default usersRouter;