import { guid } from './../../types/guid';
import * as dotenv from 'dotenv';
dotenv.config(); // Loads variables from '.env' file to process.env
import { UsersRepository } from "../../services/usersRepository";
import { env } from 'process';
import { User } from '../../models/user';
const uuidv1 = require('uuid/v1');

test('should be able to find inserted object in mongoDB and return null when query parameter(here: id) is invalid', async () => {
    expect.assertions(3);

    const usersRepoMock: UsersRepository = new UsersRepository(env.MONGO_TEST_URI);

    const userMock1: User = new User();
    userMock1.mock("foo");

    const userMock2: User = new User();
    userMock2.mock("bar");

    await usersRepoMock.add(userMock1);
    await usersRepoMock.add(userMock2);

    const id: any = userMock1.id; // type "any" is ugly, but used only because its mock, and im sure ID is defined.
    const foundUser: User = await usersRepoMock.findById(id);
    expect(userMock1).toEqual(foundUser);

        //kind of a stuppid test, but it would be terrible, if it would fail...:
        const itsOwnId: any = userMock2.id
        const userFindingItself = await usersRepoMock.findById(itsOwnId);
        expect(userMock2).toEqual(userFindingItself);
        // ...end of that abomination part x)

    const foundUser2: User = await usersRepoMock.findById("foobar_shouldReturnNull");

    expect(foundUser2).toBeNull();
});


test("mongoDB: for given id items cannot be found within database, after they are deleted", async () => {
    expect.assertions(3);

    const usersRepoMock: UsersRepository = new UsersRepository(env.MONGO_TEST_URI);

    const newID: string = uuidv1();
    const hopefullyNullUserRecord: User | null = await usersRepoMock.findById(newID);
    expect(hopefullyNullUserRecord).toBeNull();

    // seed:
    const userMock1: User = new User();
    userMock1.mock("foo1");
    userMock1.id = newID;

    const userMock2: User = new User();
    userMock2.mock("bar1");

    await usersRepoMock.add(userMock1);
    await usersRepoMock.add(userMock2);

    const objectFoundById = await usersRepoMock.findById(newID);
    expect(objectFoundById).toEqual(userMock1);

    // deleting:
    await usersRepoMock.deleteByID(newID);
    const deletedUser: User | null = await usersRepoMock.findById(newID);
    expect(deletedUser).toBeNull();
});