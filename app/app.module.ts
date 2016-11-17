import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConnectivityService } from '../providers/connectivity-service';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDSQHNZt-A_QQEtCdeN3uW6wq_uwg-N8nw",
    authDomain: "border-mapping-app.firebaseapp.com",
    databaseURL: "https://border-mapping-app.firebaseio.com",
    storageBucket: "border-mapping-app.appspot.com",
    messagingSenderId: "547659347386"
};




@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    firebase.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [ConnectivityService]
})
export class AppModule {}
