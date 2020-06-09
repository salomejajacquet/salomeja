import { Injectable } from '@angular/core';

@Injectable()
export class Utils {
  constructor() { }

  get isMobile(): boolean {
    return window.innerWidth < 768;
  }
}
