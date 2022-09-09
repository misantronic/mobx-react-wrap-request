"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWrapRequest = void 0;
const mobx_1 = require("mobx");
const react_wrap_request_1 = require("react-wrap-request");
const useWrapRequest = (...args) => {
    return (0, react_wrap_request_1.useWrapRequest)(...args);
};
exports.useWrapRequest = useWrapRequest;
exports.useWrapRequest.withObservableOverrides = (overrides) => {
    return (...args) => {
        const res = (0, react_wrap_request_1.useWrapRequest)(...args);
        if (overrides) {
            (0, mobx_1.makeAutoObservable)(res, overrides);
        }
        return res;
    };
};
//# sourceMappingURL=index.js.map