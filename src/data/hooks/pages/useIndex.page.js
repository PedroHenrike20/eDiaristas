"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ValidationService_1 = require("data/services/ValidationService");
const apiServices_1 = require("data/services/apiServices");
function useIndex() {
    const [cep, setCep] = (0, react_1.useState)("");
    const cepValido = (0, react_1.useMemo)(() => {
        return ValidationService_1.ValidationService.cep(cep);
    }, [cep]);
    const [erro, setErro] = (0, react_1.useState)("");
    const [buscaFeita, setBuscaFeita] = (0, react_1.useState)(false);
    const [carregando, setCarregando] = (0, react_1.useState)(false);
    const [diaristas, setDiaristas] = (0, react_1.useState)([]);
    const [diaristasRestantes, setDiariastasRestantes] = (0, react_1.useState)(0);
    function getProfissionais(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            setBuscaFeita(false);
            setCarregando(true);
            setErro("");
            try {
                const { data } = yield apiServices_1.ApiService.get("/api/diaristas-cidade?cep=" + cep.replace("/D/g", ""));
                setDiaristas(data.diaristas);
                setDiariastasRestantes(data.quantidade_diaristas);
                setBuscaFeita(true);
                setCarregando(false);
            }
            catch (error) {
                setErro("CEP não encontrado!");
                setCarregando(false);
            }
        });
    }
    return {
        cep,
        setCep,
        cepValido,
        getProfissionais,
        erro,
        diaristas,
        buscaFeita,
        carregando,
        diaristasRestantes,
    };
}
exports.default = useIndex;
