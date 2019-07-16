import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            style: 'flex',
            ham: false
        }
    }


    render() {
        const { ham } = this.state
        console.log(ham)
        return (
            <HeaderBody>
                <h1 style={{ marginLeft: 20 }}>KU</h1>

                <NavLinks 
                    style={{ display: this.state.style, position: 'relative' }}>
                    <div onClick={() => this.props.history.push('/')}>
                        <h1>About</h1>
                    </div>
                    <div onClick={() => this.props.history.push('/portfolio')}>
                        <h1>Portfolio</h1>
                    </div>
                    <div onClick={() => this.props.history.push('/contact')}>
                        <h1>Contact</h1>
                    </div>
                    <div onClick={() => this.props.history.push('/blog')}>
                        <h1>Blog</h1>
                    </div>
                </NavLinks>

                <Ham 
                    style={{ display: this.state.ham ? 'block' : 'flex' }} 
                    onClick={() => this.setState({ ham:!this.state.ham , style: 'block' })} 
                    className="fas fa-bars" />

            </HeaderBody>
        )
    }
}

export default withRouter(Header)

const HeaderBody = styled.div`
    display:flex;
    justify-content:space-between;
    height:100px;
    background:red;
    align-items:center;
    ::-webkit-scrollbar {
        width:0px
    }
`

const Ham = styled.i`
    margin-right: 20px;
    color: white;
    font-size: 35px;
    display:flex;
    @media screen and (max-width: 300px){
        display:none;
    }   
`

const NavLinks = styled.div`
    width:60vw;
    justify-content:space-evenly;
    @media screen and (max-width: 750px){
        display:none;
    }
`
const Tag = styled.div`
    position:absolute;
    // display:block;
    // top:50px;
    // background:blue;
    // z-index:4;
`