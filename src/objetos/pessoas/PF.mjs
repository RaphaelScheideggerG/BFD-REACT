import Pessoa from "./Pessoa.mjs";
import Titulo from "./Titulo.mjs";

export default class PF extends Pessoa {
  #cpf;
  #titulo;
  #dataNascimento;

  setCPF(cpf) {
    if (cpf) {
      this.#cpf = cpf;
      return true;
    }
    return false;
  }

  getCPF() {
    return this.#cpf;
  }

  setTitulo(titulo) {
    if (titulo instanceof Titulo) {
      this.#titulo = titulo;
      titulo.setPF(this);
      return true;
    }
    return false;
  }

  getTitulo() {
    return this.#titulo;
  }

  setDataNascimento(data) {
    if (data) {
      this.#dataNascimento = data;
      return true;
    }
    return false;
  }

  getDataNascimento() {
    return this.#dataNascimento;
  }
}
