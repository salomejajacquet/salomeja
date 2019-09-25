// import { TileType } from '../enums/tile-type.enum';

export class Tile {
  // type: TileType;
  letter?: string;
  images?: TileImage[];

  constructor(data: any) {
    const self: Tile = Object.assign(this, data);
    console.log(data);

    if (data.images) {
      data.images.map((image: any) => {
        self.images.push(new TileImage(image));
      });
    }

    return self;
  }
}

export class TileImage {

  constructor(imageData: any) {
    const self: Tile = Object.assign(this, imageData);

    return self;
  }
}
