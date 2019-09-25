import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Tile } from 'src/app/models/tile.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit {
  @Input() data: Tile;

  constructor() { }

  ngOnInit() {
    // console.log(this.data);
  }
}
