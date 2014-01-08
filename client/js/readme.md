# The JS Directory

The `/client/js` directory is where your application's JavaScript lives. This directory is further broken down into four subdirectories: `helpers`, `modules`, `vendor` and `widgets`. Additionally, the `/client/js` directory contains three essential JavaScript files: `app.js`, `config.js` and `main.js`. The three files are discussed in the section [Understanding the Architecture](https://github.com/justinsisley/Mercenary/wiki/Understanding-the-Architecture), but can be summarized as `app.js` being the core of the Marionette application, `main.js` being the primary entry point of your application, and `config.js` being the requirejs configuration file.

Starting with the simplest-to-explain subdirectories, The `/client/js/helpers` directory contains your JavaScript helper files, and the `/client/js/widgets` directory contains your standalone JavaScript widgets. These are explained in detail in the section [Understanding the Architecture](https://github.com/justinsisley/Mercenary/wiki/Understanding-the-Architecture).

The `/client/js/modules` directory, covered in [Understanding the Architecture](https://github.com/justinsisley/Mercenary/wiki/Understanding-the-Architecture), is where your application's specific functionality lives. Each "module" is a directory that contains module-specific models, collections, controllers, routers and views. Applications typically consist of multiple modules performing their duties independently of each other, with cross-module communication happening via the event aggregator (also covered in [Understanding the Architecture](https://github.com/justinsisley/Mercenary/wiki/Understanding-the-Architecture)).