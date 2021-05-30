## Description

Simple Recipe Api Challenge Project

## Installation

```bash
$ npm install
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

## Elastic Beanstalk installation

### Getting the zip file ready

* [ ]  Clone the project on your Local Machine 

```
git clone https://github.com/3rg1s/recipes-api/
```

We need to include some files on our directory in order to make beanstalk work. 

* First create a new folder with name `.ebextensions` and inside add a file with name `.config` and content: 
```
option_settings:
  - namespace: aws:elasticbeanstalk:application:environment 
    option_name: NPM_USE_PRODUCTION
    value: "false"
```

* Now create another file on the root foler of the Api with name `.npmrc` and content: 
```
unsafe-perm=true
```

The folder structure should look like this: 
```
.
├── .ebextensions
│   └── .config
├── .eslintrc.js
├── .gitignore
├── nest-cli.json
├── .npmrc
├── package.json
├── package-lock.json
├── .prettierrc
├── README.md
├── src
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── auth
│   │   ├── auth.module.ts
│   │   ├── services
│   │   │   └── auth
│   │   │       └── auth.service.ts
│   │   └── strategies
│   │       ├── guards
│   │       │   └── jwt-auth.guard.ts
│   │       └── jwt.strategy.ts
│   ├── main.ts
│   ├── recipes
│   │   ├── controller
│   │   │   └── recipes.controller.ts
│   │   ├── dtos
│   │   │   └── recipe.dto.ts
│   │   ├── models
│   │   │   └── recipe.entity.ts
│   │   ├── recipes.module.ts
│   │   └── service
│   │       └── recipes.service.ts
│   └── users
│       ├── controller
│       │   └── users.controller.ts
│       ├── dtos
│       │   ├── userlogin.dto.ts
│       │   └── usersignup.dto.ts
│       ├── models
│       │   └── user.entity.ts
│       ├── service
│       │   └── users.service.ts
│       └── users.module.ts
├── tsconfig.build.json
└── tsconfig.json

17 directories, 30 files

```

* Now let's zip everything: 
```
zip -r recipe-api.zip .
```

### Adding zip to environment

* [ ]  Open Elastic Beanstalk and select *Create a new environment*

> Web server environment
>> Application Name: `Recipe Api` 
>>> Platform: Node.js
>>>> Application code -> Upload your code: Choose File (We enter the file we generated previously **recipe-api.zip**)


* Click Configure more options

### Creating postgres database
> Scroll down and find database tab. Click Edit.
>> Engine : postgres.
>>> Also add username and password. and click Save

### Adding environment variables

On Software tab click Edit and at the bottom add these environment variables.

*JWT_SECRET value can be anything you would like, but make sure it's something randomly generated and NEVER EXPOSE IT*

| Name  | Value |
| ------------- |:-------------:|
| NPM_USE_PRODUCTION      | false    |
| JWT_SECRET      | somethingrandom#%^rwyufcew     |
| PORT      | 8080     |

Click Save and then at the bottom Create environment. The environment will build after some minutes.
