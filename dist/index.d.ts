import { AnnotationsMap } from 'mobx';
import { WrapRequest } from 'wrap-request';
declare type ToupleArray = ReadonlyArray<any> | readonly [any];
declare type NoInfer<T> = [T][T extends any ? 0 : never];
export declare const useWrapRequest: {
    <T, Y extends ToupleArray>(req: (...deps: Y) => Promise<T>, options?: import("react-wrap-request").ReactWrapRequestOptions<Y, T> | undefined): WrapRequest<T, Y[0], T, any>;
    withObservableOverrides<T_1, Y_1 extends ToupleArray>(overrides: AnnotationsMap<WrapRequest, NoInfer<PropertyKey>>): (req: (...deps: Y_1) => Promise<T_1>, options?: import("react-wrap-request").ReactWrapRequestOptions<Y_1, T_1> | undefined) => WrapRequest<T_1, Y_1[0], T_1, any>;
};
export {};
