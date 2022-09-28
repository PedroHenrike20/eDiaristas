"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageSubtitleStyled = exports.PageTitleStyled = exports.PageTitleContainer = void 0;
const styles_1 = require("@material-ui/core/styles");
exports.PageTitleContainer = (0, styles_1.experimentalStyled)("div") `
  text-align: center;
  margin: ${({ theme }) => theme.spacing(5) + " " + 0};
`;
exports.PageTitleStyled = (0, styles_1.experimentalStyled)("h2") `
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;
exports.PageSubtitleStyled = (0, styles_1.experimentalStyled)("h3") `
  margin: ${({ theme }) => theme.spacing(1.5) + " " + "0"};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
