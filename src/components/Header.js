import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            ham: false,

        }
    }

    closeBar(string){
        this.setState({ham:false})
        this.props.history.push(string)
    }

    render() {
        const { ham } = this.state
        return (
            <HeaderBody id='HeaderBody'>
                <h1 onClick={() => this.props.history.push('/')} style={{ marginLeft: 20 }}>KU</h1>

                <NavLinks 
                    style={{ top:ham && 80, display:ham && 'block', background:ham && 'linear-gradient(to bottom,#585563,silver)',width:ham && '100%',textAlign:ham && 'center'}}>
                    <div style={{borderBottom:ham && 'solid 1px black'}} onClick={() => this.closeBar('/projects')}>
                        <h1>Projects</h1>
                    </div>
                    <div style={{borderBottom:ham && 'solid 1px black'}} onClick={() => this.closeBar('/contact')}>
                        <h1>Contact</h1>
                    </div>
                </NavLinks>

                <Ham
                    onClick={() => this.setState({ ham:!ham })} 
                    className="fas fa-bars" />

            </HeaderBody>
        )
    }
}

export default withRouter(Header)

const HeaderBody = styled.div`
    z-index:4;
    display:flex;
    position:fixed;
    top:0px;
    min-width:100vw;
    width:100vw;
    color:#E9E9E9;
    justify-content:space-between;
    font-weight:bold;
    text-shadow:3px 1px 10px black;
    font-size:25px;
    height:80px;
    border-bottom:solid 1px black;
    background:transparent;
    align-items:center;
    ::-webkit-scrollbar {
        width:0px
    }
    @media screen and (min-height:812px){
        height:100px;
    }
`

const Ham = styled.i`
    color: #E9E9E9;
    position:absolute;
    font-size: 35px;
    display:flex;
    right:40px;
    @media screen and (min-width: 700px){
        display:none;
    }   
`

const NavLinks = styled.div`
    width:60vw;
    justify-content:space-evenly;
    position:absolute;
    display:none;
    @media screen and (min-width:700px){
        display:flex;
        right:20px;
    }
`
// const Tag = styled.div`
//     position:absolute;
//     // display:block;
//     // top:50px;
//     // background:blue;
//     // z-index:4;
// `