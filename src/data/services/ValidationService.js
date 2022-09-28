"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationService = void 0;
exports.ValidationService = {
    cep(cep = "") {
        return cep.replace(/\D/g, "").length === 8;
    },
};
