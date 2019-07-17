import React, { Component } from 'react'
import styled from 'styled-components'
import { storeScroll } from '../ScrollFn'

class Contact extends Component {
    render() {
        storeScroll()

        return (
            <ContactBody >
                <LogoHolder>
                    <LogoSpan ><Logo className="fas fa-phone-square" /><a href='tel:5716239450'> (571) 623-9450</a></LogoSpan>
                    <LogoSpan ><Logo className="fas fa-envelope-square"/> <a href='mailto:ung.kevin78@gmail.com'>ung.kevin78@gmail.com</a></LogoSpan>
                    <LogoSpan ><Logo className="fab fa-github-square" /> <a href='https://github.com/kung8' rel="noopener noreferrer" target='_blank'>github.com/kung8</a></LogoSpan>
                    <LogoSpan ><Logo className="fab fa-linkedin" /> <a href='https://www.linkedin.com/in/kung8/' rel="noopener noreferrer" target='_blank'>linkedin.com/in/kung8</a></LogoSpan>
                </LogoHolder>
                <FormHolder style={{ borderRadius:10,display: 'flex', flexDirection: 'column', marginBottom: 10, minHeight: 510, background: 'black', width: '95%', fontSize: 35, alignItems: 'center', textAlign: 'left', position: 'relative', top:60, color: 'white' }}>
                    {/* <h1>Contact Me:</h1> */}
                    <span style={{ textAlign: 'left', position: 'absolute', top: 75, left: 25 }}>Email:</span>
                    <InputField style={{ top: '120px', left: '25px' }} type="text" placeholder='Email' />
                    <span style={{ textAlign: 'left', position: 'absolute', top: 165, left: 25 }}>Phone:</span>
                    <InputField style={{ top: 210, left: 25 }} type="text" placeholder='Phone' />
                    <span style={{ textAlign: 'left', position: 'absolute', top: 255, left: 25 }}>Message:</span>
                    <TextField type="text" placeholder='Message' style={{}}
                    />
                </FormHolder>
            </ContactBody>
        )
    }
}

export default Contact

const ContactBody = styled.div`
    background: linear-gradient(#bbbabb,lightgrey,#BBBABB);
    height: 100%;
    min-height: 100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    max-width:100vw;
    overflow-x:hidden;
    ::-webkit-scrollbar {
        width:0px
    };

`

const LogoHolder = styled.div`
    margin-top:80px;
    width: 400px; 
    color: black; 
    display: flex;
    flex-direction: column;
    position:relative;
    left:20px;
    top:60px;
    font-size: 25px;
    @media screen and (min-height:810px){
        margin-top:100px;
    }    
    @media screen and (max-width:400px){
        margin:50px auto;
        width:320px;
    }
    @media screen and (min-width:400px) and (max-width:415px){
        left:70px
    }
    @media screen and (min-width:320px) and (max-width:400px){
        left:60px
    }
    @media screen and (min-width:360px) and (max-width:376px){
        left:35px
    }
    @media screen and (width:375px){
        top:100px;
    }
    @media screen and (width:320px){
        top:70px;
    }
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

const FormHolder = styled.div`
    @media screen and (min-height:731px){
        margin-top:40px;
    }

    @media screen and (width:375px){
        margin-top:60px;
    }
`

const InputField = styled.input`
    @media screen and (min-width:1000px) {
        width:95%;
    }

    @media screen and (min-width:760px) and (max-width:1000px){
        width:93%;
    }    

    @media screen and (min-width:320px) and (max-width:700px){
        width:87%;
    }

    @media screen and (max-width:321px){
        width:260px;
    }
    font-size: 35px;
    height: 40px;
    position: absolute;

`

const TextField = styled.textarea`
    font-size: 35px;
    height: 40px;
    position: absolute;
    top: 300px;
    left: 25px;
    min-height: 200px;
    @media screen and (min-width:1000px){
        width:95%;
    }

    @media screen and (min-width:760px) and (max-width:1000px){
        width:93%;
    }

    @media screen and (min-width:320px) and (max-width:700px){
        width:87%;
    }

    @media screen and (max-width:321px){
        width:85%;
    }
`