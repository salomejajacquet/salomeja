import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Tile } from 'src/app/models/tile.model';
import { LightboxService } from 'src/app/services/lightbox.service';
import { InfosService } from 'src/app/services/infos.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit {
  @Input() data: Tile;
  timeout: any;

  constructor(
    private lightboxService: LightboxService,
    private infosService: InfosService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // console.log(this.data.images);
    if (this.data.images) {
      this.data.images.map(image => {
        this.lightboxService.addImage(image);
      });
    }
  }

  openInfos() {
    this.infosService.open(true);
  }

  openLightbox(image: any) {
    this.lightboxService.open(image);
  }

  onMouseEnter(image: any) {
    image.displayHover = true;
    this.ref.markForCheck();

    this.timeout = setTimeout(() => {
      image.displayHover = false;
      this.ref.markForCheck();
      clearTimeout(this.timeout);
    }, 750);
  }
}
