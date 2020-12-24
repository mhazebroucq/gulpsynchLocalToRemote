var settings = (function () {
    var config = require('./config.js');
    var cred = require('../creds.js');
    return{
        checks: function () {
            if (typeof cred.username === 'undefined') {
                throw "username is required in the configuration file"
            }            
            if (typeof cred.password === 'undefined' || config.password == "") {
                throw "password is required in the configuration file"
            }
            if (typeof config.site === 'undefined') {
                throw "site is required in the configuration file"
            }
            if (typeof config.fileMetadata === 'undefined') {
                config.fileMetadata = [];
            }            
        },
        get: function () {
            this.checks();
            return {
                username: cred.username,
                password: cred.password,
                site: config.site,
                files_metadata: config.fileMetadata,
                verbose: config.verbose,
                publish: true 
            }
        },
        download: function () {
            if (typeof config.location === 'undefined') {
                throw "location is required in the configuration file"
            }
            this.checks();
            return {
                username: cred.username,
                password: cred.password,
                site: config.site,
                startFolder: config.location,
                associatedHtml: false
            }
        },
        
        populateLocalFolders: function () {
            if (typeof config.location === 'undefined') {
                throw "location is required in the configuration file"
            }
            if (typeof config.remoteFoldersToGet === 'undefined') {
                throw "remoteFoldersToGet is required in the configuration file"
            }
            this.checks();
            return {
                username: cred.username,
                password: cred.password,
                site: config.site,
                location: config.location,
                associatedHtml: false,
                remoteFoldersToGet:config.remoteFoldersToGet,
            }
        }   
    } 
})();

module.exports = settings;