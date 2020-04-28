import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Tile } from 'src/app/models/tile.model';
import { LightboxService } from 'src/app/services/lightbox.service';
import { InfosService } from 'src/app/services/infos.service';
import { HomeService } from 'src/app/services/home.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit {
  @Input() data: Tile;
  @Input() index: number;
  private _alive: boolean = true;
  isLoaded: boolean;
  hoverProjectId: number;
  // hasProjectImages: boolean;

  constructor(
    private lightboxService: LightboxService,
    private infosService: InfosService,
    private ref: ChangeDetectorRef,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    // console.log('tile data');
    // console.log(this.data);

    this.homeService.onHoverProjectIdChannel()
      .pipe(takeWhile(() => this._alive))
      .subscribe((id: number) => {
        // console.log('hover project id');
        // console.log(id);
        this.hoverProjectId = id;
        this.ref.markForCheck();
      });
  }

  openInfos() {
    this.infosService.open(true);
  }

  openLightbox(image: any) {
    this.lightboxService.open(image);
  }

  onMouseEnter(image: any) {
    image.displayHover = false;
    clearTimeout(image.timeout);
    this.ref.markForCheck();

    setTimeout(() => {
      image.displayHover = true;
      this.ref.markForCheck();

      image.timeout = setTimeout(() => {
        image.displayHover = false;
        this.ref.markForCheck();
        clearTimeout(image.timeout);
      }, 750);
    }, 10);

    // HOVER EFFECT
    this.homeService.setHoverProjectId(image.projectId);
  }

  onMouseLeave() {
    this.homeService.setHoverProjectId(null);
  }

  onLoad() {
    this.isLoaded = true;
    this.ref.markForCheck();
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
