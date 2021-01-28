import React from 'react';
import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../Sellerinfo'
import ProductAction from '../ProductAction';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';
import src from '*.bmp';
// import ZoomableImage from '../ImageZoom';
import ReactImageMagnify from 'react-image-magnify';
const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>


      <Panel>
        <Column>
          <Gallery>
            <ReactImageMagnify 
              enlargedImageContainerStyle={{ backgroundColor: '#fff' }}
              enlargedImageContainerDimensions = {{width: 600, height: 600}}
              smallImage={{
                src: tshirtImage,
                width: 450,
                height: 500,
                isFluidWidth: false,
                alt: 'tshirt',
                // sizes: '(max-width: 900px) 100vw, (max-width: 1200px) 30vw, 360px'
              }}
              largeImage={{
                src: tshirtImage,
                alt: 'tshirt',
                height: 1200,
                width: 900,
                
              }}
            />
          </Gallery>
          <Info />
        </Column>
        <Column>
          <ProductAction />
          <SellerInfo /> 
          
          <WarrantySection />
          <WarrantySection />
          <WarrantySection /> 

        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => {
    return(
      <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra Garantida com Lorem ipsum</p>
          <p className="description">Receba o produto ou compra estornada</p>
        </span>
        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="description">Sem garantia na compra</p>
        </span>
      </div>

      <a href="#">Saiba mais sobre compra garantia</a>
    </Section>
    )
    

}

const Info = () =>{
    return(
      <Description>
        <h2>Descrição</h2>
      
        <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.</p>
        <br />
        <br />
        Itens inclusos : <br />
        - 1x camiseta <br />
        - 1x camiseta <br />
        - 1x camiseta <br />
        - 1x camiseta <br />
        - 1x camiseta <br />
        <br />
    </Description>
    )
    

}

export default Product;
