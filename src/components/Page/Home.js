import Card from '../Card/Card.js'
// import { PainelDeVideos, Media1, Media2, Media3, Media4, Media5, Media6, Media7, Media8 } from '../Card/styled.jsx'
import { PainelDeVideos } from './styled.jsx'

function Home(props){

    console.log(props.reproduz)

    return(

        <PainelDeVideos>


            {/* 1 */}
            {/* <Midia1> */}
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=1"}
                titulo={"Título do vídeo1"}
            />
            {/* </Midia1> */}

            {/* 2 */}
            {/* <Midia2>    */}
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=2"}
                titulo={"Título do vídeo2"}
            />
            {/* </Midia2> */}

            {/* 3 */}
            {/* <Midia3> */}
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=3"}
                titulo={"Título do vídeo3"}
            />
            {/* </Midia3> */}

            {/* 4 */}
            {/* <Midia4> */}
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=4"}
                titulo={"Título do vídeo4"}
            />
            {/* </Midia4> */}



            {/* 5 */}
            {/* <Midia5> */}
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=5"}
                titulo={"Título do vídeo5"}
            />
            {/* </Midia5> */}


            {/* 6 */}
            {/* <Midia6> */}
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=6"}
                titulo={"Título do vídeo6"}
            />
            {/* </Midia6> */}


            {/* 7 */}
            {/* <Midia7> */}
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=7"}
                titulo={"Título do vídeo7"}
            />
            {/* </Midia7> */}


            {/* 8 */}
            {/* <Midia8> */}
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=8"}
                titulo={"Título do vídeo8"}
            />
            {/* </Midia8> */}

    </PainelDeVideos>

    )
}

export default Home