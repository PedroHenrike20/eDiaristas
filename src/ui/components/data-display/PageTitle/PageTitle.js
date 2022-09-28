"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const PageTitle_style_1 = require("ui/components/data-display/PageTitle/PageTitle.style");
const PageTitle = (props) => {
    return ((0, jsx_runtime_1.jsxs)(PageTitle_style_1.PageTitleContainer, { children: [(0, jsx_runtime_1.jsx)(PageTitle_style_1.PageTitleStyled, { children: props.title }), props.subtitle] }));
};
exports.default = PageTitle;
