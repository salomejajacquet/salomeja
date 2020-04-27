import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class HomeService {
  private _onHoverProjectId: Subject<number> = new Subject<number>();

  constructor() { }

  public onHoverProjectIdChannel(): Observable<number> {
    return this._onHoverProjectId.asObservable();
  }

  setHoverProjectId(id: number) {
    this._onHoverProjectId.next(id);
  }
}
