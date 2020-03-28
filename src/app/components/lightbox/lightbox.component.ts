import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { LightboxService } from 'src/app/services/lightbox.service';
import { TileImage } from 'src/app/models/tile.model';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightboxComponent implements OnInit, OnDestroy {
  @Input() lightboxIndex: number;
  private _keydownListener: EventListener;
  private _resizeListener: EventListener;
  images: TileImage[];
  padding: number = 16;
  entryWidth: number;
  entryHeight: number;
  translate: number;
  isAnimated: boolean = false;
  currentImage: TileImage;
  blocWidth: number = 384;

  constructor(
    private lightboxService: LightboxService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.images = this.lightboxService.images;
    // console.log(this.images);
    this._keydownListener = this.onKeydown.bind(this);
    window.addEventListener('keydown', this._keydownListener);
    this._resizeListener = this.onWindowResize.bind(this);
    window.addEventListener('resize', this._resizeListener);
    this.setDialogSize();
    this.setTranslate();

    console.log(this.currentImage.projectDescription);
  }

  onWindowResize() {
    this.setDialogSize();
    this.setTranslate();
  }

  setDialogSize() {
    // const height = window.innerHeight - 2 * this.padding;
    this.entryHeight = window.innerHeight - 2 * this.padding;
    this.entryWidth = 2 * this.entryHeight / 3;
    this.ref.markForCheck();
  }

  setTranslate() {
    this.currentImage = this.images[this.lightboxIndex];
    this.translate = (this.entryWidth + this.blocWidth) * this.lightboxIndex;
    this.ref.markForCheck();
  }

  onClickDialog(index: number) {
    if (index < this.lightboxIndex) {
      this.prev();
    } else if (index > this.lightboxIndex) {
      this.next();
    }
  }

  prev() {
    if (this.lightboxIndex - 1 >= 0) {
      this.isAnimated = true;
      this.lightboxIndex--;
      this.setTranslate();
      this.ref.markForCheck();
    }
  }

  next() {
    if (this.lightboxIndex + 1 < this.images.length) {
      this.isAnimated = true;
      this.lightboxIndex++;
      this.setTranslate();
      this.ref.markForCheck();
    }
  }

  close() {
    this.lightboxService.close();
    this.ref.markForCheck();
  }

  onKeydown(event: any) {
    switch (event.key) {
      case 'Escape':
        this.close();
        break;
      case 'ArrowLeft':
        this.prev();
        break;
      case 'ArrowRight':
        this.next();
        break;
    }
  }

  ngOnDestroy() {
    window.removeEventListener('keydown', this._keydownListener);
    window.removeEventListener('resize', this._resizeListener);
  }
}
