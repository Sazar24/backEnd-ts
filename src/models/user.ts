import { ObjectID } from "mongodb";
import { guid } from "../types/guid";


export class User {
    public id?: guid;
    public name: string = '';
    public surname: string = '';
    public town: string = '';
    public email: string = '';
    public date: Date = new Date(); // TODO?.
}
