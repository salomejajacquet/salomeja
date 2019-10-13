import { transition, trigger, query, style, animate, group } from '@angular/animations';

// export const slideInAnimation = trigger('routeAnimations', [
//   transition('* => infos', [
//     query(':enter',
//       style({
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100vh'
//       }),
//       { optional: true }),
//     group([
//       query(':enter', [
//         style({
//           transform: 'translate3d(0, 100vh, 0)',
//           // opacity: 0
//         }),
//         animate('.8s cubic-bezier(.23, 1, .32, 1)',
//           style({
//             transform: 'translate3d(0, 0, 0)',
//             // opacity: 1
//           }))
//       ], { optional: true })
//     ])
//   ]),
//   transition('infos => *', [
//     query(':leave',
//       style({
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100vh'
//       }),
//       { optional: true }),
//     group([
//       query(':leave', [
//         style({
//           transform: 'translate3d(0, 0, 0)',
//           // opacity: 1
//         }),
//         animate('.8s cubic-bezier(.23, 1, .32, 1)',
//           style({
//             transform: 'translate3d(0, 100vh, 0)',
//             // opacity: 0
//           }))
//       ], { optional: true })
//     ])
//   ]),
// ]);

export const slideInAnimation = trigger('slideInAnimation', [
  transition(':enter', [
    style({ transform: 'translate3d(0, 100vh, 0)' }),
    animate('.8s cubic-bezier(.23, 1, .32, 1)')
  ]),
  transition(':leave', [
    animate('.8s cubic-bezier(.23, 1, .32, 1)', style({ transform: 'translate3d(0, 100vh, 0)' }))
  ])
]);

export const lightboxAnimation = trigger('lightboxAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(1.1)' }),
    animate('.15s ease')
  ]),
  transition(':leave', [
    animate('.15s ease', style({ opacity: 0, transform: 'scale(1.1)' }))
  ])
]);

export const homeFadeInAnimation = trigger('homeFadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(.97) translate3d(-4%, 4%, 0)' }),
    animate('.8s {{delay}}ms ease', style({ opacity: 1, transform: 'scale(1) translate3d(0, 0, 0)' })),
  ], { params: { delay: 0 } })
]);
