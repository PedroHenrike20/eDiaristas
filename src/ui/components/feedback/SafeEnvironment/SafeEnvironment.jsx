"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SafeEnvironment_style_1 = require("./SafeEnvironment.style");
const core_1 = require("@material-ui/core");
const SafeEnvironment = () => {
    return (<SafeEnvironment_style_1.SafeEnvironmentContainer>
      <core_1.Container>
        Ambiente Seguro <i className={"twf-lock"}/>
      </core_1.Container>
    </SafeEnvironment_style_1.SafeEnvironmentContainer>);
};
exports.default = SafeEnvironment;
