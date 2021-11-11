import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href="/">
                    <img src="/images/home-icon.svg" alt="Home Icon" />
                    <span>HOME</span>
                </a>
                <a href="/">
                    <img src="/images/search-icon.svg" alt="Search Icon" />
                    <span>SEARCH</span>
                </a>
                <a href="/">
                    <img src="/images/watchlist-icon.svg" alt="Watchlist Icon" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/">
                    <img src="/images/original-icon.svg" alt="Originals Icon" />
                    <span>ORIGINALS</span>
                </a>
                <a href="/">
                    <img src="/images/movie-icon.svg" alt="Movies Icon" />
                    <span>MOVIES</span>
                </a>
                <a href="/">
                    <img src="/images/series-icon.svg" alt="Series Icon" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://yt3.ggpht.com/yti/APfAmoFykysSue516_MHkEGGkJl258gX_IAS5T1msQ=s108-c-k-c0x00ffffff-no-rj" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-decoration: none;
        cursor: pointer;
        img{
            height: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.24px;
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
