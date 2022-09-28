"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TextField_1 = __importDefault(require("ui/components/inputs/TextField/TextField"));
const react_input_mask_1 = __importDefault(require("react-input-mask"));
const TextFieldMask = (_a) => {
    var { mask, value, onChange } = _a, props = __rest(_a, ["mask", "value", "onChange"]);
    return ((0, jsx_runtime_1.jsx)(react_input_mask_1.default, Object.assign({ value: value, onChange: onChange, mask: mask }, { children: () => {
            return (0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({}, props));
        } })));
};
exports.default = TextFieldMask;
