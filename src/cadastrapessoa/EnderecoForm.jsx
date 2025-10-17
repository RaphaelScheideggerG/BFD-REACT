import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Select } from "antd";
import ConsultarEndereco from "./ConsultarEndereco.mjs";

const { Option } = Select;

export default function EnderecoForm() {
  const [CEP, setCEP] = useState("");
  const [endereco, setEndereco] = useState({});

  const [logradouro, setLogradouro] = useState("");
  const [logradouroPreenchidoAutomaticamente, setLogradouroPreenchidoAutomaticamente] = useState(false);

  const [bairro, setBairro] = useState("");
  const [bairroPreenchidoAutomaticamente, setBairroPreenchidoAutomaticamente] = useState(false);

  const [cidade, setCidade] = useState("");
  const [cidadePreenchidoAutomaticamente, setCidadePreenchidoAutomaticamente] = useState(false);

  const [uf, setUf] = useState("");
  const [ufPreenchidoAutomaticamente, setUfPreenchidoAutomaticamente] = useState(false);

  
  /*
  // Atualiza os campos quando o endereço muda, mas só se o usuário ainda não mexeu
  useEffect(() => {
    if (endereco && endereco.logradouro) {
      if (!logradouroPreenchidoAutomaticamente) setLogradouro(endereco.logradouro || "");
      if (!bairroPreenchidoAutomaticamente) setBairro(endereco.bairro || "");
      if (!cidadePreenchidoAutomaticamente) setCidade(endereco.cidade || "");
      if (!ufPreenchidoAutomaticamente) setUf(endereco.uf || "");

      console.log("Campos atualizados via useEffect:",
        "\nENDEREÇO:", endereco,
        "\nLOGRADOURO:", endereco.logradouro,
        "\nBAIRRO:", endereco.bairro,
        "\nCIDADE:", endereco.cidade,
        "\nUF:", endereco.uf
      );
    }
  }, [endereco]); // Diz para o useEffect rodar sempre que endereco alterar
*/

  // Solução atualizando estado já no HandleSearch
  const HandleSearch = async (cepDigitado) => {
    const end = await ConsultarEndereco(cepDigitado);

    if (end) {
      if (!logradouroPreenchidoAutomaticamente) setLogradouro(end.logradouro || "");
      if (!bairroPreenchidoAutomaticamente) setBairro(end.bairro || "");
      if (!cidadePreenchidoAutomaticamente) setCidade(end.cidade || "");
      if (!ufPreenchidoAutomaticamente) setUf(end.uf || "");
    }

    setEndereco(end); // Chama no final pra evitar o Batching
    console.log("endereço:", end)
  };

  // Solução com form.setFieldsValue (hook do antd)
  // Em breve

  return (
    <>
      <Form.Item
        label="CEP"
        name={["endereco", "cep"]}
        rules={[{ required: true, message: "Informe o CEP!" }]}
      >
        <Input
          placeholder="00000-000"
          maxLength={9}
          value={CEP}
          onChange={(e) => {
            const novoCep = e.target.value;
            setCEP(novoCep);
            console.log("Digitando:", novoCep);
            if (novoCep.length === 9) {
              HandleSearch(novoCep);
            }
          }}
        />
      </Form.Item>

      <Form.Item label="Logradouro">
        <Input
          placeholder="Rua / Avenida"
          value={logradouro}
          onChange={(e) => {
            setLogradouro(e.target.value);
            setLogradouroPreenchidoAutomaticamente(true);
          }}
        />
      </Form.Item>

      <Form.Item label="Bairro">
        <Input
          placeholder="Bairro"
          value={bairro}
          onChange={(e) => {
            setBairro(e.target.value);
            setBairroPreenchidoAutomaticamente(true);
          }}
        />
      </Form.Item>

      <Row gutter={8}>
        <Col span={12}>
          <Form.Item label="Cidade">
            <Input
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => {
                setCidade(e.target.value);
                setCidadePreenchidoAutomaticamente(true);
              }}
            />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="UF">
            <Input
              placeholder="UF"
              maxLength={2}
              value={uf}
              onChange={(e) => {
                setUf(e.target.value);
                setUfPreenchidoAutomaticamente(true);
              }}
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
