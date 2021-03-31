# Application created with two folder client and server, to separate BE and FE.

# Client

Builded with angular cli tool, and exist in `client` folder.
To work with client application, don't forgot to open `client` folder in terminal
before commant running.
To install dependencies run `npm i` before start.

## Development angular app

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


# Server

Simple Node.js application, exist in `server` folder.
To work with server application, don't forgot to open `server` folder in terminal.

To use this project locally, 
run: `npm i` to install the packages
and to start the server run: `npm start`

## Start from docker

To run docker, make sure you have installed docker and docker-compose.
After this, install the packages with `npm i` command and 
run the docker with `docker-compose up -d`.
It would start server on `http://localhost:3000/`.
