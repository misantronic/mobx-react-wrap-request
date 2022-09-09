"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWrapRequest = void 0;
const react_wrap_request_1 = require("react-wrap-request");
const mobx_wrap_request_1 = require("mobx-wrap-request");
const useWrapRequest = (...args) => {
    return (0, react_wrap_request_1.useWrapRequest)(...args);
};
exports.useWrapRequest = useWrapRequest;
exports.useWrapRequest.withObservableOverrides = (overrides) => {
    const wrapRequestFn = mobx_wrap_request_1.wrapRequest.withObservableOverrides(overrides);
    return (...args) => {
        const [req, options] = args;
        if (options) {
            options.wrapRequestFn = wrapRequestFn;
        }
        return (0, react_wrap_request_1.useWrapRequest)(req, options);
    };
};
//# sourceMappingURL=index.js.map