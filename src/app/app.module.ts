import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { MyApp } from "./app.component";

import { ContactPage } from "../pages/contact/contact";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { IonicStorageModule } from "@ionic/storage";
import { CacheModule } from "ionic-cache-observable";
import { HttpClientModule } from "@angular/common/http";
import { PlaceholderProvider } from "../providers/placeholder/placeholder";
import { NewsDetailsComponent } from "../pages/news-details/news-details";

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    CacheModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    NewsDetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PlaceholderProvider
  ]
})
export class AppModule {}
