import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TileType } from 'src/app/enums/tile-type.enum';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit {
  @Input() type: TileType;
  @Input() letter: string;

  constructor() { }

  ngOnInit() {
  }
}
