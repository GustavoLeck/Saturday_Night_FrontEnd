import { Container, Imagem } from "./style";
import Logo from "../../assets/saturday-logo-white.png";
import Formulario from "./../formulario";

export default function Header() {
  return (
    <Container>
      <Imagem src={Logo} />
      <Formulario></Formulario>
    </Container>
  );
}
