"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SafeEnvironment_style_1 = require("./SafeEnvironment.style");
const core_1 = require("@material-ui/core");
const SafeEnvironment = () => {
    return ((0, jsx_runtime_1.jsx)(SafeEnvironment_style_1.SafeEnvironmentContainer, { children: (0, jsx_runtime_1.jsxs)(core_1.Container, { children: ["Ambiente Seguro ", (0, jsx_runtime_1.jsx)("i", { className: "twf-lock" })] }) }));
};
exports.default = SafeEnvironment;
