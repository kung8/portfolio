import React, { Component } from 'react'
import styled from 'styled-components'
import {storeScroll} from '../ScrollFn'

class Contact extends Component {
    render() {
        storeScroll()

        return (
            <ContactBody >
                <LogoHolder>
                    <LogoSpan><Logo className="fas fa-phone-square" /> (571) 623-9450</LogoSpan>
                    <LogoSpan><Logo className="fas fa-envelope-square" /> ung.kevin78@gmail.com</LogoSpan>
                    <LogoSpan><Logo className="fab fa-github-square" /> github.com/kung8</LogoSpan>
                    <LogoSpan><Logo className="fab fa-linkedin" /> linkedin.com/in/kung8</LogoSpan>
                </LogoHolder>
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: 510, background: 'black', width: '95%', fontSize: 35, alignItems: 'center', textAlign: 'left', position: 'relative', color: 'white' }}>
                    <h1>Contact Me:</h1>
                    <span style={{ textAlign: 'left', position: 'absolute', top: 75, left: 25 }}>Email:</span>
                    <InputField style={{  }} type="text" placeholder='Email' />
                    <span style={{ textAlign: 'left', position: 'absolute', top: 165, left: 25 }}>Phone:</span>
                    <InputField style={{ width: 350, fontSize: 35, height: 40, position: 'absolute', top: 210, left: 25 }} type="text" placeholder='Phone' />
                    <span style={{ textAlign: 'left', position: 'absolute', top: 255, left: 25 }}>Message:</span>
                    <TextField type="text" placeholder='Message' style={{ width: 350, fontSize: 35, height: 40, position: 'absolute', top: 300, left: 25, minHeight: 200 }}
                    />
                </div>
            </ContactBody>
        )
    }
}

export default Contact

const ContactBody = styled.div`
    background: linear-gradient(#bbbabb,lightgrey,#BBBABB);
    height: 100%;
    min-height: 100vh;
    margin-top:80px;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    width:100%;
    max-width:100vw;
    ::-webkit-scrollbar {
        width:0px
    };
    @media screen and (min-height:810px){
        margin-top:100px;
    }
`

const LogoHolder = styled.div`
    @media screen and (max-width:400px){
        margin:50px auto;
        width:320px;
    }
    margin-top:120px;
    margin-bottom:20px;
    width: 400px; 
    color: black; 
    display: flex;
    flex-direction: column;
    font-size: 25px;
    background:blue;
`

const Logo = styled.i`
    color:navy;
    @media screen and (max-width:400px){
        font-size:20px;
    }
`

const LogoSpan = styled.h3`
    @media screen and (max-width:450px){
        font-size:20px;
    }
    @media screen and (max-width:320px){
        font-size:12px;
    }
`

const InputField = styled.input`
    @media screen and (max-width:300px){
        width:180px;
        margin:0 auto;
    }
    width: 350px;
    font-size: 35px;
    height: 40px;
    position: absolute;
    top: 120px;
    left: 25px;
`

const TextField = styled.textarea`

`