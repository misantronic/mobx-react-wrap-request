import { AnnotationsMap } from 'mobx';
import { useWrapRequest as useWrapRequestFn } from 'react-wrap-request';
import { WrapRequest } from 'wrap-request';
import { wrapRequest } from 'mobx-wrap-request';

type ToupleArray = ReadonlyArray<any> | readonly [any];

type ReactWrapRequestParams<T, Y extends ToupleArray> = Parameters<
    typeof useWrapRequestFn<T, Y>
>;
type NoInfer<T> = [T][T extends any ? 0 : never];

export const useWrapRequest = <T, Y extends ToupleArray>(
    ...args: ReactWrapRequestParams<T, Y>
) => {
    return useWrapRequestFn<T, Y>(...args);
};

useWrapRequest.withObservableOverrides = (
    overrides: AnnotationsMap<WrapRequest, NoInfer<PropertyKey>>
) => {
    const wrapRequestFn = wrapRequest.withObservableOverrides(overrides);

    return <T, Y extends ToupleArray>(
        ...args: ReactWrapRequestParams<T, Y>
    ) => {
        const [req, options] = args;

        if (options) {
            options.wrapRequestFn = wrapRequestFn;
        }

        return useWrapRequestFn<T, Y>(req, options);
    };
};
