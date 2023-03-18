import { Container } from "./styles";
import { BiTimeFive } from "react-icons/bi"

export function AuthorDetails({img, author, date, time, ...rest}){
  return (
    <Container>
      <img src={img} alt="" />
      <span>Por {author} </span>
      <BiTimeFive />
      <span> {date} às {time} </span>
    </Container>
  )
}