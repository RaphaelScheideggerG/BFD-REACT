import React from "react";
import { Form, Input, Button, Radio, DatePicker, Row, Col, message } from "antd";
import EnderecoForm from "./EnderecoForm";
import "./Pessoaform.css"
import TelefoneList from "./TelefoneList";

export default function PJForm() {
    
    return (
        <>
        <div
        style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f0f0f0',
        padding: '20px',
        }}
        >
            <div className="main-scroll">
                <div className="form-container">
                    <h2>Cadastro de Pessoa Jurídica</h2>

                    <Form.Item
                        label="Nome"
                        name="nome"
                        rules={[{ required: true, message: "Informe o nome!" }]}
                    >
                        <Input placeholder="Nome completo ou razão social" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                        { required: true, message: "Informe o e-mail!" },
                        { type: "email", message: "Formato de e-mail inválido!" },
                        ]}
                    >
                        <Input placeholder="exemplo@email.com" />
                    </Form.Item>

                    <EnderecoForm />
                        
                    <TelefoneList/>

                    <Form.Item
                      label="CNPJ"
                      name="cnpj"
                      rules={[{ required: true, message: "Informe o CNPJ!" }]}
                    >
                      <Input placeholder="00.000.000/0000-00" />
                    </Form.Item>
        
                    <Form.Item label="Inscrição Estadual" name={["ie", "numero"]}>
                        <Input placeholder="Número da IE" />
                    </Form.Item>

                    <Form.Item label="Estado" name={["ie", "estado"]}>
                        <Input placeholder="UF" maxLength={2} />
                    </Form.Item>

                    <Form.Item label="Data de Registro" name={["ie", "dataRegistro"]}>
                        <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
                    </Form.Item>
                </div>
            </div>
        </div>
        </>
    )
}