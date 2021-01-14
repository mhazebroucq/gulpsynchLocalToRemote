v1.2  - Maxime  
Fork from https://github.com/jeffangama/gulpsynchLocalToRemote  
   
# Objective : 
Work on SharePoint 2013 files in VSCode.  
Using gulp task you can download, upload and watch files.  

You can clone this repo or integrate the synch tools by getting the installation files in InstallationFiles folder. It is explains below how to install it.

# Installation (if you want to install it in your existing project)

If you clone the repo, do not follow the below procedure :

## Step 0
Install node.js :)

## Step 1

npm init

## Step 2
Open package.json, after description, add "," then paste
```javascript
"dependencies": {
    "gulp": "^3.9.1",
    "gulp-clean": "^0.3.2",
    "gulp-plumber": "^1.1.0",
    "gulp-process-only-modified-files": "^1.0.0",
    "node-file-cache": "^1.0.2",
    "gulp-spsync-creds": "^2.3.8",
    "sp2013sync": "^1.0.5"
  },
```

## Step 4
Install dependencies
```bash
npm install --save
```

## Step 5
Copy the files config.js, gulpfile.js and settings.js into your solution folder.

## Step 6
Create a creds.js file int the folder parent of your solution folder .
This file is outside of the solution folder to avoid to upload it to git.

```javascript
module.exports = {
    dev: {        
    "username": "user@domain.com",
    "password": "password"
    }
}.dev;
```

## Step 6
Configure config.json
```javascript
    "site": "http://test-site-url",
    "skipInstall": false,
    "verbose": "false",
    "config":"Dev",
    "remoteFoldersToGet":["SiteAssets","_catalogs/masterpage"], //folders for which you want to retrieve content in the populate task
    "location":"src" //location where files will be downloaded, uploaded and watched
```
This file allows you to configure many profiles and select the one you want to activate by exporting the wanted config name.

# Usage

* A) Push tthe files to SharePoint immediately. It will need a confirm and then it will create the folder by it self.

```bash
gulp 
```

or 

* B) Watch changes and push to SharePoint corresponding folder.
```bash
gulp watch
```

* C) if you specified published : false in config.json, it wont get publish until you run
```bash
gulp publish
```
    
* D) If you want to retrieve all items from the folders defined in "remoteFoldersToGet" :
```bash
gulp populate
```
