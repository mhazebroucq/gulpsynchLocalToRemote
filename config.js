module.exports = {
    dev: {        
        "site": "http://test-site-url",
        "skipInstall": false,
        "verbose": "false",
        "config":"Dev",
        "remoteFoldersToGet":["SiteAssets","_catalogs/masterpage"],
        "location":"src"
    },
    preprod: {        
        "site": "http://preprod-site-url",
        "skipInstall": false,
        "verbose": "false",
        "config":"Preprod",
        "remoteFoldersToGet":["SiteAssets","_catalogs/masterpage"],
        "location":"src"
    },
    prod: {        
        "site": "http://prod-site-url",
        "skipInstall": false,
        "verbose": "false",
        "config":"Prod",
        "remoteFoldersToGet":["SiteAssets","_catalogs/masterpage"],
        "location":"src"
    }
}.dev;