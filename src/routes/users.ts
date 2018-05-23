import { guid } from './../types/guid';
import { User } from './../models/user';
import { UsersRepository } from "../services/usersRepository";
import * as express from 'express';
import { ObjectID } from 'bson';
import { env } from 'process';
const uuidv1 = require('uuid/v1'); 
const usersRouter = express.Router();

//////////////////

const usersRepo = new UsersRepository(env.MONGO_URI);

usersRouter.get('/', async (req, res) => {
    const users: User[] = await usersRepo.getAll();

    res.send(users);
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

usersRouter.delete('/:id', async (req, res) => {
    const id: guid = req.params.id;

    try {
        await usersRepo.deleteByID(id);
        res.status(200).send(`record with id == ${id} has been removed from db.`);
    } catch (error) {
        console.log("usersRouter.delete(): ", error);
    }
})

export default usersRouter;