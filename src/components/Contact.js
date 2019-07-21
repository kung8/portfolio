import React, { Component } from 'react'
import styled from 'styled-components'
import { storeScroll } from '../ScrollFn'
import axios from 'axios'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {css} from 'glamor';

toast.configure({draggable:true, autoClose:3000,background:'green'})


class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }

    sendMessage=async()=>{
        const {name,email,phone,message} = this.state
        if(name.length && email.length && phone.length && message.length){
            await axios.post('/api/message',this.state)
            this.setState({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
            toast('Thank you so much for your message. Kevin Ung will be in contact with you!',{
                className: css({
                  background: '#C6DEA6',
                  borderRadius:10,
                  width:'90%',
                  margin:'120px auto'
                }),
                bodyClassName: css({
                  color:'black',
                  fontSize:20
                }),
                progressClassName: css({
                  background: 'green'
                })
              })
        } else {
            toast('Please fill out all the info!',{
                className: css({
                  background: 'pink',
                  borderRadius:10,
                  width:'90%',
                  margin:'120px auto'
                }),
                bodyClassName: css({
                    color:'black',
                    fontSize:20
                }),
                progressClassName: css({
                  background: 'red'
                })
              })
        }
    }

    render() {
        storeScroll()

        return (
            <ContactBody style={{overflowX:'hidden'}}>
                <LogoHolder>
                    <LogoButton><Logo className="fas fa-phone-square" /><ContactLink href='tel:5716239450'> (571) 623-9450</ContactLink></LogoButton>
                    <LogoButton><Logo className="fas fa-envelope-square" /> <ContactLink href='mailto:ung.kevin78@gmail.com'>ung.kevin78@gmail.com</ContactLink></LogoButton>
                    <LogoButton><Logo className="fab fa-github-square" /> <ContactLink href='https://github.com/kung8' rel="noopener noreferrer" target='_blank'>github.com/kung8</ContactLink></LogoButton>
                    <LogoButton><Logo className="fab fa-linkedin" /> <ContactLink href='https://www.linkedin.com/in/kung8/' rel="noopener noreferrer" target='_blank'>linkedin.com/in/kung8</ContactLink></LogoButton>
                </LogoHolder>
                <FormHolder>
                    <ContactMe>Contact Me:</ContactMe>
                    <InputSpan id='name-label'>Name:</InputSpan>
                    <ShorterInputField id='name-input' type="text" placeholder='Name' onChange={e=>this.setState({name:e.target.value})} />

                    <InputSpan id='phone-label'>Phone:</InputSpan>
                    <ShorterInputField id='phone-input' type="text" placeholder='Phone' onChange={e=>this.setState({phone:e.target.value})}/>

                    <InputSpan id='email-label'>Email:</InputSpan>
                    <InputField id='email-input' type="text" placeholder='Email' onChange={e=>this.setState({email:e.target.value})}/>

                    <InputSpan id='message-label'>Message:</InputSpan>
                    <TextField type="text" placeholder='Message' onChange={e=>this.setState({message:e.target.value})}/>
                    <Send onClick={this.sendMessage}>Leave a Message</Send>
                </FormHolder>
            </ContactBody>
        )
    }
}

export default Contact

const ContactBody = styled.div`
    background: #585563;
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
    width: 100%;
    align-items:center; 
    display: flex;
    flex-direction: column;
    position:relative;
    margin-bottom:40px;
    top:60px;
    font-size: 25px;
`

const LogoButton = styled.button`
@media screen and (max-width:450px){
    font-size:20px;
}
background:black;
margin-bottom:5px;
border-radius:10px;
width:265px;
position:relative;
height:35px;
font-size:20px;
`

const Logo = styled.i`
    color:#F7F9F9;
    position:absolute;
    left:10px;
    top:calc(50% - 10px);
    @media screen and (max-width:400px){
        font-size:20px;
    }
`

const ContactLink = styled.a`
    position:absolute;
    left:35px;
    top:calc(50% - 10px);
    color:white;
    text-decoration:none;
`

const FormHolder = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    min-height: 550px;
    background: #7ebdc3;
    width: 95%;
    font-size: 35px;
    align-items: center;
    text-align: left;
    position: relative;
    top: 60px;
    color: white;
    box-shadow: 6px 6px 15px 3px black;
    @media screen and (min-width:){}
    @media screen and (min-height:731px){
        margin-top:40px;
    }
    @media screen and (width:375px){
        margin-top:60px;
    }
`

const ContactMe = styled.h1`
    @media screen and (max-width:415px){
        font-size:55px;
    }
    @media screen and (max-width:320px){
        font-size:30px
    }
    @media screen and (max-width:321px){
        font-size:50px
    }

`

const InputSpan = styled.span`
    text-align: left;
    position: absolute ;
`

const ShorterInputField = styled.input`
    @media screen and (min-width:760px) and (max-width:1000px){
        width:43%
    }    

    @media screen and (min-width:320px) and (max-width:700px){
        width: 40%
    }

    @media screen and (max-width:320px){
        width: 40%
    }

    font-size: 35px;
    height: 40px;
    position: absolute;
    border-radius:10px;
    color:black;

    ::placeholder {
        color:black;
        opacity:0.567
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
    border-radius:10px;
    color:black;
    ::placeholder {
        color:black;
        opacity:0.567
    }
`

const TextField = styled.textarea`
    font-size: 35px;
    position: absolute;
    top: 300px;
    left: 25px;
    min-height: 200px;
    max-height:200px;
    border-radius:10px;
    color:black;
    @media screen and (min-width:1000px){
        width:95%;
        max-width:95%;
        min-width:95%;
    }

    @media screen and (min-width:760px) and (max-width:1000px){
        width:93%;
        max-width:93%;
        min-width:93%;
    }

    @media screen and (min-width:320px) and (max-width:700px){
        width:87%;
        max-width:87%;
        min-width:87%;
    }

    @media screen and (max-width:321px){
        width:85%;
        max-width:85%;
        min-width:85%;
    }
    ::placeholder {
        color:black;
        opacity:0.567
    }
`

const Send = styled.button`
    position:absolute;
    top:510px;
    background:black;
    color:white;
    border-radius:10px;
    width:250px;
    height:35px;
    font-size:25px;
    outline:none;
    border:black solid 1px;
`