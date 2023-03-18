import { Container, Profile, Search } from "./styles";
import { Input } from "../Input"
import { FiPlus, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

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
          <Link to="/" > Sair </Link>
        </div>
        <Link to="/profile">
          <img src="http://github.com/jrsantiaggo.png" alt="Imagem de perfil" />
        </Link>
        
      </Profile>

    </Container>
  )
 
}