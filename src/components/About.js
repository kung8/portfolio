import React, {Component} from 'react'
import styled from 'styled-components'
import {images} from './TechImages'
const {css,express,fontAwesome,git,html,javascript,js,node, postman,redux, s3,socket,stripe,materialui,postgres,react,sqltabs} = images

class About extends Component {
    render(){
        return(
            <AboutBody>
                <Profile>
                    <p>
                        Hello my name is Kevin Ung. I am an aspiring web developer who loves the exciting challenge of problem solving and passionate about learning both formally and informally. I am always down to play Ultimate Frisbee. I love all types of music -- my favorite would have to be acoustic covers of popular songs. Cooking is no fun unless you are cooking for more than yourself, so let me know and I will make you something. I wished I had the chance to travel more but I have loved exploring different parts of the world.  
                    </p>
                </Profile>
                
                <div style={{marginTop:10,marginBottom:50,width:'90%',borderRadius:10,background:'white',padding:5,display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
                    <h1 style={{fontSize:100}}>SKILLS</h1>
                    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={css} style={{height:150,width:150}} alt="css"/>
                            <p style={{fontSize:35,marginTop:5}}>CSS</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={express} style={{height:150,width:150}} alt="express"/>
                            <p style={{fontSize:35,marginTop:5}}>Express</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={fontAwesome} style={{height:150,width:150}} alt="fontAwesome"/>
                            <p style={{fontSize:30,marginTop:5}}>Font Awesome</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={s3} style={{height:150,width:150}} alt="s3"/>
                            <p style={{fontSize:35,marginTop:5}}>S3</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={sqltabs} style={{height:150,width:150}} alt="sqltabs"/>
                            <p style={{fontSize:35,marginTop:5}}>SQL Tabs</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={react} style={{height:150,width:150}} alt="react"/>
                            <p style={{fontSize:35,marginTop:5}}>React</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={postgres} style={{height:150,width:150}} alt="postgres"/>
                            <p style={{fontSize:35,marginTop:5}}>Postgres SQL</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={git} style={{height:150,width:150}} alt="git"/>
                            <p style={{fontSize:35,marginTop:5}}>Git</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={html} style={{height:150,width:150}} alt="html"/>
                            <p style={{fontSize:35,marginTop:5}}>HTML</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={js} style={{height:150,width:150}} alt="js"/>
                            <p style={{fontSize:35,marginTop:5}}>JavaScript</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={node} style={{height:150,width:150}} alt="node"/>
                            <p style={{fontSize:35,marginTop:5}}>Node</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={postman} style={{height:150,width:150}} alt="postman"/>
                            <p style={{fontSize:35,marginTop:5}}>Postman</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={redux} style={{height:150,width:150}} alt="redux"/>
                            <p style={{fontSize:35,marginTop:5}}>Redux</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={socket} style={{height:150,width:150}} alt="socket"/>
                            <p style={{fontSize:35,marginTop:5}}>Socket</p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={materialui} style={{height:150,width:150}} alt="materialui"/>
                            <p style={{fontSize:35,marginTop:5}}>Material UI</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:20}}>
                            <img src={stripe} style={{height:150,width:150}} alt="stripe"/>
                            <p style={{fontSize:35,marginTop:5}}>Stripe</p>
                        </div>
                    </div>                    
                </div>
                
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
const  Profile = styled.div`
    width:90%;
    border-radius:10px;
    background:#7EBDC3;
    margin-top:100px;
    padding:5px;
    @media screen and (min-height:800px){
        margin-top:120px;
    }
`