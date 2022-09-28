"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppList = exports.FooterTitle = exports.FooterContainer = exports.FooterStyled = void 0;
const styles_1 = require("@material-ui/core/styles");
const core_1 = require("@material-ui/core");
exports.FooterStyled = (0, styles_1.experimentalStyled)("footer") `
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  margin-top: auto;
`;
exports.FooterContainer = (0, styles_1.experimentalStyled)(core_1.Container) `
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;
exports.FooterTitle = (0, styles_1.experimentalStyled)((props) => (<core_1.Typography component={"h2"} variant={"body2"} {...props}/>)) `
  font-weight: bold;
`;
exports.AppList = (0, styles_1.experimentalStyled)("ul") `
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: ${({ theme }) => theme.spacing()};

  img {
    width: 122px;
  }
`;
