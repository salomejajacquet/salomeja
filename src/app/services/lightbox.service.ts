import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Image } from 'src/app/models/project.model';
import { HomeService } from 'src/app/services/home.service';

@Injectable()
export class LightboxService {
  private _lightbox: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  constructor(
    private homeService: HomeService
  ) { }

  public lightboxChannel(): Observable<number> {
    return this._lightbox.asObservable();
  }

  open(image: Image) {
    const index: number = this.homeService.images.indexOf(image);
    this._lightbox.next(index);
    document.body.classList.add('is-static');
  }

  close() {
    this._lightbox.next(null);
    document.body.classList.remove('is-static');
  }
}
