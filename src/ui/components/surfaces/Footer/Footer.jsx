"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Footer_style_1 = require("./Footer.style");
const core_1 = require("@material-ui/core");
const Footer = () => {
    return (<Footer_style_1.FooterStyled>
      <Footer_style_1.FooterContainer>
        <core_1.Box sx={{ maxWidth: "400px" }}>
          <Footer_style_1.FooterTitle>Quem somos</Footer_style_1.FooterTitle>
          <core_1.Typography variant={"body2"} sx={{ mt: 2 }}>
            E-Diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos a melhor profissional com
            total segurança e praticidade! São milhares de clientes satisfeitos
            por todo o país.
          </core_1.Typography>
        </core_1.Box>

        <div>
          <Footer_style_1.FooterTitle>Baixe nossos aplicativos</Footer_style_1.FooterTitle>
          <Footer_style_1.AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"AppStore"}/>
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Google Play"}/>
              </a>
            </li>
          </Footer_style_1.AppList>
        </div>
      </Footer_style_1.FooterContainer>
    </Footer_style_1.FooterStyled>);
};
exports.default = Footer;
