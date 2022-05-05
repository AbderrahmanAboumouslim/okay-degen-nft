import styled from 'styled-components';
import dark_o from '../../assets/dark_o.png';
import dark_k from '../../assets/dark_k.png';
import dark_a from '../../assets/dark_a.png';
import dark_y from '../../assets/dark_y.png';
import light_o from '../../assets/light_o.png';
import light_k from '../../assets/light_k.png';
import light_a from '../../assets/light_a.png';
import light_y from '../../assets/light_y.png';

function Home() {
  return (
    <Wrapper>
      <Container>div</Container>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  background-color: ${props => props.theme.dColor};
`;

const Container = styled.div``;

const Footer = styled.footer``;

export default Home;
