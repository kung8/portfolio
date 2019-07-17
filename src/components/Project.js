import React, { Component } from 'react'
import IndProject from './IndProject'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectProject} from '../Ducks/reducer'

const target = '_blank'

class Project extends Component {
    state={
        isExpanded:null,
        isSelected:false
    }

    async expand(project){
        const {name} = project
        await this.props.selectProject(project)
        this.props.history.push(`/projects/${name}`)
    }

    render() {
        console.log(this.props)
        // const {isExpanded,isSelected} = this.state
        
        const { name, url, desc, domain, image,hosted } = this.props.project

        const hosting = hosted ? (domain ?'lightblue' : 'lightgreen') : 'pink'

        return (
            <>
            <ProjectBody>
                <ProjNameHolder style={{ background: hosting }}>
                    <ProjName>
                        {hosted ? 
                            <LinkName  target={target} 
                                rel="noopener noreferrer" 
                                href={domain ? `https://${url}`:`http://${url}`}>{name}</LinkName>
                             :
                             name}
                    </ProjName>
                </ProjNameHolder>
                <HR/>
                <Img src={image[0]} alt="website"/>
                <HR/>
                <DescTextHolder style={{ background: hosting}}>
                    <div style={{width:'90%',position:'relative'}}>
                        {/* <h3 style={{color:'white'}}>{date}</h3> */}
                        <Text>{desc}</Text>
                        <Button onClick={()=>this.expand(this.props.project)}>Click Me</Button>
                    </div>
                </DescTextHolder>
            </ProjectBody>
            </>
        )
    }
}

export default withRouter(connect(null,{selectProject})(Project))


const ProjectBody = styled.div`
    border-radius: 10px;
    box-shadow: 6px 6px 15px 3px black;
    background: white;
    width: 350px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-ttems: center;
    margin-top:120px;
`

const ProjNameHolder = styled.div`
    width: 100%;
    height: 60px;
    border-radius: 10px 10px 0px 0px;
    text-align: center
`

const ProjName = styled.h1`
    letter-spacing:0.035em;
    padding: 5px ;
    text-shadow:3px 1px 10px black;
    color:white;
`

const LinkName = styled.a`
    color:white;
    text-decoration:none
`

const HR = styled.hr`
    width:100%;
`

const Img = styled.img`
    height:200px; 
    margin:10px; 
    max-width:90%;
`

const DescTextHolder = styled.div`
    width: 100%;
    height: 180px;
    border-radius: 0px 0px 10px 10px;
    display:flex;
    justify-content:center
`

const Text = styled.h4`
    font-size:25px;
    text-align:center;
`

const Button = styled.button`
    position:absolute;
    bottom:10px;
    width:150px;
    height:50px;
    left:calc(175px - 85px);
    font-size:35px;
    border-radius:10px;
    outline:none;
    background:black;
    color:white;
`