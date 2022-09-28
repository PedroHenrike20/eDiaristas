"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("@styles/globals.css");
const core_1 = require("@material-ui/core");
const theme_1 = __importDefault(require("ui/themes/theme"));
const head_1 = __importDefault(require("next/head"));
const Header_1 = __importDefault(require("ui/components/surfaces/Header/Header"));
const Footer_1 = __importDefault(require("ui/components/surfaces/Footer/Footer"));
const _app_style_1 = require("@styles/pages/_app.style");
function MyApp({ Component, pageProps }) {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(head_1.default, { children: [(0, jsx_runtime_1.jsx)("title", { children: "e-diaristas" }), (0, jsx_runtime_1.jsx)("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }), (0, jsx_runtime_1.jsx)("link", { href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap", rel: "stylesheet" }), (0, jsx_runtime_1.jsx)("link", { href: "/fonts/tw-icons/css/treinaweb-icons.css", rel: "stylesheet" })] }), (0, jsx_runtime_1.jsx)(core_1.ThemeProvider, Object.assign({ theme: theme_1.default }, { children: (0, jsx_runtime_1.jsxs)(_app_style_1.AppContainer, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(Component, Object.assign({}, pageProps)), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }) }))] }));
}
exports.default = MyApp;
