# DEVOPS-NODEJS

An Rest API developed with docker, redis and node.js. Basically a simple CRUD with user authentication and a post management.

## Objective

The main reason to build that was related with my curiosity about containers, based on that, I decided to understand what's a container, how it works and why should I use it.

# Getting started

Before start with the installation, you need to have node.js and docker installed to run the project. 

    # Clone the project
    $ git clone https://github.com/matheustanaka/docker-node-express

    # Install dependencies 
    $ npm install 

    # To start the project, you need to create your own .env file, I commited a .env-example to help you, but you can change as you want.

    # Start the project
    $ npm run dev

    # Start docker container
    $ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d 

    # Check if the enviroment is running
    $ docker logs devops-node-docker_node-app_1 -f

# Technologies

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Redis](https://redis.io/)

# My notes about docker

- [Notes](https://cypress-coriander-bc0.notion.site/Docker-Containers-d2302261cd4c40a19ab6ada192fc5c87)