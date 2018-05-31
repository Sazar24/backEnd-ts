import { ObjectID } from "mongodb";
import { guid } from "../types/guid";
// import uuidv1 from 'uuid/v1';
const uuidv1 = require('uuid/v1');

export class User {
    public id?: guid;
    public name: string = '';
    public surname: string = '';
    public town: string = '';
    public email: string = '';
    public date: Date = new Date(); // TODO.
    // public date: string = '';

    public mock(distinction: string) {
        this.id = uuidv1();
        this.name = "foo" + distinction;
        this.surname = "bar" + distinction;
        this.email = "hakuna@matata.pl" + distinction;
        this.town = "Foobaria" + distinction;
        this.date = new Date(2000 - 1 - 1);
    }
}
