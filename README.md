# Requirements

    $ npm install -g typescript cordova electron-prebuilt


# Compilation


    $ npm install
    $ cordova prepare
    $ cd www
    $ npm install
    $ tsd install
    $ tsc


# Start server

    $ npm start

# Start electron application

    $ electron desktop.js

# Run mobile application

    $ cordova run android


# Fix jquery

Edit www/node_modules/angular2/typings/angular-protractor/angular-protractor.d.ts. At the end of the file comment `declare var $: cssSelectorHelper`