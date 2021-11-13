import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                <Signup>Get All There</Signup>
                <Description>You will get all entertainment from Marvel to National Geographic here. Click Login Now!</Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    min-height: calc(100vh - 70px);
    position: relative;
    display: flex;
    align-items: top;
    justify-content: center;
    &:before{
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0.6;
        z-index: -1;
        background: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    }
`

const Content = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
`

const CTALogoOne = styled.img`
`

const Signup = styled.a`
    width: 100%;
    background: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover{
        background: #0056c7;
    }
    @media (max-width: 850px) {
        font-size: 12px;
    }
`

const Description = styled.p`
    font-size: 15px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    @media (max-width: 850px) {
        font-size: 12px;
    }
`

const CTALogoTwo = styled.img`
`