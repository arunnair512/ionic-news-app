import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
/**
 * Generated class for the NewsDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "news-details",
  templateUrl: "news-details.html"
})
export class NewsDetailsComponent {
  newsText: string;
  newsTitle: string;
  publishedAt: string;
  publishedAtDt: any;
  urlToImage:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.log(navParams.data.newsitem.content);
    this.newsText = navParams.data.newsitem.content;
    this.newsTitle = navParams.data.newsitem.title;
    this.publishedAt = navParams.data.newsitem.publishedAt;
    // Date date = dateFormat.parse("2017-04-26T20:55:00.000Z");
    this.publishedAt = navParams.data.newsitem.publishedAt;
    this.publishedAt = this.publishedAt.substring(0, 10);
    this.publishedAtDt = new Date(this.publishedAt);
    this.urlToImage = navParams.data.newsitem.urlToImage;
  }
  goBack() {
    this.navCtrl.pop();
  }
}
