import { Container, Stars } from "./styles";
import {AiFillStar, AiOutlineStar} from "react-icons/ai"

export function MovieTitle({title, ...rest}){
  return (
    <Container>
      <h1>{title}</h1>
      <Stars>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
      </Stars>

    </Container>
  )
}