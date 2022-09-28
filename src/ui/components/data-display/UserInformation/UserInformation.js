"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const UserInformation_style_1 = require("./UserInformation.style");
const UserInformation = (props) => {
    return ((0, jsx_runtime_1.jsxs)(UserInformation_style_1.UserInformationContainer, { children: [(0, jsx_runtime_1.jsx)(UserInformation_style_1.AvatarStyled, Object.assign({ src: props.picture }, { children: props.name[0] })), (0, jsx_runtime_1.jsx)(UserInformation_style_1.UserName, { children: props.name }), (0, jsx_runtime_1.jsx)(UserInformation_style_1.RatingStyled, { readOnly: true, value: props.rating }), (0, jsx_runtime_1.jsx)(UserInformation_style_1.UserDescription, { children: props.description })] }));
};
exports.default = UserInformation;
