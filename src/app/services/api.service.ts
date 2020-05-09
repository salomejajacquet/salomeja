import { Injectable } from '@angular/core';
import DirectusSDK from "@directus/sdk-js";
import { Project, Image } from 'src/app/models/project.model';

@Injectable()
export class Api {
  client: any;
  domain: string = 'https://api.paulgiron.com';
  project: string = 'salomeja';

  constructor() {
    this.client = new DirectusSDK({
      url: this.domain,
      project: this.project
    });
  }

  async getProjects() {
    const response: any = await this.client.getItems('project?fields=*.*.*.*');
    // console.log(response);
    return this.parseProjects(response.data);
  }

  parseProjects(data: any): Project[] {
    return data.map((entry: any) => ({
      id: entry.id,
      title: entry.title,
      description: this.replaceLineReturn(entry.description),
      date: entry.date,
      images: this.parseImages(entry.images, entry.id)
    }));
  }

  parseImages(data: any, projectId: number): Image[] {
    return data.map((entry: any) => ({
      id: entry.image.id,
      projectId: projectId,
      title: entry.image.title,
      description: this.replaceLineReturn(entry.image.description),
      bigUrl: `${this.domain}/${this.project}/assets/${entry.image.image.private_hash}?key=thumb_big`,
      thumbUrl: `${this.domain}/${this.project}/assets/${entry.image.image.private_hash}?key=thumb_small`
    }));
  }

  replaceLineReturn(str: string): string {
    if (str) {
      return str.replace('{alinea}', '<span class="alinea"></span>').replace(/(?:\r\n|\r|\n)/g, '<br>');
    } else {
      return '';
    }
  }
}
