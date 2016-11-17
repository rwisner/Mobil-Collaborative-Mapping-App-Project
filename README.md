# Mobile-Collaborative-Mapping-App-Project
Ionic2/ Angula2 Firebase

To lanch app start a new Ionic 2 project and replace the SRC file with this repository:

Requires node.js version 6.x

$ npm install -g ionic@latest cordova typescript
--May require sudo

$ ionic start ProjectName blank --v2
$ cd projectName

In projectName folder:
$ npm install @ionic/app-scripts@latest --save-dev
$ npm install @types/request@0.0.30 --save-dev --save-exact
$ npm install firebase angularfire2 --save

As of now this code does not use the AngularFire2 library. 
I've tried to use the firebase library to save mapping markers to firebase. However, there is an error that causes the app not to load. 

This src folder is what the app looks like (it's the tutorial I followed).
http://www.joshmorony.com/wp-content/uploads/2015/03/ionic2-advanced-map.zip

But the code in this repository has an "add marker" button at the top right hand corner and the marker has an info window. It lets users drop a marker at their current location. 
That's what I'd like to save to firebase.
I tried many ways of doing this, but the code in this repository is what I came up with after I followed this tutoiral:
https://webcake.co/using-firebase-3-in-angular-2-and-ionic-2/

My AuthData Provider is the same as the DataService provider in the tutorial.


This what my package.json file looks like. It shows everything I've installed to run the app like what version of firebase I'm working with:

{
  "name": "ionic-hello-world",
  "author": "Ionic Framework",
  "homepage": "http://ionicframework.com/",
  "private": true,
  "scripts": {
    "ionic:build": "ionic-app-scripts build",
    "watch": "ionic-app-scripts watch",
    "serve:before": "watch",
    "emulate:before": "build",
    "deploy:before": "build",
    "build:before": "build",
    "run:before": "build"
  },
  "dependencies": {
    "@angular/common": "2.1.1",
    "@angular/compiler": "2.1.1",
    "@angular/compiler-cli": "2.1.1",
    "@angular/core": "2.1.1",
    "@angular/forms": "2.1.1",
    "@angular/http": "2.1.1",
    "@angular/platform-browser": "2.1.1",
    "@angular/platform-browser-dynamic": "2.1.1",
    "@angular/platform-server": "2.1.1",
    "@ionic/app-scripts": "0.0.37-5",
    "@ionic/storage": "1.1.6",
    "angularfire2": "^2.0.0-beta.6",
    "firebase": "^3.6.0",
    "ionic-angular": "2.0.0-rc.2",
    "ionic-native": "2.2.3",
    "ionicons": "3.0.0",
    "rxjs": "5.0.0-beta.12",
    "zone.js": "0.6.21"
  },
  "devDependencies": {
    "@ionic/app-scripts": "0.0.43",
    "@types/request": "0.0.30",
    "typescript": "2.0.6"
  },
  "cordovaPlugins": [
    "cordova-plugin-device",
    "cordova-plugin-console",
    "cordova-plugin-whitelist",
    "cordova-plugin-splashscreen",
    "cordova-plugin-statusbar",
    "ionic-plugin-keyboard"
  ],
  "cordovaPlatforms": [
    "ios",
    {
      "platform": "ios",
      "version": "",
      "locator": "ios"
    }
  ],
  "description": "MiliMap: An Ionic project"
}
