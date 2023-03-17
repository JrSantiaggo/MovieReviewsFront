import { Container, Inputs, TwoItems, Marcadores } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { AddTag } from "../../components/AddTag";
import { AiOutlineArrowLeft, AiOutlineDelete, AiOutlineSave } from "react-icons/ai"

export function New(){
  return(
    <Container>
      <Header />
      
      <Inputs>
        <ButtonText title="Voltar" icon={AiOutlineArrowLeft} />

        <h1>Novo filme</h1>

        <TwoItems>
          <Input placeholder="Titulo" />
          <Input placeholder="Sua nota(de 0 a 5)" />
        </TwoItems>

        <TextArea placeholder="observações" />

        <h2>Marcadores</h2>

        <Marcadores>
          <AddTag value="React" />
          <AddTag isNew placeholder="Novo Marcador" />         
        </Marcadores>

        <TwoItems>
          <Button icon={AiOutlineDelete} title="Exluir filme" model="secondary"  />
          <Button icon={AiOutlineSave} title="Salvar alterações" />
        </TwoItems>

      </Inputs>


    </Container>
  )
}