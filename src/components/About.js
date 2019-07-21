import React, {Component} from 'react'
import styled from 'styled-components'
import {images} from './TechImages'
import Singapore from '../Assets/Me/Singapore.jpg'
import frisbee from '../Assets/Me/Frisbee.png'
import running from '../Assets/Me/Running.png'


const {css,express,fontAwesome,git,html,js,node, postman,redux, s3,socket,stripe,materialui,postgres,react,sqltabs} = images

class About extends Component {
    state={
        process:0
    }


    catchFrisbee(){
        setTimeout(()=>{
            if(this.state.process !== 4){
                this.setState({process:this.state.process+1})
            } else {
                this.setState({process:1})
            }
        },1000)
    }
    render(){
        this.catchFrisbee()
        return(
            <AboutBody>
                <ProfileImgHolder>
                    <ProfilePic src={Singapore} alt=""/>
                    {/* <div> */}
                        <Profile>
                            <p>
                                Hello, my name is <span style={{fontWeight:'bold',fontSize:20}}>Kevin Ung</span>! 
                                I am a web developer who loves the exciting challenge of problem solving and am passionate about learning. I am a songwriter and an avid Ultimate Frisbee player.   
                            </p>
                           
                           <div style={{width:'100%',background:'blue',display:'flex',justifyContent:'space-between',position:'relative',marginTop:10}}>
                                <RunnerImg src={frisbee} style={{display:this.state.process !== 4 && 'none',left:'0%'}} alt=""/>
                                <RunnerImg src={running} style={{display:this.state.process !== 3 && 'none',left:'25%'}} alt=""/>
                                <RunnerImg src={running} style={{display:this.state.process !== 2 && 'none',left:'50%'}} alt=""/>
                                <RunnerImg src={running} style={{display:this.state.process !== 1 && 'none',left:'75%'}} alt=""/>
                                {/* <img src={running} height='45px' style={{display:this.state.process !== 8 && 'none',position:'absolute',left:'0px'}} alt=""/> */}
                                {/* <img src={running} height='45px' style={{display:this.state.process !== 8 && 'none',position:'absolute',left:'0px'}} alt=""/> */}
                                {/* <img src={running} height='45px' style={{display:this.state.process !== 8 && 'none',position:'absolute',left:'0px'}} alt=""/> */}
                                {/* <img src={running} height='45px' style={{display:this.state.process !== 8 && 'none',position:'absolute',left:'0px'}} alt=""/> */}
                                {/* <img src={running} height='45px' style={{display:this.state.process !== 8 && 'none',position:'absolute',left:'0px'}} alt=""/> */}
                           </div>
                        </Profile>
                        {/* <div>

                        </div>
                    </div> */}

                </ProfileImgHolder>
                
                <SkillsHolder>
                    <SkillsHeader>SKILLS</SkillsHeader>
                    <MiniSkillsHolder>
                        <Skills>
                            <SkillsImg src={react} alt="react"/>
                            <SkillsName>React</SkillsName>
                        </Skills>
                        <Skills>
                            <SkillsImg src={js} alt="js"/>
                            <SkillsName>JavaScript</SkillsName>
                        </Skills>
                        <Skills>
                            <SkillsImg src={express} alt="express"/>
                            <SkillsName>Express</SkillsName>
                        </Skills>
                        <Skills>
                            <SkillsImg src={node} alt="node"/>
                            <SkillsName>Node</SkillsName>
                        </Skills>
                        <Skills>
                            <SkillsImg src={postgres} alt="postgres"/>
                            <SkillsName>Postgres SQL</SkillsName>
                        </Skills>
                        <Skills>
                            <SkillsImg src={css} alt="css"/>
                            <SkillsName>CSS</SkillsName>
                        </Skills>
                        <Skills>
                            <SkillsImg src={html} alt="html"/>
                            <SkillsName>HTML</SkillsName>
                        </Skills>
                        <Skills>
                            <SkillsImg src={redux} alt="redux"/>
                            <SkillsName>Redux</SkillsName>
                        </Skills>

                        <Skills>
                            <SkillsImg src={socket} alt="socket"/>
                            <SkillsName>Socket</SkillsName>
                        </Skills>
                        <Skills>
                            <SkillsImg src={fontAwesome} alt="fontAwesome"/>
                            <SkillsName>Font Awesome</SkillsName>
                        </Skills>

                        <Skills>
                            <SkillsImg src={s3} alt="s3"/>
                            <SkillsName>S3</SkillsName>
                        </Skills>

                        <Skills>
                            <SkillsImg src={sqltabs} alt="sqltabs"/>
                            <SkillsName>SQL Tabs</SkillsName>
                        </Skills>
                        <Skills>
                            <SkillsImg src={git} alt="git"/>
                            <SkillsName>Git</SkillsName>
                        </Skills>
                        <Skills>
                            <SkillsImg src={postman} alt="postman"/>
                            <SkillsName>Postman</SkillsName>
                        </Skills>
                        <Skills>
                            <SkillsImg src={materialui} alt="materialui"/>
                            <SkillsName>Material UI</SkillsName>
                        </Skills>
                        <Skills>
                            <SkillsImg src={stripe} alt="stripe"/>
                            <SkillsName>Stripe</SkillsName>
                        </Skills>
                    </MiniSkillsHolder>                    
                </SkillsHolder>
                
            </AboutBody>
        )
    }
}

export default About 

const  AboutBody = styled.div`
    background: #585563;
    height: 100%;
    min-height: 100vh;
    display:flex;
    flex-direction:column;
    align-items:center;    
`

const ProfileImgHolder = styled.div`
    display:flex;
    margin-top:100px;
    justify-content:space-evenly;
    width:90%;
    flex-wrap:wrap;
    @media screen and (min-height:800px){
        margin-top:120px;
    }
`

const ProfilePic = styled.img`
    width:400px;
    height:300px;
    border-radius:10px;
    @media screen and (max-width:1200px){
        width:350px;
        height:250px;
    }
    box-shadow: 6px 6px 15px 3px black;
    @media screen and (max-width:320px){
        width:97%;
    }
`

const  Profile = styled.div`
    @media screen and (max-width:777px){
        margin-top:20px;
    }    
    @media screen and (max-width:470px){
        min-height:260px;
    }
    border-radius:10px;
    background:#7EBDC3;
    width:60%;
    padding:5px;
    min-height:140px;
    height:220px;
    margin-bottom:10px;
    text-align:center;
    box-shadow: 6px 6px 15px 3px black;
    @media screen and (min-width:850px) and (max-width:1015px){
        width:50%
    }
    @media screen and (min-width:777px) and (max-width:850px){
        width:40%;
    }
    @media screen and (max-width:321px){
        height:280px;
        min-height:280px;
    }
`

const RunnerImg = styled.img`
    position:absolute;
    height:45px;
    @media screen and (max-width:321px){
        height:35px;
    }
`

const SkillsHolder = styled.div`
    margin-top:20px;
    margin-bottom:50px;
    width:90%;
    border-radius:10px;
    background:white;
    padding:5px;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    box-shadow: 6px 6px 15px 3px black;
    @media screen and (max-width:321px){
        width: 85%;
    }
`

const SkillsHeader = styled.h1`
    font-size:100px;
    @media screen and (max-width:321px){
        font-size: 82px;
    }
`

const MiniSkillsHolder = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
`

const Skills = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:20px;
`

const SkillsImg = styled.img`
    height:150px;
    width:150px
`

const SkillsName = styled.p`
    font-size:30px;
    margin-top:5px;
`