import React from 'react';

import { 
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShildIcon,
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta branca de marca</h1>
        <HeartIcon />
      </Row>
    
    <DispatchTag>Enviado normalmente</DispatchTag>

    <PriceCard>
      <PriceRow>
        <span className="symbol">R$</span>
        <span className="fraction">34</span>
        <span className="cents">99</span>
      </PriceRow>
      <InstallmentsInfo>Em 3x de R$ 11,58</InstallmentsInfo>
    
    </PriceCard>
    
    <StockStatus>Estoque disponivel</StockStatus>

    <MethodCard>
      <CheckIcon />

      <div>
        <span className="title">Frete Gratis</span>
        <span className="details">Beneficio Lorem Ipsum</span>
        <a href="#" className="more">
          Ver mais opções
        </a>

      </div>
    </MethodCard>


    <Actions>
      <Button solid>Comprar Agora</Button>
      <Button>Adicionar ao carreinho</Button> 
    </Actions>

    <Benefits>
      <li>
        <ShildIcon />
        <p>
          Compra Garantida, receba o produto que esta esperando ou devolvemos o dinheiro
        </p>
      </li>

    </Benefits>
    </Container>
  );
};

export default ProductAction;
