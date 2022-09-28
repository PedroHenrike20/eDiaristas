"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFieldStyled = void 0;
const styles_1 = require("@material-ui/core/styles");
const core_1 = require("@material-ui/core");
exports.TextFieldStyled = (0, styles_1.experimentalStyled)(core_1.TextField) `
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
