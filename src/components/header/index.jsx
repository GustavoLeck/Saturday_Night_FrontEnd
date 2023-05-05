import { Container, Imagem } from "./style";
import Logo from "../../assets/saturday-logo-white.png";

export default function Header() {
  return (
    <Container>
      <Imagem src={Logo} />
    </Container>
  );
}
