"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWrapRequest = void 0;
const mobx_1 = require("mobx");
const pkg = require("react-wrap-request");
const originalReactWrapRequest = pkg.useWrapRequest;
function buildNewWrapRequest(overrides, ...args) {
    const res = originalReactWrapRequest(...args);
    if (overrides) {
        (0, mobx_1.makeAutoObservable)(res, overrides);
    }
    return res;
}
function newUseWrapRequest(...args) {
    return buildNewWrapRequest(undefined, ...args);
}
exports.useWrapRequest = newUseWrapRequest;
function withObservableOverrides(overrides) {
    return (...args) => {
        return buildNewWrapRequest(overrides, ...args);
    };
}
newUseWrapRequest.withObservableOverrides = withObservableOverrides;
pkg.useWrapRequest = newUseWrapRequest;
//# sourceMappingURL=index.js.map