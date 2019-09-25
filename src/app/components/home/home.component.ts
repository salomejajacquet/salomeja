import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/utils/animations';
import { Api } from 'src/app/services/api.service';
import { Tile } from 'src/app/models/tile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {
  lettersPosition = [
    { index: 0, letter: 's' },
    { index: 2, letter: 'l' },
    { index: 4, letter: 'm' },
    { index: 6, letter: 'j' },
    { index: 7, letter: 'a' }
  ];
  tiles: Tile[] = [];
  tileIndex: number = 0;

  constructor(
    private api: Api,
    private ref: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    const projects = await this.api.getProjects();
    this.buildTiles(projects);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  buildTiles(projects: any) {
    // let lastProjectId: number = 0;

    projects.map((project: any) => {
      // console.log(index);
      // console.log(project);

      this.checkLetter();

      const images = project.images;

      // Add first image as a cover
      if (images.length) {
        const cover = images.shift();
        this.addTile({ images: [cover] });
        this.checkLetter();
      }

      // Add images by chunch of 4
      this.chunk(images, 4).map(images => {
        this.addTile({ images: images });
        this.checkLetter();
      });
    });

    // console.log(this.tiles);
    this.ref.markForCheck();
  }

  chunk(array: any[], length: number) {
    let chunks = [];
    let i = 0;
    let n = array.length;

    while (i < n) {
      chunks.push(array.slice(i, i += length));
    }

    return chunks;
  }

  checkLetter() {
    const letter = this.lettersPosition.find(letterPosition => letterPosition.index == this.tileIndex);
    if (letter) {
      this.addTile({
        letter: letter.letter
      });
    }
  }

  addTile(data: any) {
    const tile = new Tile(data);
    this.tiles.push(tile);
    this.tileIndex++;
  }
}
