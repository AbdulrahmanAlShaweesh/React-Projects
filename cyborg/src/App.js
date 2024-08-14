import {Container } from "./Components/index";
import { Header, Hero, Footer, MostPopular } from "./Components/Sections";

const App = () => {
  return (
    <>
      <Header />
      <Container>
            <Hero />
            <MostPopular/>
      </Container>
      <Footer />
    </>
  );
};

export default App;
