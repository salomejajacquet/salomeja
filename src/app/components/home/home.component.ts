import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation, lightboxAnimation } from 'src/app/utils/animations';
import { Api } from 'src/app/services/api.service';
import { Tile } from 'src/app/models/tile.model';
import { LightboxService } from 'src/app/services/lightbox.service';
import { takeWhile } from 'rxjs/operators';
import { InfosService } from 'src/app/services/infos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation, lightboxAnimation]
})
export class HomeComponent implements OnInit {
  private _alive: boolean = true;
  lettersPosition = [
    { index: 0, letter: 'S' },
    { index: 2, letter: 'L' },
    { index: 4, letter: 'M' },
    { index: 6, letter: 'J' },
    { index: 7, letter: 'A' }
  ];
  tiles: Tile[] = [];
  lightboxIndex: number;
  openInfos: boolean = false;
  displayLetters: boolean = true;

  constructor(
    private api: Api,
    private ref: ChangeDetectorRef,
    private lightboxService: LightboxService,
    private infosService: InfosService
  ) { }

  async ngOnInit() {
    const projects = await this.api.getProjects();
    this.buildTiles(projects);

    this.lightboxService.lightboxChannel()
      .pipe(takeWhile(() => this._alive))
      .subscribe((index: number) => {
        this.lightboxIndex = index;
        this.ref.markForCheck();
      });

    this.infosService.openInfosChannel()
      .pipe(takeWhile(() => this._alive))
      .subscribe((state: boolean) => {
        this.openInfos = state;
        this.ref.markForCheck();

        if (state) {
          setTimeout(() => {
            this.displayLetters = false;
            this.ref.markForCheck();
          }, 810);
        } else {
          this.displayLetters = true;
          this.ref.markForCheck();
        }
      });
  }

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  buildTiles(projects: any) {
    const images = [];

    projects.map((project: any) => {
      project.images.map((image: any) => {
        images.push(image);
      });
    });

    this.chunk(images, 4).map(images => {
      const tile = this.createTile({ images: images });
      this.tiles.push(tile);
    });

    // Insert letters
    this.lettersPosition.map(letter => {
      this.tiles.splice(letter.index, 0, this.createTile({ letter: letter.letter }));
    });

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

  createTile(data: any) {
    return new Tile(data);
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
