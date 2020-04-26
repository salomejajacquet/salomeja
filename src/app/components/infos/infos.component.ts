import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { InfosService } from 'src/app/services/infos.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfosComponent implements OnInit {
  displayLetters: boolean = false;

  constructor(
    private infosService: InfosService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.displayLetters = true;
      this.ref.markForCheck();
    }, 800);
  }

  close() {
    this.displayLetters = false;
    this.infosService.open(false);
    this.ref.markForCheck();
  }
}
