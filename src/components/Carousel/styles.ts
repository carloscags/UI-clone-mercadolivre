import styled from 'styled-components';


export const CarouselWrapper = styled.div`
    display: flex;
    align-self: flex-start;
    /* background-color: red; */
    list-style: none;
         
  


   
`

export const CarouselSlider = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;


    .shirtImage{
        width: 50px;
        /* background-color: red */
    }
    
`;

export const CarouselButton = styled.button`
    display: flex;
    margin: 50px;
    margin-left: 250px;
    

    .buttonBack {
        
        background-color: red;
    }

`;