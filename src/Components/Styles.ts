import { InterfaceLabel } from "./Interface";
import styled from "styled-components";

const Form = styled.form`
  width: 30rem;
  height: auto;
  padding: 2rem;
  border: 1px solid #adb5bd;
  background-color: #fff;
  border-radius: 4px;
`;

const Input = styled.input`
  width: 95%;
  height: 1.5rem;
  border: 1px solid #adb5bd;
  padding: 0 2.5%;
`;

const InputRadio = styled.input`
  cursor: pointer;
`;

const Label = styled.label<InterfaceLabel>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  align-items: ${(props) => (props.align ? props.align : "")};
`;

const SeguraFormulario = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Organizador = styled.div`
  height: auto;
`;

const Botao = styled.button`
  padding: 0.4rem 0.8rem;
  border: 1px solid #adb5bd;
  cursor: pointer;
`;

const MessageError = styled.div`
  color: red;
  min-height: 20px;
  max-height: auto;
`;

const OrganizaInputsRadios = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

const SeguraInputRadio = styled.div`
  width: 6rem;
`;

const styles = {
  Form,
  Input,
  Label,
  SeguraFormulario,
  Organizador,
  Botao,
  MessageError,
  OrganizaInputsRadios,
  SeguraInputRadio,
  InputRadio,
};

export default styles;
