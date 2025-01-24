
enum Funcao {
    "Dono da Loja" = 1,
    "Gerente da Loja" = 2,
}

const qualFuncao = (param: number): Funcao | string => {
    switch (param) {
        case 1:
            return Funcao["Dono da Loja"]
            break;
        case 2:
            return Funcao["Gerente da Loja"];
            break;
        default:
            return "Funcionario.";
            break;
        }
}
