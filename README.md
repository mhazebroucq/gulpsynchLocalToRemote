v1.2  - Maxime  
Fork from https://github.com/jeffangama/gulpsynchLocalToRemote  
   
# Objective : 
Push file to style library using gulp task. It allow to program to sharepoint and enjoy doing it from visual studio code productively, with a versioning such as git :)
You can clone this repo or integrate the synch tools by getting the installation files in InstallationFiles folder. It is explains below how to install it.

# Installation (if you want to install it in your existing project)

If you clone the repo, do not follow the below procedure :

## Step 0
Install node.js :)

## Step 1
Copy the files config.js, gulpfile.js and settings.js into your solution folder.

## Step 3
Create a cred.js file int the folder parent of your solution folder .
This file is outside of the solution folder to avoir to upload it to git.

```javascript
module.exports = {
    dev: {        
    "username": "user@domin.com",
    "password": "password"
    }
}.dev;
```

## Step 4
Configure config.json
```javascript
    "site": "http://test-site-url",
    "skipInstall": false,
    "verbose": "false",
    "config":"Dev",
    "remoteFoldersToGet":["SiteAssets","_catalogs/masterpage"], //folders for which you want to retrieve content in the populate task
    "location":"src" //location where files must be downloaded and watched
```
This file allows you to configure many profiles and select the one you want to activate by exporting the wanted config name.

# Usage

* A) Push to files to style library immediately. It will need a confirm and the it will create the folder by it self.

```javascript
gulp 
```

or 

* B) Watch changes and push to style library
```javascript
gulp watch
```

* C) if you specified published : false in config.json, it wont get publish until you run
```javascript
gulp publish
```
    
* D) If you want to retrieve all items from the folders defined in "remoteFoldersToGet" :
```javascript
gulp populate
```
