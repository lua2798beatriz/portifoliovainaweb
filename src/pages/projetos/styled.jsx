import styled from "styled-components";


export const Main = styled.main`
/* border: solid 2px red; */
height: 100vh;
display: flex;
@media (max-width: 500px) {
    flex-direction: column;
}
`
export const BoxProjetos = styled.section`
/* border: solid 2px red; */
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: #FFDE59;
flex-direction: column;
//background-size: cover;
/* opacity: .5; */
//position: relative;
z-index: 0;
`
export const Texto = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    h1{
    color: #AB6393;
    font-size: 3vw;

    
}   
`
export const BoxImg = styled.div`
/* border: solid 2px green; */
display: flex;
    justify-content: center;
    align-items: baseline;

width: 90%;
//position: absolute;
z-index: 2;

img{
    width: 40vw;
}

`