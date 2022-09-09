import { AnnotationsMap, makeAutoObservable } from 'mobx';
import { useWrapRequest as useFn } from 'react-wrap-request';
import { WrapRequest } from 'wrap-request';

type ToupleArray = ReadonlyArray<any> | readonly [any];

type ReactWrapRequestParams<T, Y extends ToupleArray> = Parameters<
    typeof useFn<T, Y>
>;
type NoInfer<T> = [T][T extends any ? 0 : never];

export const useWrapRequest = <T, Y extends ToupleArray>(
    ...args: ReactWrapRequestParams<T, Y>
) => {
    return useFn<T, Y>(...args);
};

useWrapRequest.withObservableOverrides = <T, Y extends ToupleArray>(
    overrides: AnnotationsMap<WrapRequest, NoInfer<PropertyKey>>
) => {
    return (...args: ReactWrapRequestParams<T, Y>) => {
        const res = useFn(...args);

        if (overrides) {
            makeAutoObservable(res, overrides);
        }

        return res;
    };
};
