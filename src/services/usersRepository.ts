// const MongoClient = require('mongodb').MongoClient;
import { MongoClient, Db, Collection, InsertOneWriteOpResult, ObjectID } from 'mongodb';

const assert = require('assert');
// const ObjectID = require('mongodb').ObjectID;
// const dbName = 'myproject';
import { User } from './../models/user';
import { id } from '../types/id';

const url = 'mongodb://localhost:27017'; // TODO: to env
export class UsersRepository {
    constructor(private databaseUrl: string) { }
    private COLLECTION = 'users';

    private async UsersCollection(): Promise<Collection> {
        // const mongoClient: MongoClient = await MongoClient.connect(process.env.MONGO_URI);
        const mongoClient: MongoClient = await MongoClient.connect(this.databaseUrl);
        const db: Db = mongoClient.db();
        return await db.collection(this.COLLECTION);
    }

    public async add(user: User): Promise<void> {
        const usersCollection = await this.UsersCollection();
        // const operationResult: InsertOneWriteOpResult = await usersCollection.insertOne(user);
        // return operationResult.insertedId;
        await usersCollection.insertOne(user);
        return;
    }


    public async getAll(): Promise<User[]> {
        const usersCollection = await this.UsersCollection();
        return await usersCollection.find().toArray();
    }

    public async deleteByID(id: string): Promise<void> {
        const usersCollection = await this.UsersCollection();


        // try {
        //     MongoClient.connect(url, function (err, client) {
        //         assert.equal(null, err);

        //         const db = client.db(dbName);
        //         const col = db.collection('users');
        //         col.deleteOne({ _id: ObjectID(id) }, function (err, r) {
        //             assert.equal(null, err);
        //         });
        //     });
        //     console.log("attempt to remove record with id: " + id + " <-- success");
        //     return;
        // } catch (err) {
        //     console.log("DeletByID(id) failure. Error: ", err);
        //     // throw err;
        // }
    }


}



///////
/*
function Add(a: number, b: number): number
{
    return a+b;
}

function Add(a: string, b: string): string
{
    return a+b;
}

class Foo<T>
{
    public method(x: T)
    {
        ...
    }
}

function Add<T, B>(a: T, b: T): T
{
    dupa:T;
    foo: B;
    return a+b;
}

Add<number>(1, 2);
*/