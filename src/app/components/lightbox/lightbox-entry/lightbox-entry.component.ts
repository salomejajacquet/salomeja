import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lightbox-entry',
  templateUrl: './lightbox-entry.component.html',
  styleUrls: ['./lightbox-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightboxEntryComponent implements OnInit {
  @Input() image: any;
  // mobileBreakpoint: number = 767;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }

  // setQueryParameter() {
  //   // changes the route without moving from the current view or
  //   // triggering a navigation event,
  //   this.router.navigate([], {
  //     relativeTo: this.route,
  //     queryParams: {
  //       open: this.image._id
  //     },
  //     queryParamsHandling: 'merge',
  //     // preserve the existing query params in the route
  //     // skipLocationChange: true
  //     // do not trigger navigation
  //   });
  // }
}
