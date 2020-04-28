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

  getProjects() {
    return this.client.getItems('project?fields=*.*.*.*')
      .catch((error: any) => console.error(error))
      .then((data: any) => {
        console.log('data');
        console.log(data);
        return this.parseProjects(data.data);
      });
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
      bigUrl: entry.image.image.data.thumbnails.find((thumbnail: any) => thumbnail.dimension == '1200x1200').url,
      thumbUrl: entry.image.image.data.thumbnails.find((thumbnail: any) => thumbnail.dimension == '150x150').url
    }));
  }

  replaceLineReturn(str: string): string {
    if (str) {
      return str.replace('{alinea}', '<span class="alinea"></span>');
    } else {
      return '';
    }
  }
}
