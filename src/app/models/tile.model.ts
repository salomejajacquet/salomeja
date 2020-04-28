import { Image } from 'src/app/models/project.model';

export interface Tile {
  id?: number;
  letter?: string;
  images?: Image[];
  projectTitleLetter?: string;
  tmp?: boolean;
}
