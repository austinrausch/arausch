import { Action } from '@ngrx/store';

export enum EMobileActionTypes {
    SetIsMobileWidth = "[Mobile] Set Is Mobile Width",
    SetIsMobileDevice = "[Mobile] Set Is Mobile Device",
    SetDeviceWidth = "[Mobile] Set Device Width",
    SetMobileDevice = "[Mobile] Set Mobile Device"
}

export class SetIsMobileWidth implements Action {
    public readonly type = EMobileActionTypes.SetIsMobileWidth;
    constructor(public payload: boolean) {};
}

export class SetIsMobileDevice implements Action {
    public readonly type = EMobileActionTypes.SetIsMobileDevice;
    constructor(public payload: boolean) {};
}

export class SetDeviceWidth implements Action {
    public readonly type = EMobileActionTypes.SetDeviceWidth;
    constructor(public payload: number) {};
}

export class SetMobileDevice implements Action {
    public readonly type = EMobileActionTypes.SetMobileDevice;
    constructor(public payload: string) {};
}

export type MobileActions = SetIsMobileWidth | SetIsMobileDevice | SetDeviceWidth | SetMobileDevice;