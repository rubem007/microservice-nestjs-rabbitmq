
## How to run project
1 - Make git clone `git clone https://github.com/rubem007/microservice-nestjs-rabbitmq.git`

2 - Inside the project directory, open cmd and run the command `docker-compose up -d`

### Test Endpoint
#### App A
curl -X POST http://localhost:3000 -H "Content-Type: application/json" -d '{"message": "hello from app A"}'

#### App B
curl -X POST http://localhost:3001 -H "Content-Type: application/json" -d '{"message": "hello from app B"}'

## Start Commands for docker-compose file
Builds, (re)creates, starts, and attaches to containers for a service.
`docker-compose up -d`

## Docker-compose
Basic docker-compose commands:
 - `docker-compose up`: Starts the services defined in the docker-compose.yml
 - `docker-compose up -d`: Starts the services in detached mode, which means they run in the background. Use this command when you want to start the services and keep the terminal free for other tasks.
 - `docker-compose down`: Stops and removes the containers, networks, and volumes created by docker-compose up.
 - `docker-compose ps`: Shows the status of the running containers defined in the docker-compose.yml file.
 - `docker-compose start`: This command starts all the containers defined in the docker-compose.yml file.
 - `docker-compose stop`: This command stops all the containers defined in the docker-compose.yml file.
 - `docker-compose restart`: This command restarts all the containers defined in the docker-compose.yml file.
 - `docker-compose pause`: This command pauses all the containers defined in the docker-compose.yml file.
 - `docker-compose unpause`: This command unpauses all the containers defined in the docker-compose.yml file.
 - `docker-compose logs`: Displays the logs for the services defined in the docker-compose.yml file.
 - `docker-compose build`: Builds the images for the services defined in the docker-compose.yml file. Use this command when you have made changes to the application code or dependencies and need to rebuild the images.
 - `docker-compose exec`: Runs a command inside a running container. Use this command to execute commands such as shell, bash, and python inside the container.

## Documentation
 https://www.rabbitmq.com/getstarted.html <br>
https://www.npmjs.com/package/@golevelup/nestjs-rabbitmq