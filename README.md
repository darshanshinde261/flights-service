# flights-service
`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make seperate tests folder)

Lets take a look inside the `src` folder

- `config` -> to this folder anything and everthing regarding any congigurations or a setup of a library or module will be done. for example setting up `dotenv` is that we can use the environment variables anywhere in a cleaner fashion, this is done on the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done.

- `routes` -> In the routes folder, we register a route and corresponding middlewares and controllers to it.

- `middlewares` -> They are just going t interupt the incoming requests where we can write our validations, authenticators etc.

- `controllers` -> They are kind of the last middlewares as post them you call you business layer to execute the business logic. In controllers we just receive the Incoming requests and data and then pass it to the business layer, and once business layer returns an output, we output, we structure the API response in controllers and send the output.

- `repositories` -> this folder contains all the logic using which we interact the DB by writting queries.

- `services` -> contains the business logic and interacts with repositories for data from the database.

- `utils` -> contains the helper methos, current classes.

### setup the project

- Download this templete from github and open it in your favourite text editor.
- Go inside the folder path and execute the following command:
```
    npm install
```

- In the root directory create a `.env` file and add the following env variables
```
    PORT=<port number of your choice>
```
ex:
```
    PORT=3000
```

- Inside the `src/config` folder create a named as `config.json` and write the 
following code:
```
{
  "development": {
    "username": "root",
    "password": "mypassword",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

``` 
- If you're setting up your environment, then wirte the username of your Db, password of your DB, and in dilect mention whatever db your you are using for ex: mysql,mariodb etc
- Go Inside the src and execute the follwing command:
```
    npx sequelize init
```
- By executing the above command you will get migration and seeders folder along with config.json
- If you're setting up text or
production environment, make sure you also replace the host with hosted db url

- To run the server execute
```
    npm run dev
```
