import { Link } from "react-router-dom";
import * as S from "./styled"
import linkedin from "../../assets/link.png"
import git from "../../assets/git.png"
import face from "../../assets/face.png"

export default function Header() {
  return (
    <S.Header>
      <S.BoxLogo>
        
        <S.Title></S.Title>
        <S.Text></S.Text>
      </S.BoxLogo>
        <S.BoxMenu>
            <ul>
                <S.Lista><Link to="/"><strong>INÍCIO</strong></Link></S.Lista>
                <S.Lista><Link to="/sobre"><strong>SOBRE</strong></Link></S.Lista>
                <S.Lista><Link to="/projeto"><strong>PROJETOS</strong></Link></S.Lista>
            </ul>
        </S.BoxMenu>

        <S.BoxIcon>
          <a href="https://www.linkedin.com/in/anabeatrizfreitas98/"><img src={linkedin} alt="" /></a>
          <a href="https://github.com/lua2798beatriz"><img src={git} alt="" /></a>
          <a href=""><img src={face} alt="" /></a>
        </S.BoxIcon>

    </S.Header>
  )
}
