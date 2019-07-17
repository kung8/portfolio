import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { storeScroll } from '../ScrollFn'
import styled from 'styled-components'

class IndProject extends Component {
    constructor() {
        super()
        this.state = {
            current: 0
        }
    }

    handlePrev(image) {
        let last = image.length - 1
        if (this.state.current > 0) {
            this.setState({
                current: this.state.current - 1
            })
        } else {
            this.setState({
                current: last
            })
        }
    }

    handleNext(image) {
        let last = image.length - 1
        if (this.state.current === last) {
            this.setState({
                current: 0
            })
        } else {
            this.setState({
                current: this.state.current + 1
            })
        }
    }

    render() {
        storeScroll()

        let mappedTech
        if (Object.keys(this.props.selectedProject).length === 0) {
            return <Redirect to='/projects' />
        } else {
            const { name, date, image, tech, url, lessons, hosted, domain } = this.props.selectedProject

            mappedTech = tech.map((item, index) => {
                return (
                    <div key={index}>
                        <li >{item}</li>
                    </div>
                )
            })

            const hosting = hosted ? (domain ? 'lightblue' : 'lightgreen') : 'pink'


            return (

                <BigBody>
                    <ProjectBody style={{marginTop: 100 }}>
                        <ProjNameHolder style={{ background: hosting}}>
                            <ProjName>{name} ({date})</ProjName>
                        </ProjNameHolder>
                        <HR />
                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Img src={image[this.state.current]} />
                            <Left onClick={() => this.handlePrev(image)}>
                                <Icon className="fas fa-chevron-left" />
                            </Left>
                            <Right onClick={() => this.handleNext(image)}>
                                <Icon className="fas fa-chevron-right" />
                            </Right>

                        </div>
                        <HR />
                        <DescTextHolder style={{ background: hosting }}>
                            <Text style={{marginBottom:10}}> {lessons}</Text>
                            {/* <h3>Tech:</h3> */}
                            {/* {mappedTech} */}
                            <Button><LinkName target='_blank'
                                rel="noopener noreferrer"
                                href={domain ? `https://${url}` : `http://${url}`}>Go to {url}</LinkName></Button>
                        </DescTextHolder>
                    </ProjectBody>
                </BigBody>
            )

        }
    }

}

export default connect(reduxState => reduxState)(IndProject)

const BigBody = styled.div`
    background: linear-gradient(#bbbabb,lightgrey,#BBBABB);
    min-height:100vh;
    display:flex;
    min-width:100vw;
    width:100%;
    overflow-x:hidden;
    
`

const ProjectBody = styled.div`
    border-radius: 10px;
    box-shadow: 6px 6px 15px 3px black;
    background: white;
    width: 600px;
    display: flex;
    min-height:680px;
    flex-direction: column;
    margin:10px auto;
    @media screen and (max-width:700px){
        width:95%;        
    }
    @media screen and (min-height:1024px) and (max-height:1366px){
        height:720px;

    }
    @media screen and (min-height:1366px){
        height:900px;
    }

`

const ProjNameHolder = styled.div`
    width: 100%;
    height: 60px;
    border-radius: 10px 10px 0px 0px;
    display:flex;
    align-items:center;
    justify-content:center;
    @media screen and (min-height:1366px){
        height:100px;
    }
`

const ProjName = styled.h1`
    letter-spacing:0.035em;
    padding: 5px ;
    text-shadow:3px 1px 10px black;
    color:white;
    font-size:35px;
    @media screen and (max-width:415px){
        font-size:25px;
    }
    @media screen and (min-height:1366px){
        font-size:40px;
    }
`

const LinkName = styled.a`
    color:white;
    text-decoration:none
`

const HR = styled.hr`
    width:100%;
`

const Img = styled.img`
    height:250px; 
    margin:10px; 
    max-width:90%;
    width:300px;
    @media screen and (min-height:1366px){
        height:400px;
        width:90%;
    }
`

const Left = styled.button`
    position: absolute;
    left: 10px;
    top: 125px;
    outline:none;
    @media screen and (min-height:1366px){
        top:200px;
    }
`

const Right = styled.button`
    position: absolute;
    right: 10px;
    top: 125px;
    outline:none;
    @media screen and (min-height:1366px){
        top:200px;
    }
`

const Icon = styled.i`
    font-size:35px;
    @media screen and (min-height:1366px){
        font-size:60px;
    }
`

const DescTextHolder = styled.div`
    width: 100%;
    min-height: 350px;
    border-radius: 0px 0px 10px 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    @media screen and (min-height:1366px){
        height:900px;
    }
`

const Text = styled.h4`
    font-size:20px;
    text-align:center;
    margin:0 auto;
    max-width:90%;
    padding:5px;
`

const Button = styled.button`
    min-width:400px;
    height:60px;
    margin-bottom:10px;
    font-size:35px;
    border-radius:10px;
    outline:none;
    background:black;
    color:white;
    padding:5px;
    @media screen and (max-width:415px){
        min-width:280px;
        font-size:20px;
    }
`