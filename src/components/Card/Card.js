import { ContainerHome } from "../Page/styled"
import { H4 } from "../../styledGlobal"

function Card(props){
    return (
        <>
        <ContainerHome onClick={props.reproduz}>
            <img src={props.link} alt=""></img>
            <H4>{props.titulo}</H4>
        </ContainerHome>
        </>
    )
}

export default Card
