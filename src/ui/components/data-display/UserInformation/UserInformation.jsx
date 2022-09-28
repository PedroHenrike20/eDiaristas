"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UserInformation_style_1 = require("./UserInformation.style");
const UserInformation = (props) => {
    return (<UserInformation_style_1.UserInformationContainer>
      <UserInformation_style_1.AvatarStyled src={props.picture}>{props.name[0]}</UserInformation_style_1.AvatarStyled>
      <UserInformation_style_1.UserName>{props.name}</UserInformation_style_1.UserName>
      <UserInformation_style_1.RatingStyled readOnly value={props.rating}/>
      <UserInformation_style_1.UserDescription>{props.description}</UserInformation_style_1.UserDescription>
    </UserInformation_style_1.UserInformationContainer>);
};
exports.default = UserInformation;
