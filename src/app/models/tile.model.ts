export class Tile {
  letter?: string;
  images?: TileImage[];

  constructor(data: any) {
    const self: Tile = Object.assign(this, data);
    // console.log(data);

    if (data.images) {
      self.images = [];
      data.images.map((image: any) => {
        self.images.push(new TileImage(image.image));
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

  constructor(data: any) {
    // console.log(data);
    this.title = data.title;
    this.thumbUrl = data.image.data.thumbnails.find(thumbnail => thumbnail.dimension == '100x100').url;
    this.bigUrl = data.image.data.thumbnails.find(thumbnail => thumbnail.dimension == '1200x1200').url;
  }
}
