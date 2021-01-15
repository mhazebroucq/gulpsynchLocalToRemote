'use strict';

var gulp = require('gulp'),
// ts = require('gulp-typescript'),
plumber = require("gulp-plumber"),
sp = require('gulp-spsync-creds'),
confirm = require('gulp-confirm'),
clean = require('gulp-clean'),
settings = require('./settings');
var processIfModified = require('gulp-process-only-modified-files');
//const debug = require('gulp-debug');


var onError = function (err) {
    this.emit("end");
};

// Variable to define where is the mainfolder
var mainFld = 'src';
var folder = './src/**/*.*';

// Clean
// gulp.task('clean', function () {
//     return gulp.src('dist/**/*')
//         .pipe(clean());        
// });

// This will "deploy" all files to dist folder (after a clean)
// gulp.task('deploy', ['clean'],() => {
//     return gulp.src(folder)
//         .pipe(gulp.dest('dist'));
// });

/*
    Default task: uploads only updated files since last upload, from folder SRC to SP Style library (configured in config.json)
 */
gulp.task('default', function () {
    return gulp.src(folder).pipe(confirm({
        question: 'You\'re about to upload elements to '+settings.get().site + '. Are you sure ? (y/n)',
        input: '_key:y'
    }))
    .pipe(processIfModified())
    .pipe(sp.sync(settings.get())
    );
});

//ONLY FOR Typescript
// This is the "transpile" task which transpiles all TypeScript files to JavaScript
// gulp.task('transpile', () => {
//     return gulp.src('src/style library/lib/ts/*.ts')
//         .pipe(ts())
//         .pipe(gulp.dest('src/style library/lib/js'));
// });

/*
    watch task: this task can be used during the development process, it automatically uploads the files when changed
 */
gulp.task("watch", function () {
    // This is the "watch" task, every time you change the TS file, it will call the "transpile" task
    //ONLY FOR Typescript 
    //gulp.watch('src/style library/lib/ts/*.ts', ['transpile']);

    var crntSettings = settings.get();
    crntSettings["cache"] = true;

    gulp.watch(folder, function (event) {
        gulp.src(event.path, { base: mainFld })
            .pipe(plumber({
                errorHandler: onError
            }))
            .pipe(sp.sync(crntSettings));
    });
});

/*
    publish-all task: uploads everything and publishes each file
 */
gulp.task('publish-all', function () {
    var crntSettings = settings.get();
    // Update Metadat doesn't work, should be improved
    //crntSettings["update_metadata"] = true;
    //Check-in the files
    crntSettings["publish"] = true;
    return gulp.src(folder)
        .pipe(confirm({
            question: 'You\'re about to upload elements to '+settings.get().site + '. Are you sure ? (y/n)',
            input: '_key:y'
        }))
        //.pipe(debug({title: 'unicorn:'}));
        .pipe(sp.sync(crntSettings));
});

/*
    publish task: uploads only updated files since last publish
 */
gulp.task('publish', function () {
    var crntSettings = settings.get();
    // Update Metadat doesn't work, should be improved
    //crntSettings["update_metadata"] = true;
    //Check-in the files
    crntSettings["publish"] = true;
    return gulp.src(folder)
        .pipe(confirm({
            question: 'You\'re about to upload elements to '+settings.get().site + '. Are you sure ? (y/n)',
            input: '_key:y'
        }))
        .pipe(processIfModified())
        //.pipe(debug({title: 'unicorn:'}));
        .pipe(sp.sync(crntSettings));
});
/*
    download task: download the files for the specified folder
    This will download all files from SharePoint "config.location" into your destination local folder
 */
gulp.task('download', function () {
    var crntSettings = settings.download();
    console.log(JSON.stringify(crntSettings));
    return sp.download(crntSettings).pipe(gulp.dest("dist/" + crntSettings.startFolder));
});

/*
    download task: download the files for the specified folder
    This will download all files from SharePoint "config.location" into your destination local folder
 */
gulp.task('populate', function () {
    var crntSettings = settings.populateLocalFolders();
    crntSettings.remoteFoldersToGet.forEach(element => {
        crntSettings.startFolder = element;
        sp.download(crntSettings).pipe(gulp.dest(crntSettings.location+"/" + crntSettings.startFolder));
    });
    // return 
});
