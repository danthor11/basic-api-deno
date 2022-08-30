# Basic API with Deno

To use this project you first have to create a database with MySql, with the next command:
```
CREATE DATABASE dbusers;

USE dbusers;

CREATE TABLE user (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
```


Then you have to create a .env file in the root folder.

Example:

`
DB_HOSTNAME="Hosname"`
`DB_USERNAME="username"
DB_NAME="nameOftheDataBase"
DB_PASSWORD="password" `

And you have to run this command:

`deno run --allow-net --allow-read ./index.ts`