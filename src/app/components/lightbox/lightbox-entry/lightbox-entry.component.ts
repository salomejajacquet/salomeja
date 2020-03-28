import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { fadeInAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-lightbox-entry',
  templateUrl: './lightbox-entry.component.html',
  styleUrls: ['./lightbox-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInAnimation]
})
export class LightboxEntryComponent implements OnInit {
  @Input() image: any;
  // mobileBreakpoint: number = 767;
  isInViewport: boolean;
  isLoaded: boolean;

  constructor(
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() { }

  async onDeferLoad() {
    this.isInViewport = true;
    this.ref.markForCheck();
  }
}
