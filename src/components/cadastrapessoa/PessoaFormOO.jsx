import React, { useState } from "react";
import { Form, Input, Radio, Button, message } from "antd";

import EnderecoFormEX from "./EnderecoFormEX.jsx";
import TelefoneListOO from "./TelefoneListOO.jsx";
import PFForm from "./PFForm.jsx";
import PJForm from "./PJForm.jsx";

import PF from "../../objetos/modelos/PF.mjs";
import PJ from "../../objetos/modelos/PJ.mjs";
import Endereco from "../../objetos/modelos/Endereco.mjs";
import Telefone from "../../objetos/modelos/Telefone.mjs";
import PFDAO from "../../objetos/dao/PFDAOLocal.mjs";
import PJDAO from "../../objetos/dao/PJDAOLocal.mjs";

const [form] = Form.useForm();
const [tipo, setTipo] = useState("PF");

const onChangeTipo = (e) => setTipo(e.target.value);
const onFinish = (values) => {
  try {
    // Construção do endereço
    const end = new Endereco();
    end.setCep(values.endereco?.cep);
    end.setLogradouro(values.endereco?.logradouro);
    end.setBairro(values.endereco?.bairro);
    end.setCidade(values.endereco?.cidade);
    end.setUf(values.endereco?.uf);
    end.setRegiao(values.endereco?.regiao);

    let pessoa;

    // Instancia PF ou PJ conforme o tipo selecionado
    if (values.tipo === "PF") {
      pessoa = new PF();
      pessoa.setCpf(values.cpf);
      pessoa.setTitulo(values.titulo);
    } else {
      pessoa = new PJ();
      pessoa.setCNPJ(values.cnpj);
      pessoa.setIE(values.ie);
    }

    // Atributos comuns
    pessoa.setNome(values.nome);
    pessoa.setEmail(values.email);
    pessoa.setEndereco(end);

    // Telefones
    if (values.telefones) {
      values.telefones.forEach((t) => {
        const fone = new Telefone();
        fone.setDdd(t.ddd);
        fone.setNumero(t.numero);
        pessoa.addTelefone(fone);
      });
    }

    // Persistência
    const dao = values.tipo === "PF" ? new PFDAO() : new PJDAO();
    dao.salvar(pessoa);

    message.success("Pessoa cadastrada com sucesso!");
    form.resetFields();
  } catch (e) {
    message.error("Erro ao salvar: " + e.message);
  }
};
// Formulário //
<Form layout="vertical" onFinish={onFinish} form={form}>
  <Form.Item label="Tipo de Pessoa" name="tipo" initialValue="PF">
    <Radio.Group onChange={onChangeTipo}>
      <Radio value="PF">Pessoa Física</Radio>
      <Radio value="PJ">Pessoa Jurídica</Radio>
    </Radio.Group>
  </Form.Item>

  <Form.Item label="Nome" name="nome" rules={[{ required: true, message: "Informe o nome!" }]}>
    <Input placeholder="Nome completo ou razão social" />
  </Form.Item>

  <Form.Item label="Email" name="email"
    rules={[{ required: true, message: "Informe o e-mail!" }, { type: "email", message: "E-mail inválido!" }]}>
    <Input placeholder="exemplo@email.com" />
  </Form.Item>

  <EnderecoFormEX form={form} />
  <TelefoneListOO form={form} />

  {tipo === "PF" ? <PFForm /> : <PJForm />}

  <Form.Item>
    <Button type="primary" htmlType="submit" block>Salvar</Button>
  </Form.Item>
</Form>
