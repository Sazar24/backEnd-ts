# About
This is a backend part for **interview-project**. Made on IV/V 2018.

*(The frontend part (and task-content) is avaible at: https://github.com/Sazar24/data-collector-FrontEndPart )*

The endpoints are determined in ./src/routes/users.ts.  
Api allows to perform 3 actions:   
+ download all records (users, to be exact) stored in database,
+ post new record/User to database
+ delete one record/User, by its id.

Details of storable dataType/record in ./src/models/users.ts

Starting file is ./src/startup.ts  

**MongoDB** is used as database.  

Project written with typeScript  
*...on someone else's boileplate (with "beerware" license - so, I guess, I dont need to put a link to it here, but probably I own him a entire keg...).*

#  
#
Below are the residudes after oryginal boiler-plate Readme file:
# node.ts

This a very basic startup project with `Node.js`+`ES7` and `Typescript` prepared for Linux environment.

Extra features:
- Local environment variables (in `.env`)
- Some convenient commands (look at `package.json` `scripts` section)
- `async/await` included, `axios` on board

## Before start

Use `npm i` to install local packages. Use `npm run preinstall` to install global packages.

Add `.env`. You can based on `.env.example`.

## Where to start?

Use `npm run serve` to build and run your code continuously.