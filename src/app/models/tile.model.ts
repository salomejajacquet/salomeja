export class Tile {
  letter?: string;
  images?: TileImage[];

  constructor(data: any) {
    const self: Tile = Object.assign(this, data);
    // console.log(data);

    if (data.images) {
      self.images = [];
      data.images.map((image: any) => {
        self.images.push(new TileImage(image));
        // self.images.push(image.image.image);
      });
    }

    return self;
  }
}

export class TileImage {
  bigUrl: string;
  thumbUrl: string;
  title: string;
  description: string;
  projectTitle: string;
  projectDate: string;
  projectDescription: string;
  projectId: number;

  constructor(data: any) {
    // console.log('data');
    // console.log(data);
    // console.log(data.image.image.data);
    this.projectId = data.project;
    this.title = data.image.title;
    this.thumbUrl = data.image.image.data.thumbnails.find(thumbnail => thumbnail.dimension == '150x150').url;
    this.bigUrl = data.image.image.data.thumbnails.find(thumbnail => thumbnail.dimension == '1200x1200').url;
    this.projectTitle = data.projectTitle;
    this.projectDate = data.projectDate;

    if (data.image.description) {
      this.description = data.image.description.replace('{alinea}', '<span class="alinea"></span>');
    }

    if (data.projectDescription) {
      this.projectDescription = data.projectDescription.replace('{alinea}', '<span class="alinea"></span>');
    }
  }
}
