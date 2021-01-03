import React from "react";
import { Container, Image } from "./styles";
import Error from "../../assets/404.png";
function Error404() {
  return (
    <Container>
      <Image src={Error} alt="" />
    </Container>
  );
}

export default Error404;
