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

                <div style={{ background: 'linear-gradient(#bbbabb,lightgrey,#BBBABB)',minHeight:'100vh', display:'flex'}}>
                    <ProjectBody style={{marginTop: 120 }}>
                        <ProjNameHolder style={{ background: hosting}}>
                            <ProjName style={{ fontSize: 35 }}>{name} ({date})</ProjName>
                        </ProjNameHolder>
                        <HR />
                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Img src={image[this.state.current]} />
                            <button style={{ position: 'absolute', left: 10, top: 125 }} onClick={() => this.handlePrev(image)}><i className="fas fa-chevron-left" /></button>
                            <button style={{ position: 'absolute', right: 10, top: 125 }} onClick={() => this.handleNext(image)}><i className="fas fa-chevron-right" /></button>

                        </div>
                        <HR />
                        <DescTextHolder style={{ background: hosting }}>
                            <Text style={{marginBottom:10}}> {lessons}</Text>
                            <br />
                            {/* <h3>Tech:</h3> */}
                            {/* {mappedTech} */}
                            <Button><LinkName target='_blank'
                                rel="noopener noreferrer"
                                href={domain ? `https://${url}` : `http://${url}`}>Go to {url}</LinkName></Button>
                        </DescTextHolder>
                    </ProjectBody>
                </div>
            )

        }
    }

}

export default connect(reduxState => reduxState)(IndProject)


const ProjectBody = styled.div`
    border-radius: 10px;
    box-shadow: 6px 6px 15px 3px black;
    background: white;
    width: 600px;
    display: flex;
    flex-direction: column;
    margin:0 auto;
    // min-height:60vh;
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
    height:250px; 
    margin:10px; 
    max-width:90%;
    width:300px;
`

const DescTextHolder = styled.div`
    width: 100%;
    min-height: 350px;
    border-radius: 0px 0px 10px 10px;
    display:flex;
    flex-direction:column;
    position:relative;
`

const Text = styled.h4`
    font-size:20px;
    text-align:center;
    margin:0 auto;
    max-width:90%;
    padding:5px;
`

const Button = styled.button`
    position:absolute;
    bottom:10px;
    min-width:400px;
    height:60px;
    left:calc(325px - 200px);
    font-size:35px;
    border-radius:10px;
    outline:none;
    background:black;
    color:white;
    padding:5px;
`