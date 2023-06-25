import { MenuVertical, BotoesMenu } from "./styled.jsx"

function Nav(){
    return(
       <MenuVertical>
                  <ul>
                    <BotoesMenu>Início</BotoesMenu>
                    <BotoesMenu>Em alta</BotoesMenu>
                    <BotoesMenu>Inscrições</BotoesMenu>
                    <hr></hr>
                    <BotoesMenu>Originais</BotoesMenu>
                    <BotoesMenu>Histórico</BotoesMenu>

                      {/* <BotoesMenu><li>Início</li></BotoesMenu>
                      <BotoesMenu><li>Em alta</li></BotoesMenu>
                      <BotoesMenu><li>Inscrições</li></BotoesMenu>
                      <hr></hr>
                      <BotoesMenu><li>Originais</li></BotoesMenu>
                      <BotoesMenu><li>Histórico</li></BotoesMenu> */}
                      
                  </ul>
        </MenuVertical>
    )
}

export default Nav