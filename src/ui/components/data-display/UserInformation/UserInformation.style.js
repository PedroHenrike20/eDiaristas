"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingStyled = exports.AvatarStyled = exports.UserDescription = exports.UserName = exports.UserInformationContainer = void 0;
const styles_1 = require("@material-ui/core/styles");
const core_1 = require("@material-ui/core");
exports.UserInformationContainer = (0, styles_1.experimentalStyled)("div") `
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description";
  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
  align-items: center;
`;
exports.UserName = (0, styles_1.experimentalStyled)("div") `
  grid-area: name;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;
exports.UserDescription = (0, styles_1.experimentalStyled)("div") `
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;
exports.AvatarStyled = (0, styles_1.experimentalStyled)(core_1.Avatar) `
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;
exports.RatingStyled = (0, styles_1.experimentalStyled)(core_1.Rating) `
  grid-area: rating;
  font-size: 14px;
`;
