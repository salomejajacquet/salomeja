import { transition, trigger, query, style, animate, group } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => infos', [
      query(':enter',
        style({
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh'
        }),
        { optional: true }),
      group([
        query(':enter', [
          style({
            transform: 'translate3d(0, -100vh, 0)',
            // opacity: 0
          }),
          animate('.8s cubic-bezier(.23, 1, .32, 1)',
            style({
              transform: 'translate3d(0, 0, 0)',
              // opacity: 1
            }))
        ], { optional: true })
      ])
    ]),
    transition('infos => *', [
      query(':leave',
        style({
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh'
        }),
        { optional: true }),
      group([
        query(':leave', [
          style({
            transform: 'translate3d(0, 0, 0)',
            // opacity: 1
          }),
          animate('1s cubic-bezier(.23, 1, .32, 1)',
            style({
              transform: 'translate3d(0, -100vh, 0)',
              // opacity: 0
            }))
        ], { optional: true })
      ])
    ]),
  ]);
