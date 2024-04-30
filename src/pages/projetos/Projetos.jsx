import * as S from "./styled"

import Carrosel from "react-elastic-carousel"

export default function Projetos() {
  return (
    <S.Main>
      
      <S.BoxProjetos>
        <S.Texto>
          <h1>
        Meus Projetos
        </h1>
        </S.Texto>
        <S.BoxImg>
          <Carrosel itemsToShow={2}>
          <img src="site produtos de beleza.png" alt="" />
          <img src="Desafio prime video.png" alt="" />
          <img src="https://store-images.s-microsoft.com/image/apps.33401.13510798887167234.ac7a8ac8-9ca9-4f4d-b67f-eaa709be3ed2.1b34c3b2-d028-4d15-b2c6-a5ae5f4c0d7a?h=576" alt="" />
          <img src="https://abcdoabc.com.br/wp-content/uploads/app-coco-bambu_f962df7b.jpg" alt="" />
        </Carrosel>
        </S.BoxImg>
      </S.BoxProjetos>
    </S.Main>
  )
}
