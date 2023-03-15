import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi"

export function AddTag({isNew, value, onClick, ...rest}){
  return(
    <Container isNew={isNew} >
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={'button'}
      >
        { isNew ? <FiPlus/> : <FiX/>}

      </button>

    </Container>
  )
}