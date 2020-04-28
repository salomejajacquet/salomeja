import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { slideInAnimation, lightboxAnimation } from 'src/app/utils/animations';
import { Api } from 'src/app/services/api.service';
import { Tile } from 'src/app/models/tile.model';
import { LightboxService } from 'src/app/services/lightbox.service';
import { takeWhile } from 'rxjs/operators';
import { InfosService } from 'src/app/services/infos.service';
import { HomeService } from 'src/app/services/home.service';

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
    private homeService: HomeService,
    private ref: ChangeDetectorRef,
    private lightboxService: LightboxService,
    private infosService: InfosService
  ) { }

  ngOnInit() {
    this.buildTiles();

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
          }, 850);
        } else {
          this.displayLetters = true;
          this.ref.markForCheck();
        }
      });
  }

  ngOnDestroy() {
    this._alive = false;
  }

  async buildTiles() {
    await this.homeService.getProjects();
    const images = this.homeService.images;

    this.chunk(images, 4).map(images => {
      this.tiles.push({ images: images });
    });

    // Insert letters
    this.lettersPosition.map(letter => {
      this.tiles.splice(letter.index, 0, { letter: letter.letter });
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
}
