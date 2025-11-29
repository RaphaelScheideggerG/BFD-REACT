import PF from "../pessoas/PF.mjs";

export default class PFDAO {
  constructor(id = null) {
    this.baseUrl = "https://backend-pessoas.vercel.app/pf";
    this.cache = [];

    if (id) {
      this.cache = [];
      this.buscarPorId(id).then((pessoa) => {
        if (pessoa) this.cache = [pessoa];
      });
    } else {
      this.carregarLista();
    }
  }

  // 🔹 Busca remota e atualiza o cache
  async carregarLista() {
    try {
      const resp = await fetch(this.baseUrl);
      if (!resp.ok) throw new Error("Erro ao listar PFs");

      const data = await resp.json();
      this.cache = data.map((pf) => this.mapPF(pf));
    } catch (e) {
      console.error("Erro ao carregar lista PF:", e);
      this.cache = [];
    }
  }

  // 🔹 Retorna cache atual (assíncrono)
  async listar() {
    if (!this.cache || this.cache.length === 0) {
      await this.carregarLista();
    }
    return this.cache;
  }

  async salvar(pf) {
    try {
      const obj = this.toPlain(pf);
      delete obj.id;

      const resp = await fetch(this.baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      if (!resp.ok) throw new Error("Erro ao salvar PF");

      const data = await resp.json();
      const novo = this.mapPF(data);
      this.cache.push(novo);
      return novo;
    } catch (e) {
      console.error("Erro ao salvar PF:", e);
      return null;
    }
  }

  async atualizar(id, novoPF) {
    try {
      const obj = this.toPlain(novoPF);
      delete obj.id;

      const resp = await fetch(`${this.baseUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      if (!resp.ok) throw new Error("Erro ao atualizar PF");

      const data = await resp.json();
      const atualizado = this.mapPF(data);

      const idx = this.cache.findIndex((p) => p.id === id);
      if (idx >= 0) this.cache[idx] = atualizado;
      else this.cache.push(atualizado);

      return atualizado;
    } catch (e) {
      console.error("Erro ao atualizar PF:", e);
      return null;
    }
  }

  async excluir(id) {
    try {
      const resp = await fetch(`${this.baseUrl}/${id}`, { method: "DELETE" });
      if (!resp.ok) throw new Error("Erro ao excluir PF");
      this.cache = this.cache.filter((p) => p.id !== id);
    } catch (e) {
      console.error("Erro ao excluir PF:", e);
    }
  }

  // 🔹 Mapeia dados do backend → formato do front
  mapPF(pf) {
    return {
      id: pf._id,
      nome: pf.nome,
      email: pf.email,
      cpf: pf.cpf,
      dataNascimento: pf.data, // 👈 campo herdado de PessoaBase
      endereco: pf.endereco
        ? {
            cep: pf.endereco.cep,
            logradouro: pf.endereco.logradouro,
            bairro: pf.endereco.bairro,
            cidade: pf.endereco.cidade,
            uf: pf.endereco.uf,
            regiao: pf.endereco.regiao,
          }
        : {},
      telefones: (pf.telefones || []).map((t) => ({
        ddd: t.ddd,
        numero: t.numero,
      })),
      titulo: pf.titulo
        ? {
            numero: pf.titulo.numero,
            zona: pf.titulo.zona,
            secao: pf.titulo.secao,
          }
        : {},
    };
  }

  // 🔹 Converte objeto PF (classe) → formato JSON esperado pelo backend
  toPlain(pf) {
    if (!pf) return {};
    const end = pf.getEndereco?.();
    const titulo = pf.getTitulo?.();
    const telefones = pf.getTelefones?.() || [];

    return {
      nome: pf.getNome?.(),
      email: pf.getEmail?.(),
      cpf: pf.getCPF?.(),
      data: pf.getDataNascimento?.(),
      endereco: end
        ? {
            cep: end.getCep?.(),
            logradouro: end.getLogradouro?.(),
            bairro: end.getBairro?.(),
            cidade: end.getCidade?.(),
            uf: end.getUf?.(),
            regiao: end.getRegiao?.(),
          }
        : {},
      telefones: telefones.map((t) => ({
        ddd: t.getDdd?.(),
        numero: t.getNumero?.(),
      })),
      titulo: titulo
        ? {
            numero: titulo.getNumero?.(),
            zona: titulo.getZona?.(),
            secao: titulo.getSecao?.(),
          }
        : {},
    };
  }

  // 🔹 Busca uma PF específica por ID
  async buscarPorId(id) {
    const existente = this.cache.find((p) => p.id === id);
    if (existente) return existente;

    try {
      const resp = await fetch(`${this.baseUrl}/${id}`);
      if (!resp.ok) throw new Error("Erro ao buscar PF por ID");
      const data = await resp.json();
      const pessoa = this.mapPF(data);

      this.cache.push(pessoa);
      return pessoa;
    } catch (e) {
      console.error("Erro ao buscar PF por ID:", e);
      return null;
    }
  }
}
