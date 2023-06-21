import Card from '../Card/Card.js'
import { PainelDeVideos, Media1, Media2, Media3, Media4, Media5, Media6, Media7, Media8 } from '../Card/styled.jsx'


function Home(props){

    console.log(props.reproduz)

    return(

        <PainelDeVideos>

            {/* 1 */}
            <Media1>
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=1"}
                titulo={"Título do vídeo1"}
            />
            </Media1>

            {/* 2 */}
            <Media2>   
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=2"}
                titulo={"Título do vídeo2"}
            />
            </Media2>

            {/* 3 */}
            <Media3>
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=3"}
                titulo={"Título do vídeo3"}
            />
            </Media3>

            {/* 4 */}
            <Media4>
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=4"}
                titulo={"Título do vídeo4"}
            />
            </Media4>



            {/* 5 */}
            <Media5>
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=5"}
                titulo={"Título do vídeo5"}
            />
            </Media5>


            {/* 6 */}
            <Media6>
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=6"}
                titulo={"Título do vídeo6"}
            />
            </Media6>


            {/* 7 */}
            <Media7>
            <Card
            
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=7"}
                titulo={"Título do vídeo7"}
            />
            </Media7>


            {/* 8 */}
            <Media8>
            <Card
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=8"}
                titulo={"Título do vídeo8"}
            />
            </Media8>

    </PainelDeVideos>

    )
}

export default Home