import { AnnotationsMap, makeAutoObservable } from 'mobx';
import * as pkg from 'react-wrap-request';
import { WrapRequest } from 'wrap-request';

const originalReactWrapRequest = pkg.useWrapRequest;

type NoInfer<T> = [T][T extends any ? 0 : never];
type ReactWrapRequestParams = Parameters<typeof pkg.useWrapRequest>;

function buildNewWrapRequest(
    overrides: AnnotationsMap<WrapRequest, NoInfer<PropertyKey>> | undefined,
    ...args: ReactWrapRequestParams
) {
    const res = originalReactWrapRequest(...args);

    if (overrides) {
        makeAutoObservable(res, overrides);
    }

    return res;
}

function newUseWrapRequest(
    ...args: ReactWrapRequestParams
): ReturnType<typeof buildNewWrapRequest> {
    return buildNewWrapRequest(undefined, ...args);
}

function withObservableOverrides(
    overrides: AnnotationsMap<WrapRequest, NoInfer<PropertyKey>>
) {
    return (...args: ReactWrapRequestParams) => {
        return buildNewWrapRequest(overrides, ...args);
    };
}

newUseWrapRequest.withObservableOverrides = withObservableOverrides;

(pkg as any).useWrapRequest = newUseWrapRequest;

export { newUseWrapRequest as useWrapRequest };
