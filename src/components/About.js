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
                                <img src={frisbee} height='50px' style={{display:this.state.process !== 4 && 'none',position:'absolute',left:'0%'}} alt=""/>
                                <img src={running} height='45px' style={{display:this.state.process !== 3 && 'none',position:'absolute',left:'25%'}} alt=""/>
                                <img src={running} height='45px' style={{display:this.state.process !== 2 && 'none',position:'absolute',left:'50%'}} alt=""/>
                                <img src={running} height='45px' style={{display:this.state.process !== 1 && 'none',position:'absolute',left:'75%'}} alt=""/>
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
                    <SkillsHeader style={{}}>SKILLS</SkillsHeader>
                    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={react} style={{height:150,width:150}} alt="react"/>
                            <p style={{fontSize:30,marginTop:5}}>React</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={js} style={{height:150,width:150}} alt="js"/>
                            <p style={{fontSize:30,marginTop:5}}>JavaScript</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={express} style={{height:150,width:150}} alt="express"/>
                            <p style={{fontSize:30,marginTop:5}}>Express</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={node} style={{height:150,width:150}} alt="node"/>
                            <p style={{fontSize:30,marginTop:5}}>Node</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={postgres} style={{height:150,width:150}} alt="postgres"/>
                            <p style={{fontSize:30,marginTop:5}}>Postgres SQL</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={css} style={{height:150,width:150}} alt="css"/>
                            <p style={{fontSize:30,marginTop:5}}>CSS</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={html} style={{height:150,width:150}} alt="html"/>
                            <p style={{fontSize:30,marginTop:5}}>HTML</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={redux} style={{height:150,width:150}} alt="redux"/>
                            <p style={{fontSize:30,marginTop:5}}>Redux</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={socket} style={{height:150,width:150}} alt="socket"/>
                            <p style={{fontSize:30,marginTop:5}}>Socket</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={fontAwesome} style={{height:150,width:150}} alt="fontAwesome"/>
                            <p style={{fontSize:30,marginTop:5}}>Font Awesome</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={s3} style={{height:150,width:150}} alt="s3"/>
                            <p style={{fontSize:30,marginTop:5}}>S3</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={sqltabs} style={{height:150,width:150}} alt="sqltabs"/>
                            <p style={{fontSize:30,marginTop:5}}>SQL Tabs</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={git} style={{height:150,width:150}} alt="git"/>
                            <p style={{fontSize:30,marginTop:5}}>Git</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={postman} style={{height:150,width:150}} alt="postman"/>
                            <p style={{fontSize:30,marginTop:5}}>Postman</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={materialui} style={{height:150,width:150}} alt="materialui"/>
                            <p style={{fontSize:30,marginTop:5}}>Material UI</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={stripe} style={{height:150,width:150}} alt="stripe"/>
                            <p style={{fontSize:30,marginTop:5}}>Stripe</p>
                        </div>
                    </div>                    
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
    @media screen and (max-width:320px){
        height:270px;
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