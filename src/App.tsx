import React from "react";
import Styles from "./Components/Styles";
import { useFormik } from "formik";
import * as yup from "yup";
import "./App.css";

function App() {
  const schema = yup.object().shape({
    nome: yup.string().required("O campo nome é obrigatório."),
    idade: yup
      .number()
      .required("O campo idade é obrigatório.")
      .min(0, "Passe uma idade maior que 0."),
    cpf: yup
      .string()
      .required("O campo CPF é obrigatório.")
      .matches(
        /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2})$/,
        "Informe um CPF válido."
      ),
    cnpj: yup
      .string()
      .required("O campo CNPJ é obrigatório.")
      .matches(
        /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2})$/,
        "Informe um CNPJ válido."
      ),
    genero: yup.string().required("O campo gênero é obrigatório."),
    email: yup
      .string()
      .email("Informe um email válido")
      .required("O campo email é obrigatório."),
    senha: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres.")
      .required("O campo senha é obrigatório."),
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      idade: "",
      cpf: "",
      cnpj: "",
      genero: {
        masculino: "Masculino",
        feminimo: "Feminino",
        outro: "Outro",
      },
      email: "",
      senha: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Styles.SeguraFormulario>
        <Styles.Form onSubmit={formik.handleSubmit}>
          <Styles.Organizador>
            <Styles.Label>
              Nome
              <Styles.Input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.nome}
                type="string"
                name="nome"
              />
            </Styles.Label>
            <Styles.MessageError>
              {formik.errors.nome && formik.touched.nome && formik.errors.nome}
            </Styles.MessageError>
          </Styles.Organizador>
          <Styles.Organizador>
            <Styles.Label>
              Idade
              <Styles.Input
                onBlur={formik.handleBlur}
                type="number"
                value={formik.values.idade}
                onChange={formik.handleChange}
                name="idade"
              />
            </Styles.Label>
            <Styles.MessageError>
              {formik.errors.idade &&
                formik.touched.idade &&
                formik.errors.idade}
            </Styles.MessageError>
          </Styles.Organizador>
          <Styles.Organizador>
            <Styles.Label>
              CPF
              <Styles.Input
                onBlur={formik.handleBlur}
                type="text"
                value={formik.values.cpf}
                onChange={formik.handleChange}
                name="cpf"
              />
            </Styles.Label>
            <Styles.MessageError>
              {formik.errors.cpf && formik.touched.cpf && formik.errors.cpf}
            </Styles.MessageError>
          </Styles.Organizador>
          <Styles.Organizador>
            <Styles.Label>
              CNPJ
              <Styles.Input
                onBlur={formik.handleBlur}
                type="text"
                value={formik.values.cnpj}
                onChange={formik.handleChange}
                name="cnpj"
              />
            </Styles.Label>
            <Styles.MessageError>
              {formik.errors.cnpj && formik.touched.cnpj && formik.errors.cnpj}
            </Styles.MessageError>
          </Styles.Organizador>
          <Styles.Organizador>
            <Styles.OrganizaInputsRadios>
              <Styles.SeguraInputRadio>
                <Styles.Label direction="row" align="center">
                  Masculino
                  <Styles.InputRadio
                    onBlur={formik.handleBlur}
                    type="radio"
                    value={formik.values.genero.masculino}
                    onChange={formik.handleChange}
                    name="genero"
                  />
                </Styles.Label>
              </Styles.SeguraInputRadio>
              <Styles.SeguraInputRadio>
                <Styles.Label direction="row" align="center">
                  Feminino
                  <Styles.InputRadio
                    onBlur={formik.handleBlur}
                    type="radio"
                    value={formik.values.genero.feminimo}
                    onChange={formik.handleChange}
                    name="genero"
                  />
                </Styles.Label>
              </Styles.SeguraInputRadio>
              <Styles.SeguraInputRadio>
                <Styles.Label direction="row" align="center">
                  Outro
                  <Styles.InputRadio
                    onBlur={formik.handleBlur}
                    type="radio"
                    value={formik.values.genero.outro}
                    onChange={formik.handleChange}
                    name="genero"
                  />
                </Styles.Label>
              </Styles.SeguraInputRadio>
              <Styles.SeguraInputRadio></Styles.SeguraInputRadio>
            </Styles.OrganizaInputsRadios>

            <Styles.MessageError>
              {formik.errors.genero &&
                formik.touched.genero &&
                formik.errors.genero}
            </Styles.MessageError>
          </Styles.Organizador>
          <Styles.Organizador>
            <Styles.Label>
              Email
              <Styles.Input
                onBlur={formik.handleBlur}
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
              />
            </Styles.Label>
            <Styles.MessageError>
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
            </Styles.MessageError>
          </Styles.Organizador>{" "}
          <Styles.Organizador>
            <Styles.Label>
              Senha
              <Styles.Input
                onBlur={formik.handleBlur}
                type="password"
                value={formik.values.senha}
                onChange={formik.handleChange}
                name="senha"
              />
            </Styles.Label>
            <Styles.MessageError>
              {formik.errors.senha &&
                formik.touched.senha &&
                formik.errors.senha}
            </Styles.MessageError>
          </Styles.Organizador>
          <Styles.Botao type="submit">Enviar</Styles.Botao>
        </Styles.Form>
      </Styles.SeguraFormulario>
    </>
  );
}

export default App;
