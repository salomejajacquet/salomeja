import { Injectable } from '@angular/core';
import DirectusSDK from "@directus/sdk-js";

@Injectable({
  providedIn: 'root'
})
export class Api {
  client: any;
  domain: string = 'https://api.paulgiron.com';
  project: string = 'salomeja';

  constructor() {
    this.client = new DirectusSDK({
      url: this.domain,
      project: this.project
    });

    // this.client.login({
    //   email: 'pol.giron@gmail.com',
    //   // email: 'luke@gmail.com',
    //   password: 'pignouf',
    //   // storage: window.localStorage
    // });
  }

  getProjects() {
    return this.client.getItems('project?fields=*.*.*.*')
      .catch((error: any) => console.error(error))
      .then((data: any) => {
        // console.log(data);
        // console.log(data.data[0]);
        return data.data;
      });
  }
}
