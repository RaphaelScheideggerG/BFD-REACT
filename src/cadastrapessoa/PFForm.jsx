import React from "react";
import { Form, Input, Button, Radio, DatePicker, Row, Col, message } from "antd";
import EnderecoForm from "./EnderecoForm";
import TelefoneList from "./TelefoneList";
import "./Pessoaform.css"

export default function PFForm() {
    
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
                    <h2>Cadastro de Pessoa Física</h2>

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

                    {/* Exclusivo PF */}

                    <Form.Item
                    label="CPF"
                    name="cpf"
                    rules={[{ required: true, message: "Informe o CPF!" }]}
                    >
                    <Input placeholder="Somente números" maxLength={11} />
                    </Form.Item>

                    <Form.Item label="Data de Nascimento" name="dataNascimento">
                    <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item label="Título Eleitoral - Número" name={["titulo", "numero"]}>
                    <Input placeholder="Número do título" />
                    </Form.Item>
                    <Form.Item label="Zona" name={["titulo", "zona"]}>
                    <Input placeholder="Zona eleitoral" />
                    </Form.Item>
                    <Form.Item label="Seção" name={["titulo", "secao"]}>
                    <Input placeholder="Seção eleitoral" />
                    </Form.Item>
                </div>
            </div>
        </div>
        </>
    )
}