"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_style_1 = require("./Header.style");
const core_1 = require("@material-ui/core");
const Header = () => {
    return (<Header_style_1.HeaderAppBar position={"sticky"}>
      <core_1.Toolbar component={core_1.Container}>
        <Header_style_1.HeaderLogo src={"/img/logos/logo.svg"} alt={"e-diaristas"}/>
      </core_1.Toolbar>
    </Header_style_1.HeaderAppBar>);
};
exports.default = Header;
