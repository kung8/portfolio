import React, { Component } from 'react'
import styled from 'styled-components'
import {storeScroll} from '../ScrollFn'

//Project Component
import Project from './Project'

//Pictures
import deadstock from '../Assets/DeadStock.png'
import marketin from '../Assets/MarketIn.png'
import chatterbox from '../Assets/Chatterbox.png'
import helo from '../Assets/Helo.png'
import houser from '../Assets/Houser.png'

const Houser = { id: 1, name: 'Houser', url: null, tech: ['React-Router-Dom', 'Redux'], image: houser, desc: 'Housing display app to practice redux and wizard forms', domain: false, date: 'Feb 2019', hosted: false }
const Helo = { id: 2, name: 'Helo', url: null, tech: ['React-Router-Dom', 'Bcrypt', 'Express-Session', 'Redux', 'Redux-Persist'], image: helo, desc: 'Blog posting app practicing authentication, redux, session & routing', domain: false, date: 'Feb 2019', hosted: false }
const MarketIn = { id: 3, name: 'MarketIn', url: 'marketin.dev', tech: ['Sockets', 'Stripe', '3rd Party API', 'AWS S3', 'Redux', 'Redux-Persist', 'React-Router-Dom'], image: marketin, desc: 'Professional portfolio SPA combined with an ecommerce twist', domain: true, date: 'Mar 2019', hosted: true }
const DeadStock = { id: 4, name: 'DeadStock', url: '159.65.98.93:8080', tech: ['Sockets', 'Material-UI', 'AWS S3'], image: deadstock, desc: 'A shoe collection social media SPA', domain: false, date: 'Apr 2019', hosted: true }
const ChatterBox = { id: 5, name: 'ChatterBox', url: 'thechatterbox.fun', tech: ['Sockets', 'Styled-Components'], image: chatterbox, desc: 'SPA chat app to connect individuals and groups to practice real-live updates', domain: true, date: 'Jun 2019', hosted: true }

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            projects: [ChatterBox,DeadStock,MarketIn,Helo,Houser],
            isBlueSelected: true,
            isGreenSelected:true,
            isPinkSelected:true
        }
    }

    render() {
        storeScroll()

        const {isBlueSelected,isGreenSelected,isPinkSelected} = this.state

        const mappedProj = this.state.projects.filter(project=>{
            const {hosted,domain} = project
            if(domain && hosted && isBlueSelected) { return project}
            if(!domain && hosted && isGreenSelected) { return project}
            if(!domain && !hosted && isPinkSelected) { return project}
        }).map(project => {
            return (
                <Project project={project} />
            )
        })

        return (
            <div style={{ background: 'linear-gradient(#bbbabb,lightgrey,#BBBABB)', height: '100%', minHeight: '100vh' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', minWidth: '350px', maxWidth: '80%', alignItems: 'center', margin: '0 auto' }}>
                    {mappedProj}
                </div>
                <Legend style={{marginTop:!isBlueSelected && !isGreenSelected && !isPinkSelected && 120}}>
                    <h1>Legend</h1>
                    <KeyHolder onClick={()=>this.setState({isBlueSelected:!this.state.isBlueSelected})} style={{ top: 45 }}>
                        <Key  style={{ background: 'lightblue' }}></Key>  <Text style={{textDecoration:!isBlueSelected && 'line-through'}}>Hosted with Domain</Text>
                    </KeyHolder>
                    <KeyHolder onClick={()=>this.setState({isGreenSelected:!this.state.isGreenSelected})} style={{ top: 105 }}>
                        <Key style={{ background: 'lightgreen' }}></Key> <Text style={{textDecoration:!isGreenSelected && 'line-through'}}>Hosted, No Domain</Text>
                    </KeyHolder>
                    <KeyHolder onClick={()=>this.setState({isPinkSelected:!this.state.isPinkSelected})} style={{ top: 165 }}>
                        <Key style={{ background: 'pink' }}></Key> <Text style={{textDecoration:!isPinkSelected && 'line-through'}}>Not Hosted</Text>
                    </KeyHolder>
                </Legend>
            </div>
        )
    }
}

export default Projects

const Legend = styled.div`
    box-shadow: 6px 6px 15px 3px black;
    border-radius:10px;
    position:relative;
    margin-bottom:50px;
    margin-left:calc(50% - 125px);
    margin-top:40px;
    background:white;
    height:230px;
    width:250px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const KeyHolder = styled.div`
    position: absolute;
    left: 10px;
    display: flex;
    align-items: center;
`

const Key = styled.div`
    border-radius: 10px;
    background: lightblue;
    height: 50px;
    width: 50px;
`

const Text = styled.span`
    margin-left:10px;
    font-size:20px;
`



