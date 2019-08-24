---
id: gulp
title: Gulp
---

Gulp is used here to create a seamless flow of running consequent commands, some of them can be run in parallel,
 some sequentially, and gulp can do it perfectly.
 
To run the backend server you need to execute command: ```gulp nest-server```

To run the frontend server you need to execute command: ```gulp dev-server```

If you’ll have a look at e2e.js file, you’ll see that exactly which commands are running first before starting 
running e2e tests on Cypress.

```gulp nest-server``` under hood runs ```npm run start``` command and waiting till sever will be up 
and running by pinging the url http://localhost:3333/ping every 5 seconds. 

If after fifth attempt url is still not accessible, the process will be killed.
```gulp dev-server``` is running webpack client which build frontend source code to a bundle, running a dev server 
based on Express.js with configured proxy to the backend server 
and makes frontend page accessible on http://localhost:6517


