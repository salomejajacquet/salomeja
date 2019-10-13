import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { InfosService } from 'src/app/services/infos.service';
import { Router } from '@angular/router';

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
    private ref: ChangeDetectorRef,
    private router: Router
  ) { }

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.displayLetters = true;
  //     this.ref.markForCheck();
  //   }, 800);
  // }

  // close() {
  //   this.infosService.open(false);
  // }

  ngOnInit() {
    setTimeout(() => {
      this.displayLetters = true;
      this.ref.markForCheck();
    }, 800);
  }

  close() {
    this.infosService.open(false);
    // this.router.navigateByUrl('/');
  }
}
