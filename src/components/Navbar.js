import React from 'react'
import styled from 'styled-components'

const Navbar = (props) => {

    const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
    `

    const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
    `
    const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content:flex-end;
    padding: 0px;
    margin: 0px;
    margin-right: auto;
    margin-left: 25px;

    @media (max-width: 768px) {
        display: none;
    }
    `
  return (
    <Nav>
        <Logo>
            <img src='/images/logo.svg' alt=''/>
        </Logo>
        <NavMenu>
          Menu
        </NavMenu>
    </Nav>
  )
}

export default Navbar