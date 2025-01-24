"use strict";
var Funcao;
(function (Funcao) {
    Funcao[Funcao["Dono da Loja"] = 1] = "Dono da Loja";
    Funcao[Funcao["Gerente da Loja"] = 2] = "Gerente da Loja";
})(Funcao || (Funcao = {}));
const qualFuncao = (param) => {
    switch (param) {
        case 1:
            return Funcao["Dono da Loja"];
            break;
        case 2:
            return Funcao["Gerente da Loja"];
            break;
        default:
            return "Funcionario.";
            break;
    }
};
