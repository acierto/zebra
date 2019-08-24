---
id: circle-ci
title: Circle CI
---

To check project on each commit I decided to use this tool, as for me it does the thing. There are many other tools, 
I didn’t make any evaluation and comparison just picked the first one and with relatively short period of time 
configured CI for that environment.

What you need to do for that:
* create .circleci folder in the root of the project
* create config.yml file in .circleci folder

In config.yml we use Docker base images on which we can install extra stuff. In CircleCI you can specify several Docker
images and it will behave in the same way as Docker compose. That’s really handy. Here is chosen Node Docker image,
so it’s possible to work with npm as we have frontend and also mysql with preinstalled databases.

```dockerfile
    jobs:
      build:
        docker:
          - image: circleci/node:12
          - image: circleci/mysql:5.7
            environment:
              MYSQL_ROOT_PASSWORD: zebra
              MYSQL_DATABASE: zebra
              MYSQL_USER: zebra
              MYSQL_PASSWORD: zebra
```

When docker image is downloaded, you can configure your own custom steps and in the last section in workflows 
the job names which you’d like to run.
