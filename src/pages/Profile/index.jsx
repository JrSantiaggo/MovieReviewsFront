import { Container, Avatar, Form } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai"
import { FiCamera, FiUser, FiMail, FiLock, } from "react-icons/fi"
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input"
import { AiOutlineSave } from "react-icons/ai"
import { Link } from "react-router-dom";


export function Profile(){
  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" icon={AiOutlineArrowLeft} />
        </Link>
        
      </header>

      <Avatar>
        <img src="http://github.com/jrsantiaggo.png" alt="imagem de perfil" />
        <label 
          htmlFor="avatar">
          <FiCamera/>
          <input type="file" id="avatar"/>
        </label>
      </Avatar>
      <Form>
        <Input icon={FiUser} placeholder="Nome" />
        <Input icon={FiMail} placeholder="Email" />
        <Input icon={FiLock} placeholder="Senha atual" />
        <Input icon={FiLock} placeholder="Nova senha" />

        <Button title="Salvar" icon={AiOutlineSave} />
      </Form>

    </Container>

  )
}