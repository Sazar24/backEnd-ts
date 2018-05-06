import { MongoClient, Db, Collection,   } from 'mongodb';
import { User } from './../models/user';
import { id } from '../types/id';

export class UsersRepository {
    constructor(private databaseUrl: string) { }
    private COLLECTION = 'users';

    private async UsersCollection(): Promise<Collection> {
        const mongoClient: MongoClient = await MongoClient.connect(this.databaseUrl);
        const db: Db = mongoClient.db();
        return await db.collection(this.COLLECTION);
    }

    public async add(user: User): Promise<void> {
        const usersCollection = await this.UsersCollection();
        await usersCollection.insertOne(user);
        return;
    }

    public async getAll(): Promise<User[]> {
        const usersCollection = await this.UsersCollection();
        return await usersCollection.find().toArray();
    }

    public async deleteByID(id: string): Promise<void> {
        const usersCollection = await this.UsersCollection();
        await usersCollection.deleteOne({"id": id });
        return;
    }

    public async findById(id: string): Promise<User> {
        const usersCollection = await this.UsersCollection();
        const user: User = await usersCollection.findOne({ "id": id });
        return user;
    }

}