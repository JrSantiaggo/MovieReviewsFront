import { Container, Stars, Summary, Tags } from "./styles";
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import { Tag } from "../Tag";

export function ReviewSummary({data, ...rest}){
  return(
    <Container>
      <h1> {data.title} </h1>
      <Stars>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
      </Stars>

      <Summary>
        {data.summary}
      </Summary>

      <Tags>
        {
        data.tags.map( tag => <Tag key={tag.id} title={tag.name}  />) 
        }

      </Tags>

    </Container>

  )
}