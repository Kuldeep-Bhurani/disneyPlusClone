import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    SetSignOut
} from '../features/user/userSlice'
import { auth, provider } from '../firebase';
import { signInWithPopup, signOut } from '@firebase/auth'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
            } else {
                dispatch(SetSignOut())
                navigate("/login");
            }
        })
    }, [dispatch, navigate])

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                let user = result.user
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
                navigate("/");
            })
    }

    const signout = () => {
        signOut(auth)
            .then(() => {
                dispatch(SetSignOut())
                navigate("/login");
            })
    }

    return (
        <Nav>
            <Link to="/">
                <Logo src="/images/logo.svg" />
            </Link>
            {
                !userName ? (
                    <LoginContainer>
                        <Login onClick={signIn}>LOGIN</Login>
                    </LoginContainer>) : (
                    <>
                        <NavMenu>
                            <Link to="/">
                                <img src="/images/home-icon.svg" alt="Home Icon" />
                                <span>HOME</span>
                            </Link>
                            <Link to="/">
                                <img src="/images/search-icon.svg" alt="Search Icon" />
                                <span>SEARCH</span>
                            </Link>
                            <Link to="/">
                                <img src="/images/watchlist-icon.svg" alt="Watchlist Icon" />
                                <span>WATCHLIST</span>
                            </Link>
                            <Link to="/">
                                <img src="/images/original-icon.svg" alt="Originals Icon" />
                                <span>ORIGINALS</span>
                            </Link>
                            <Link to="/">
                                <img src="/images/movie-icon.svg" alt="Movies Icon" />
                                <span>MOVIES</span>
                            </Link>
                            <Link to="/">
                                <img src="/images/series-icon.svg" alt="Series Icon" />
                                <span>SERIES</span>
                            </Link>
                        </NavMenu>
                        <UserImgCont>
                            <UserImg onClick={signout} src={userPhoto} title="Sign Out!" />
                        </UserImgCont>
                    </>
                )
            }
        </Nav>
    )
}

export default Header

const Logo = styled.img`
width: 80px;
    cursor: default;
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
    
    &:hover{
        span:after{
            opacity: 1;
            transform: scaleX(1);
        }
    }
    
    img{
        height: 20px;
    }
    span{
        font-size: 13px;
        letter-spacing: 1.24px;
        position: relative;
        
        &:after{
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform: scaleX(0);
            transform-origin: left center; 
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
    }
}
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const LoginContainer = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
`

const UserImgCont = styled.div`
`

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;

    @media (max-width: 850px) {
        ${NavMenu}{
            display: none;
        }
        ${Logo}{
            cursor: pointer;
        }
        ${UserImgCont}{
            flex: 1;
            display: flex;
            justify-content: flex-end;
        }
    }
`