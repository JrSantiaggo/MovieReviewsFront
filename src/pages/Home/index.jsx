import { Header } from "../../components/Header"
import { Container, NewMovie, MovieList } from "./styles"
import {AiOutlinePlus} from "react-icons/ai"
import { Button } from "../../components/Button"

export function Home(){
  return(
    <Container>
      <Header />

      <NewMovie>
        <h1>Meus Filmes</h1>
        <Button title="Adicionar filme" icon={AiOutlinePlus} />
      </NewMovie>

      

    </Container>
  )
}