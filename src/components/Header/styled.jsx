import styled,{createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
`

import banner from "../../../public/novobanner.png"

export const Header = styled.header`
width: 100%;
height:69vh;
display:flex;
justify-content: space-evenly;
align-items: end;
background-image:url(${banner});
background-repeat:no-repeat;
background-size:100%;
background-color: #AB6393;
@media (max-width: 1000px) {
    width: 100vw;
}
@media (max-width: 500px) {
    width: 100%;
    height: 30vh;
}
`
export const BoxLogo = styled.div`
width: 30vw;
height: 10vh;
color: #ffffff;
display: flex;
align-items: center;
justify-content: space-between;
img{
    width:50vw; 
}
@media (max-width: 5000px) {
    height: 1000vh;
    
}
`

export const Title = styled.h2`

width: 100%;
text-align: center;
`
export const Text = styled.p`

width: 100%;
text-align: center;
`

export const BoxMenu = styled.nav`
display:flex;
align-items: center;
width: 70%;
height: 5vh;
ul{
    display:flex;
    //height: 0.2vh;
    width: 80%;
}
li:nth-child(1){
}
@media (max-width: 500px) {
    height: 7vh;
}
`
export const Lista = styled.li`
height:10vh;
width:10vw;
display: flex;
justify-content: center;
align-items: center;
a{
  color: #1B434C;
}
@media (max-width: 500px) {
    height: 5vh;
    width: 20vw;
    /* border: solid 1px yellow; */
}
`
export const BoxIcon = styled.div`
height: 5vh;
width: 15vw;
display: flex;
align-items: center;
justify-content: space-evenly;

@media (max-width: 500px) {
   img{
    width:3vw;
   }
}
`