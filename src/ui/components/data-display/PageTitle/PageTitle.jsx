"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PageTitle_style_1 = require("ui/components/data-display/PageTitle/PageTitle.style");
const PageTitle = (props) => {
    return (<PageTitle_style_1.PageTitleContainer>
      <PageTitle_style_1.PageTitleStyled>
        {props.title}
      </PageTitle_style_1.PageTitleStyled>
      {props.subtitle}
    </PageTitle_style_1.PageTitleContainer>);
};
exports.default = PageTitle;
