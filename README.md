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
I tried many ways of doing this, but this code is what I came up with after I followed this tutoiral:
https://webcake.co/using-firebase-3-in-angular-2-and-ionic-2/

My AuthData Provider is the same as the DataService provider in the tutorial.



