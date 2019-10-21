import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { SetIsMobileWidth, EMobileActionTypes } from '../actions/mobile.actions';
import { map, switchMap } from 'rxjs/operators';
@Injectable()
export class MobileEffects {
    //switchmap effect EXAMPLE
    // @Effect()
    // getIsMobileWidth$ = this._action$.pipe(
    //     ofType<SetIsMobileWidth>(EMobileActionTypes.SetIsMobileWidth),
    //     map(action => action.payload),
    //     switchMap(payload => this.SERVICEHERE.SERVICECALLHERE(payload)),
    //     switchMap((RESPONSEHERE: any) => [
    //         new ACTIONHERE(RESPONSEHERE),
    //     ])
    // );

    //no call effect EXAMPLE
    // @Effect()
    // getIsMobileWidth$ = this._action$.pipe(
    //     ofType<SetIsMobileWidth>(EMobileActionTypes.SetIsMobileWidth),
    //     map(() => new ACTIONHERE())
    // );

    constructor(
        private _action$: Actions
    ) {

    }
}