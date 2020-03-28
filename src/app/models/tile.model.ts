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

  constructor(data: any) {
    // console.log(data.image.image.data);
    this.title = data.image.title;
    this.description = data.image.description;
    this.thumbUrl = data.image.image.data.thumbnails.find(thumbnail => thumbnail.dimension == '100x100').url;
    this.bigUrl = data.image.image.data.thumbnails.find(thumbnail => thumbnail.dimension == '1200x1200').url;
    this.projectTitle = data.projectTitle;
    this.projectDate = data.projectDate;
    this.projectDescription = data.projectDescription;
  }
}
