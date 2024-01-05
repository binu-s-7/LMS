// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';

// import { AuthService } from '../services/auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router, private authService: AuthService) {}

//   canActivate(
//     _route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     const access_token = this.authService.access_token;
//     if (access_token) {
//       return this.router.createUrlTree(['/app/launchpad'], {
//         queryParams: { returnUrl: state.url },
//       });
//     } else {
//       return true;
//     }
//   }
// }
