"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@styles/globals.css");
const core_1 = require("@material-ui/core");
const theme_1 = __importDefault(require("ui/themes/theme"));
const head_1 = __importDefault(require("next/head"));
const Header_1 = __importDefault(require("ui/components/surfaces/Header/Header"));
const Footer_1 = __importDefault(require("ui/components/surfaces/Footer/Footer"));
const _app_style_1 = require("@styles/pages/_app.style");
function MyApp({ Component, pageProps }) {
    return (<>
      <head_1.default>
        <title>e-diaristas</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

        <link href="/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet"/>
      </head_1.default>
      <core_1.ThemeProvider theme={theme_1.default}>
        <_app_style_1.AppContainer>
          <Header_1.default />
          <Component {...pageProps}/>
          <Footer_1.default />
        </_app_style_1.AppContainer>
      </core_1.ThemeProvider>
    </>);
}
exports.default = MyApp;
