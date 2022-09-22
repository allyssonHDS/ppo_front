export interface RequestCreat {
    nome: string;
    nomeUsuario: string;
    email: string;
    senha: string;
}
export interface ResponseCreate {
    id: string;
    nome: string;
    nomeUsuario: string;
    email: string;
    papel: string;
    dataHoraRegistro: Date;
}