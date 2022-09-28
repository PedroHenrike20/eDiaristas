"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfissionaisContainer = exports.ProfissionaisPaper = exports.FormElementsContainer = void 0;
const styles_1 = require("@material-ui/core/styles");
const core_1 = require("@material-ui/core");
exports.FormElementsContainer = (0, styles_1.experimentalStyled)("div") `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;
exports.ProfissionaisPaper = (0, styles_1.experimentalStyled)(core_1.Paper) `
  padding: ${({ theme }) => theme.spacing(7)};
  margin: 0 auto ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }
`;
exports.ProfissionaisContainer = (0, styles_1.experimentalStyled)("div") `
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: ${({ theme }) => theme.spacing(-2)};
    margin-right: ${({ theme }) => theme.spacing(-2)};
    > :nth-of-type(odd) {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;
