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
        // console.log(ham)
        return (
            <HeaderBody id='HeaderBody'>
                <h1 onClick={() => this.props.history.push('/')} style={{ marginLeft: 20 }}>KU</h1>

                <NavLinks 
                    style={{ display: this.state.style, position: 'relative' }}>
                    <div onClick={() => this.props.history.push('/projects')}>
                        <h1>Projects</h1>
                    </div>
                    <div onClick={() => this.props.history.push('/contact')}>
                        <h1>Contact</h1>
                    </div>
                    {/* <div onClick={() => this.props.history.push('/blog')}>
                        <h1>Blog</h1>
                    </div> */}
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
    z-index:2;
    top:0;
    display:flex;
    position:fixed;
    width:100%;
    color:#E9E9E9;
    justify-content:space-between;
    font-weight:bold;
    text-shadow:3px 1px 10px black;
    font-size:25px;
    height:100px;
    background:transparent;
    align-items:center;
    ::-webkit-scrollbar {
        width:0px
    }
`

const Ham = styled.i`
    margin-right: 20px;
    color: #E9E9E9;
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