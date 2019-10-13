import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  private _openInfos: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public openInfosChannel(): Observable<boolean> {
    return this._openInfos.asObservable();
  }

  open(value: boolean) {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': 0
    });
    this._openInfos.next(value);
  }
}
