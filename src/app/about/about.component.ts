import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { selectIsMobileWidth, selectIsMobileDevice } from '../store/selectors/mobile.selectors';
import { takeUntil } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fade1', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]) 
    ]), trigger('fade2', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(2000, style({opacity: 1}))
      ]) 
    ]), trigger('fade3', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(3000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class AboutComponent implements OnInit {
  isMobileWidth: boolean;
  isMobileDevice: boolean;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(selectIsMobileWidth), takeUntil(this.unsubscribe$)).subscribe((isMobileWidth: boolean) => {
      this.isMobileWidth = isMobileWidth;
    });

    this.store.pipe(select(selectIsMobileDevice), takeUntil(this.unsubscribe$)).subscribe((isMobileDevice: boolean) => {
      this.isMobileDevice = isMobileDevice;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
