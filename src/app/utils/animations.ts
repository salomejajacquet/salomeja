import { transition, trigger, style, animate } from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  transition(':enter', [
    style({ transform: 'translate3d(0, 100vh, 0)' }),
    animate('.6s ease-out')
  ]),
  transition(':leave', [
    animate('.6s ease-out', style({ transform: 'translate3d(0, 100vh, 0)' }))
  ])
]);

export const homeFadeInAnimation = trigger('homeFadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('.4s {{delay}}ms ease', style({ opacity: 1 })),
  ], { params: { delay: 0 } })
]);

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('.2s')
  ]),
  transition(':leave', [
    animate('.2s', style({
      opacity: 0
    }))
  ])
]);

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('2s ease-out')
  ])
]);

export const fadeOutAnimation = trigger('fadeOutAnimation', [
  transition(':leave', [
    animate(600, style({
      opacity: 0,
    }))
  ])
]);

export const lightboxAnimation = trigger('lightboxAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('.3s ease-out')
  ])
]);
