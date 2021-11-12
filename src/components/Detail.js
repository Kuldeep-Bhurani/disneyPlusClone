import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import db from '../firebase';
import { doc, getDoc } from "firebase/firestore";

function Detail() {
    const { id } = useParams();
    const [MvData, setMvData] = useState()

    // eslint-disable-next-line
    useEffect(async () => {
        const docRef = doc(db, "movies", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setMvData(docSnap.data())
        } else {
            //redirect to home
        }
    }, [id])

    return (
        <Container>
            {MvData &&
                (
                    <>
                        <Background>
                            <img src={MvData.backgroundImg} alt="" />
                        </Background>
                        <ImgTitle>
                            <img src={MvData.titleImg} alt="" />
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
                            <Subtitle>{MvData.subTitle}</Subtitle>
                            <Description>{MvData.description}</Description>
                        </TextContainer>
                    </>
                )
            }
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 200px);
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
    margin-top: 60px;
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
    flex-wrap: wrap;
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
    @media (max-width: 850px) {
        height: 40px;
        margin: 12px 5px;
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
    @media (max-width: 850px) {
        font-size: 20px;
        height: 40px;
        width: 40px;
        margin: 12px 0;
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
    @media (max-width: 850px) {
        font-size: 12px;
    }
`

const Description = styled.div`
    line-height: 1.4;
    color: rgb(249, 249, 249);
    font-size: 20px;
    margin-top: 16px;
    max-width: 700px;
    @media (max-width: 850px) {
        font-size: 16px;
        line-height: 1.1;
    }
`