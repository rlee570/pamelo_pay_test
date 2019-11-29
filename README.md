# Pamelo pay test

Test for pamelo pay involving creating a small api. You will need node.js install
to install and run the project or alternatively use the dockerfiles which require
no additional dependancies apart from having docker installed.

# Run without docker

First install all necessary modules with the command

`npm i`

To run the tests

`npm test`

To start the server

`npm start`

# Run with docker

The tests and the server can be run with docker as I have dockerised
the server.

To run the docker server:
In the main directory of the project type. This will build the docker
image.
`docker build -t pamelo-app .`
Then to run the server simply type
`docker run -it -p 3000:3000 pamelo-app`
To run as a background service
`docker run -d -it -p 3000:3000 pamelo-app`

To run the tests in docker:
Change directory to the tests folder. Then build the docker image with
the following command.
`docker build -t pamelo-app .`
Then to run the tests
`sudo docker run -it -p 3000:3000 pamelo-app`
