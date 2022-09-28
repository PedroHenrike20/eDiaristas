"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Footer_style_1 = require("./Footer.style");
const core_1 = require("@material-ui/core");
const Footer = () => {
    return ((0, jsx_runtime_1.jsx)(Footer_style_1.FooterStyled, { children: (0, jsx_runtime_1.jsxs)(Footer_style_1.FooterContainer, { children: [(0, jsx_runtime_1.jsxs)(core_1.Box, Object.assign({ sx: { maxWidth: "400px" } }, { children: [(0, jsx_runtime_1.jsx)(Footer_style_1.FooterTitle, { children: "Quem somos" }), (0, jsx_runtime_1.jsx)(core_1.Typography, Object.assign({ variant: "body2", sx: { mt: 2 } }, { children: "E-Diaristas te ajuda a encontrar um profissional perfeito para realizar a limpeza da sua casa. Garantimos a melhor profissional com total seguran\u00E7a e praticidade! S\u00E3o milhares de clientes satisfeitos por todo o pa\u00EDs." }))] })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Footer_style_1.FooterTitle, { children: "Baixe nossos aplicativos" }), (0, jsx_runtime_1.jsxs)(Footer_style_1.AppList, { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "/", target: "_blank", rel: "noopener noreferrer" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "/img/logos/app-store.png", alt: "AppStore" }) })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "/", target: "_blank", rel: "noopener noreferrer" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "/img/logos/google-play.png", alt: "Google Play" }) })) })] })] })] }) }));
};
exports.default = Footer;
