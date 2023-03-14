import { Container, Inputs, TwoInput } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { AiOutlineArrowLeft } from "react-icons/ai"

export function New(){
  return(
    <Container>
      <Header />
      
      <Inputs>
        <ButtonText title="Voltar" icon={AiOutlineArrowLeft} />

        <h1>Novo filme</h1>

        <TwoInput>
          <Input placeholder="Titulo" />
          <Input placeholder="Sua nota(de 0 a 5)" />
        </TwoInput>

        <TextArea placeholder="observações" />

      </Inputs>

      
      


    </Container>
  )
}