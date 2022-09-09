import { AnnotationsMap } from 'mobx';
import * as pkg from 'react-wrap-request';
import { WrapRequest } from 'wrap-request';
declare type NoInfer<T> = [T][T extends any ? 0 : never];
declare type ReactWrapRequestParams = Parameters<typeof pkg.useWrapRequest>;
declare function buildNewWrapRequest(overrides: AnnotationsMap<WrapRequest, NoInfer<PropertyKey>> | undefined, ...args: ReactWrapRequestParams): WrapRequest<unknown, any, unknown, any>;
declare function newUseWrapRequest(...args: ReactWrapRequestParams): ReturnType<typeof buildNewWrapRequest>;
declare namespace newUseWrapRequest {
    var withObservableOverrides: (overrides: AnnotationsMap<WrapRequest<any, any, any, any>, PropertyKey>) => (req: (...deps: readonly any[] | readonly [any]) => Promise<unknown>, options?: pkg.ReactWrapRequestOptions<readonly any[] | readonly [any], unknown> | undefined) => WrapRequest<unknown, any, unknown, any>;
}
export { newUseWrapRequest as useWrapRequest };
