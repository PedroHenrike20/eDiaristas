"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderLogo = exports.HeaderAppBar = void 0;
const styles_1 = require("@material-ui/core/styles");
const core_1 = require("@material-ui/core");
exports.HeaderAppBar = (0, styles_1.experimentalStyled)(core_1.AppBar) `
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 100px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;
exports.HeaderLogo = (0, styles_1.experimentalStyled)("img") `
  height: 25px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 47px;
  }
`;
