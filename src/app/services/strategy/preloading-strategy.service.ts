import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadingStrategyService implements PreloadingStrategy {
  preloadedModules: string[] = [];
  constructor() { }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']){
      // log the route path to the console
      console.log('Preloaded: ' + route.path);
      return fn();
    } else {
      return of(null);
    }
  }
}
