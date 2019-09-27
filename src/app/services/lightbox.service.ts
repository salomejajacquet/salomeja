import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  private _lightbox: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  images: any[] = [];

  constructor() { }

  public lightboxChannel(): Observable<number> {
    return this._lightbox.asObservable();
  }

  addImage(image: any) {
    this.images.push(image);
  }

  open(image: any) {
    const index: number = this.images.indexOf(image);
    this._lightbox.next(index);
    document.body.classList.add('is-static');
  }

  close() {
    this._lightbox.next(null);
    document.body.classList.remove('is-static');
  }
}
