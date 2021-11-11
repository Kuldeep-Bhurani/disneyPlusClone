import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
            </Background>
            <ImgTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
            </ImgTitle>
            <Controls>
                <Playbtn>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </Playbtn>
                <TrailerBtn>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </TrailerBtn>
                <AddBtn>
                    <span>+</span>
                </AddBtn>
                <GroupWatchBtn>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchBtn>
            </Controls>
            <TextContainer>
                <Subtitle>2008 • 7m • Family, Fanatsy, Kids, Animation</Subtitle>
                <Description>
                    An ageing Chinese mother, feeling alone when her child moves out, gets a second chance at motherhood when one of her dumplings comes to life.
                </Description>
            </TextContainer>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImgTitle = styled.div`
    height: 30vh;
    width: 35vh;
    min-height: 170px;
    min-width: 200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
`

const Playbtn = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;
    span{
        color: black;
    }
    &:hover{
        background: rgb(198, 198, 198)
    }
`

const TrailerBtn = styled(Playbtn)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(249, 249, 249, 0.5);
    span{
        color: white;
    }
    &:hover{
        background: rgba(0, 0, 0, 0.5);
    }
`

const AddBtn = styled.button`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    width: 56px;
    padding: 15px;
    margin-right: 22px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid rgba(249, 249, 249, 0.8);
    &:hover{
        background: rgba(0, 0, 0, 0.9);
    }
    span{
        font-size: 30px;
    }
`

const GroupWatchBtn = styled(AddBtn)`
`

const TextContainer = styled.div`
`

const Subtitle = styled.div`
    font-size: 15px;
    color: rgb(249, 249, 249);
    min-height: 20px;
    margin-top: 26px;
    `

const Description = styled.div`
    line-height: 1.4;
    color: rgb(249, 249, 249);
    font-size: 20px;
    margin-top: 16px;
`