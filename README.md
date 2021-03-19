# Todo App with NestJS

Not another todo app?!  Yes, I purposely built a simple frontend app so I could focus on creating a NestJS/Express based backend using many best practices and techniques. 

It leverages the power of TypeScript to build a performant server with data validation, gaurded API endpoints, and security best practices including password salting/hashing. It also utilizes unit testing and Data Transfer Objects (DTOs), allowing the backend to be extremely reliable and refactorable. 

It was deployed on AWS S3/Elastic Beanstalk which you can checkout [here](http://achon-nest-task.s3-website.us-east-2.amazonaws.com).

## Screenshots

Home Page:
![](https://github.com/theandrewchon/Todo-Nest/blob/main/assets/home.jpg?raw=true)


## Testing the server locally
#### Go go the Config folder and change the development.yml file and add your local database information

### Example
```
db:
  host: 'localhost'
  username: 'postgres'
  password: 'postgres'
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

