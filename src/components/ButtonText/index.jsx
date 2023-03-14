import { Container } from "./styles";

export function ButtonText({title, loading = false, icon: Icon, ...rest}){
  return(
    <Container
      type="button"
      disabled = { loading }
      {...rest}
    >
      {Icon && <Icon size={20}/>}
      {loading ? "Carrregando..." : title}

    </Container>
  )
}