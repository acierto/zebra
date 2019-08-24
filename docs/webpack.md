---
id: webpack
title: Webpack
---

To create a bundle for frontend we use Webpack. 
Configuration is located in ```gulp/tasks/webpack.js```. 
There are 2 configuration, one for development and another for development environment. 
The biggest difference is that for production the code is minimised and webpack dev server client is not running. 
It’s used only in development to be able to get hot-reloading feature.
