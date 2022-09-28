"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeEnvironmentContainer = void 0;
const styles_1 = require("@material-ui/core/styles");
exports.SafeEnvironmentContainer = (0, styles_1.experimentalStyled)("div") `
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2) + " " + 0};
  font-size: 12px;
`;
