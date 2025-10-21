import React, { useState } from "react";
import { Form, Input, Row, Col, Select } from "antd";
import ConsultarEndereco from "./ConsultarEndereco.mjs";

const { Option } = Select;

export default function EnderecoForm() {
  const [CEP, setCEP] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [cepError, setCepError] = useState(false);

  const HandleSearch = async (cepDigitado) => {
    const end = await ConsultarEndereco(cepDigitado);
    setLogradouro(end.logradouro || "");
    setBairro(end.bairro || "");
    setCidade(end.localidade || end.cidade || "");
    setUf(end.uf || "");
  };

  return (
    <>
      <Form.Item
        label="CEP"
        name={["endereco", "cep"]}
        rules={[{ required: true, message: "O CEP deve conter 8 dígitos numéricos" }]}
        validateStatus={cepError ? "error" : ""}
        help={cepError ? "Digite apenas números (8 dígitos)" : ""}
      >
        <Input
          placeholder="00000000"
          maxLength={8}
          value={CEP}
          onChange={(e) => {
            const novoCep = e.target.value;
            setCEP(novoCep);
            // atribuindo como "novoCep" apara evitar o atraso de uma re-renderização
            if (novoCep.length === 8 && !isNaN(Number(novoCep))) {
              setCepError(false);
              HandleSearch(novoCep);
            } else if (isNaN(Number(novoCep))) {
              setCepError(true);
            } else {
              setCepError(false);
            }
          }}
        />
      </Form.Item>

      <Form.Item label="Logradouro">
        <Input
          placeholder="Rua / Avenida"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Bairro">
        <Input
          placeholder="Bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
      </Form.Item>

      <Row gutter={8}>
        <Col span={12}>
          <Form.Item label="Cidade">
            <Input
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="UF">
            <Input
              placeholder="UF"
              maxLength={2}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Região" name={["endereco", "regiao"]}>
            <Select placeholder="Selecione">
              <Option value="Norte">Norte</Option>
              <Option value="Nordeste">Nordeste</Option>
              <Option value="Centro-Oeste">Centro-Oeste</Option>
              <Option value="Sudeste">Sudeste</Option>
              <Option value="Sul">Sul</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}