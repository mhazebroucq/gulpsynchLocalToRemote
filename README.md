v1.1  - MAX / Jeff ANGAMA

# Objective : 
Push file to style library using gulp task. It allow to program to sharepoint and enjoy doing it from visual studio code productively, with a versioning such as git :)
You can clone this repo or integrate the synch tools by getting the installation files in InstallationFiles folder. It is explains below how to install it.

# Installation (if you want to install it in your existing project)

If you clone the repo, do not follow the below procedure :

* Step 0
Install node.js :)
https://nodejs.org/dist/v6.11.4/node-v6.11.4-x64.msi

* Step 1
```
npm init
```
* Open package.json, after description, add "," then paste
```
"dependencies": {
    "gulp": "^3.9.1",
    "gulp-clean": "^0.3.2",
    "gulp-plumber": "^1.1.0",
    "gulp-spsync-creds": "^2.2.6"
},
```

* Install dependencies
```
npm install --save
```
* Copy the installation files from InstallationFiles folder to your solution, for info the package contains

```   
src
    style library
        libTest
            example.js
config.json
gulpfile.js 
settings.js
```

* Configure config.json
        * Inform your site url, credentials (without domain)
        * specify location : style library/libtest (subfolder)
        * publish the file or not ?

# Usage

* A) Push to files to style library immediately. It will create the folder by it self
```
gulp 
```

or 

* B) Watch changes and push to style library
```
gulp watch
```

* C) if you specified published : false in config.json, it wont get publish until you run
```
gulp publish
```
    
    F5 in browser
