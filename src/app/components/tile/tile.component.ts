import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Tile } from 'src/app/models/tile.model';
import { LightboxService } from 'src/app/services/lightbox.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit {
  @Input() data: Tile;

  constructor(
    private lightboxService: LightboxService
  ) { }

  ngOnInit() {
    // console.log(this.data.images);
    if (this.data.images) {
      this.data.images.map(image => {
        this.lightboxService.addImage(image);
      });
    }
  }

  openLightbox(image: any) {
    this.lightboxService.open(image);
  }
}
