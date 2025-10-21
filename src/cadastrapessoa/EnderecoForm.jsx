import React, { useState, useEffect } from "react";
import { Form, Input, InputNumber, Row, Col, Select } from "antd";
import ConsultarEndereco from "./ConsultarEndereco.mjs";

const { Option } = Select;

export default function EnderecoForm() {
  const [CEP, setCEP] = useState("");
  const [endereco, setEndereco] = useState({});
  const [onlyNumb, setOnlyNumb] = useState(true);

  const [logradouro, setLogradouro] = useState("");
  const [logradouroPreenchidoAutomaticamente, setLogradouroPreenchidoAutomaticamente] = useState(false);

  const [bairro, setBairro] = useState("");
  const [bairroPreenchidoAutomaticamente, setBairroPreenchidoAutomaticamente] = useState(false);

  const [cidade, setCidade] = useState("");
  const [cidadePreenchidoAutomaticamente, setCidadePreenchidoAutomaticamente] = useState(false);

  const [uf, setUf] = useState("");
  const [ufPreenchidoAutomaticamente, setUfPreenchidoAutomaticamente] = useState(false);


  // Atualiza os campos quando o endereço muda, mas só se o usuário ainda não mexeu

/*
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
  }, [endereco]);
*/

useEffect(() => {
  if (!isNaN(Number(CEP))) {
    setOnlyNumb(true);
  } else {
    setOnlyNumb(false);
  }
}, [CEP]);


  // Solução atualizando estado já no HandleSearch
  const HandleSearch = async (cepDigitado) => {
    
    console.log("CEP, após rodar:", cepDigitado);
    const end = await ConsultarEndereco(cepDigitado);
    console.log("endereço definido:", end);
    
    setCEP(end.CEP);
    setLogradouro(end.logradouro);
    setBairro(end.bairro);
    setCidade(end.cidade);
    setUf(end.uf)
    
  };

  // Solução com form.setFieldsValue (hook do antd)
  // Em breve

  return (
    <>
      <Form.Item
        label="CEP"
        name={["endereco", "cep"]}
        rules={[{ required: true, message: "O CEP deve conter 8 digitos numéricos"}]}
      >
        <Input length={8}
          placeholder="00000000"
          maxLength={8}
          status=""
          value={CEP}
          onChange={(e) => {
            const novoCep = e.target.value;
            setCEP(novoCep);
            console.log("Digitando:", novoCep);

            if (novoCep.length === 8 && !isNaN(Number(novoCep))) {
              HandleSearch(novoCep);
              console.log("Buscando endereço na API")
              }
            if(isNaN(Number(novoCep))){
              console.log("Não é um número")
              e.target.status="error"
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
