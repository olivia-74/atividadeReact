// import { ContainerHome } from "../Page/styled"
import { H4 } from "../../styledGlobal"
import { BoxPagPrincipal, Imagens } from "./styled"

function Card(props){
    return (
        <>
        <BoxPagPrincipal onClick={props.function}>
            <Imagens src={props.link} alt=""></Imagens>
            <H4>Titulo do Video</H4>
        </BoxPagPrincipal>

        {/* <ContainerHome onClick={props.reproduz}>
            <img src={props.link} alt=""></img>
            <H4>{props.titulo}</H4>
        </ContainerHome> */}
        </>
    )
}

export default Card
