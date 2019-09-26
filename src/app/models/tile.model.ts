// import { TileType } from '../enums/tile-type.enum';

export class Tile {
  // type: TileType;
  letter?: string;
  // images?: TileImage[];
  images?: any[];
  cover?: any;

  constructor(data: any) {
    const self: Tile = Object.assign(this, data);
    // console.log(data);

    if (data.cover) {
      self.cover = data.cover.image.image;
    }

    if (data.images) {
      self.images = [];
      data.images.map((image: any) => {
        // self.images.push(new TileImage(image));
        self.images.push(image.image.image);
      });
    }

    return self;
  }
}

// export class TileImage {

//   constructor(data: any) {
//     const self: Tile = Object.assign(this, data);

//     // console.log(data);

//     return self;
//   }
// }
