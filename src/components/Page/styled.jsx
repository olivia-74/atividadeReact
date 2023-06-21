import styled from "styled-components";

export const ContainerHome = styled.main`
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin; 
    align-items: start;
    justify-items: stretch;
    /* height: 200px; */
`
export const TamanhoImagem = styled.section`
    width: 100%;
    height: 200px;
`


// box-pagina-principal -> ContainerHome

// ??: como colocar isso em react
// .box-pagina-principal > img {
//     width: 100%;
//     height: 200px;
// }