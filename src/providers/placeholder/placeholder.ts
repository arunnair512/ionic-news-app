import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Placeholder } from "./placeholder.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/defer";
import "rxjs/add/operator/delay";

/*
  Generated class for the PlaceholderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlaceholderProvider {
  constructor(public http: HttpClient) {
    console.log("Hello PlaceholderProvider");
  }

  /**
   * Get some placeholder data.
   *
   * @returns {Observable<Placeholder>}
   */
  public get(index): Observable<Placeholder> {
    /* return this.http
      .get<Placeholder>("https://jsonplaceholder.typicode.com/posts/" + index)
      .delay(1000); */ // Enforce a delay to make the cache functionality more visible.
    return this.http.get<Placeholder>(
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ac9d5b32a3b34e948f2d4526e4a99220"
    );
  }

  /**
   * Get some random placeholder data.
   *
   * @returns {Observable<Placeholder>}
   */
  public random(): Observable<Placeholder> {
    return Observable.defer(() => {
      const index = Math.ceil(Math.random() * 10);

      console.debug("Getting random data: " + index);

      return this.get(index);
    });
  }
}
