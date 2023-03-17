import { Container } from "./styles";

export function Button({title, loading = false, icon: Icon, model = "primary",...rest}){
  return(
    <Container
      type="button"
      disabled = { loading }
      model={model}
      {...rest}
    >
      {Icon && <Icon size={20}/>}
      {loading ? "Carrregando..." : title}

    </Container>
  )
}