export interface IMobileState {
    isMobileWidth: boolean;
    isMobileDevice: boolean;
    deviceWidth: number;
    mobileDevice: string;
}

export const initialMobileState: IMobileState = {
    isMobileWidth: false,
    isMobileDevice: false,
    deviceWidth: 0,
    mobileDevice: ''
}