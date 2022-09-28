"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Header_style_1 = require("./Header.style");
const core_1 = require("@material-ui/core");
const Header = () => {
    return ((0, jsx_runtime_1.jsx)(Header_style_1.HeaderAppBar, Object.assign({ position: "sticky" }, { children: (0, jsx_runtime_1.jsx)(core_1.Toolbar, Object.assign({ component: core_1.Container }, { children: (0, jsx_runtime_1.jsx)(Header_style_1.HeaderLogo, { src: "/img/logos/logo.svg", alt: "e-diaristas" }) })) })));
};
exports.default = Header;
