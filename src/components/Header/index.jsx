import { Container, Profile, Search } from "./styles";
import { Input } from "../Input"
import { FiPlus, FiSearch } from "react-icons/fi";

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Search>
        <Input placeholder="Pesquise por o título..." icon={FiSearch}/>
      </Search>
        
      <Profile>
        <div>
          <h2>Lourival Junior</h2>
          <a href="#">sair</a>
        </div>
        <img src="http://github.com/jrsantiaggo.png" alt="Imagem de perfil" />
      </Profile>

    </Container>
  )
 
}