"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const PageTitle_1 = __importDefault(require("ui/components/data-display/PageTitle/PageTitle"));
const UserInformation_1 = __importDefault(require("ui/components/data-display/UserInformation/UserInformation"));
const SafeEnvironment_1 = __importDefault(require("ui/components/feedback/SafeEnvironment/SafeEnvironment"));
const TextFieldMask_1 = __importDefault(require("ui/components/inputs/TextFieldMask/TextFieldMask"));
const core_1 = require("@material-ui/core");
const index_style_1 = require("@styles/pages/index.style");
const useIndex_page_1 = __importDefault(require("data/hooks/pages/useIndex.page"));
function Home() {
    const { cep, setCep, cepValido, getProfissionais, erro, diaristas, buscaFeita, carregando, diaristasRestantes, } = (0, useIndex_page_1.default)();
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(SafeEnvironment_1.default, {}), (0, jsx_runtime_1.jsx)(PageTitle_1.default, { title: "Conheça os profissionais", subtitle: "Preencha seu endereço e veja todos os profissionais da sua localidade" }), (0, jsx_runtime_1.jsxs)(core_1.Container, { children: [(0, jsx_runtime_1.jsxs)(index_style_1.FormElementsContainer, { children: [(0, jsx_runtime_1.jsx)(TextFieldMask_1.default, { variant: "outlined", mask: "99.999-999", label: "Digite seu CEP", fullWidth: true, value: cep, onChange: (e) => setCep(e.target.value) }), erro && (0, jsx_runtime_1.jsx)(core_1.Typography, Object.assign({ color: "error" }, { children: erro })), (0, jsx_runtime_1.jsxs)(core_1.Button, Object.assign({ disabled: !cepValido || carregando, onClick: () => getProfissionais(cep), variant: "contained", sx: { width: 220 }, color: "secondary" }, { children: [" ", carregando ? (0, jsx_runtime_1.jsx)(core_1.CircularProgress, { size: 20 }) : "Buscar"] }))] }), buscaFeita &&
                        (diaristas.length > 0 ? ((0, jsx_runtime_1.jsxs)(index_style_1.ProfissionaisPaper, { children: [(0, jsx_runtime_1.jsx)(index_style_1.ProfissionaisContainer, { children: diaristas.map((item, index) => {
                                        return ((0, jsx_runtime_1.jsx)(UserInformation_1.default, { name: item.nome_completo, rating: item.reputacao, description: item.cidade }, index));
                                    }) }), (0, jsx_runtime_1.jsxs)(core_1.Container, Object.assign({ sx: { textAlign: "center" } }, { children: [diaristasRestantes > 0 && ((0, jsx_runtime_1.jsxs)(core_1.Typography, Object.assign({ sx: { mt: 5 } }, { children: ["... e mais ", diaristasRestantes, " ", diaristasRestantes > 1
                                                    ? "profissionais atendem"
                                                    : "profissional atende", " ", "ao seu endere\u00E7o."] }))), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ variant: "contained", color: "secondary", sx: { mt: 5 } }, { children: "Contratar um profissional" }))] }))] })) : ((0, jsx_runtime_1.jsx)(core_1.Typography, Object.assign({ align: "center", color: "textPrimary" }, { children: "Ainda n\u00E3o temos nenhuma diarista dispon\u00EDvel em sua ragi\u00E3o!" }))))] })] }));
}
exports.default = Home;
