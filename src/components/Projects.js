import React, { Component } from 'react'
import styled from 'styled-components'
import {storeScroll} from '../ScrollFn'

//Project Component
import Project from './Project'

//Pictures
import houser from '../Assets/Houser/Houser.png'
import wizard1 from '../Assets/Houser/Wizard1.png'
import wizard2 from '../Assets/Houser/Wizard2.png'
import wizard3 from '../Assets/Houser/Wizard3.png'

import helo from '../Assets/Helo/Helo.png'
import login from '../Assets/Helo/login.png'
import list from '../Assets/Helo/list.png'
import searchother from '../Assets/Helo/searchOther.png'
import searchown from '../Assets/Helo/searchOwn.png'
import createpost from '../Assets/Helo/createpost.png'

import marketin from '../Assets/Marketin/MarketIn.png'
import chats from '../Assets/Marketin/chats.png'
import contacts from '../Assets/Marketin/contacts.png'
import search from '../Assets/Marketin/search.png'
import services from '../Assets/Marketin/services.png'

import deadstock from '../Assets/Deadstock/DeadStock.png'
import community from '../Assets/Deadstock/community.png'
import chatlist from '../Assets/Deadstock/chatlist.png'
import favorites from '../Assets/Deadstock/favorites.png'
import friends from '../Assets/Deadstock/friends.png'
import profile from '../Assets/Deadstock/profile.png'

import chatterbox from '../Assets/Chatterbox/Chatterbox.png'
import sidebar from '../Assets/Chatterbox/sidebar.png'
import alllist from '../Assets/Chatterbox/alllist.png'
import editgroup from '../Assets/Chatterbox/editgroup.png'
import editprofile from '../Assets/Chatterbox/editprofile.png'
import indchat from '../Assets/Chatterbox/indchat.png'
import loginchat from '../Assets/Chatterbox/loginchat.png'
import otherprofile from '../Assets/Chatterbox/otherprofile.png'
import searchuser from '../Assets/Chatterbox/searchuser.png'
import groupchat from '../Assets/Chatterbox/groupchat.png'
import startchat from '../Assets/Chatterbox/startchat.png'

const Houser = { id: 1, name: 'Houser', url: null, tech: ['React-Router-Dom', 'Redux'], image: [houser,wizard1,wizard2,wizard3], desc: 'Housing display app to practice redux and wizard forms', domain: false, date: 'Feb 2019', hosted: false,lessons:"Some valuable things that I learned from this project was understanding the management of state and props using Redux as I had to reconfigure my components from just passing props between each other. I have gotten a better grasp of state and props and Redux. I had the chance to learn about wizards (no not about J.K. Rowling's magical world) but the set up for a form to be filled out using routing.Through vanilla CSS, I replicated the style-design of this project." }
const Helo = { id: 2, name: 'Helo', url: null, tech: ['React-Router-Dom', 'Bcryptjs', 'Express-Session', 'Redux', 'Redux-Persist'], image: [helo,login,list,searchother,searchown,createpost], desc: 'Blog posting app practicing authentication, redux, session & routing', domain: false, date: 'Feb 2019', hosted: false,lessons:"I learn about linear-gradients and other basic styling techniques can help embellish the application. This was another project that I had replicated the styling based off another site.I incorporated additional technologies including bcryptjs for authentication, express-session for keeping a user on session, redux and redux-persist to pass state/props between components without having to worry about refreshing the page."}
const MarketIn = { id: 3, name: 'MarketIn', url: 'marketin.dev', tech: ['Sockets', 'Stripe', '3rd Party API', 'Amazon S3','Dropzone', 'Express-Session','Bcryptjs','Redux', 'Redux-Persist', 'React-Router-Dom'], image: [marketin,chats,contacts,search,services], desc: 'Professional portfolio SPA combined with an ecommerce twist', domain: true, date: 'Mar 2019', hosted: true, lessons:"I really enjoyed applying all these different technologies. My favorite parts were taking a desired goal such as the Chat component and figuring out how to display the different colors with the date and time formatted how I wanted it and learning how to use this.props.match and this.props.history. After the project, I learned that I unnecessarily used Redux in places that I didn't need to use it.This app was my first full-stack app which could definitely be improved upon but it was where I solidified my understanding of some foundational concepts. The main takeaways from this project would probably be understanding the flow of data and learning how to console log correctly." }
const DeadStock = { id: 4, name: 'DeadStock', url: '159.65.98.93:8080', tech: ['Sockets', 'Material-UI', 'AWS S3'], image: [deadstock,community,chatlist,favorites,friends,profile], desc: 'A shoe collection social media SPA', domain: false, date: 'Apr 2019', hosted: true ,lessons:"This group project was an incredible experience. I was blessed to work with Joseph Hamblin, Matias Perez, and Samantha Jeet. I learned a ton about working with others especially having to interact with different ways of coding and how to adapt my way. There were differences in styling and coding methods but we learned to trust each other.This was my first team full-stack app. I used most of the same technologies from previous projects but had a chance to further dive into Amazon S3 and Sockets. I took ownership of the image uploads and the chat functionality. I enjoyed learning Chartjs which working with the data was a little tricky."}
const Chatterbox = { id: 5, name: 'Chatterbox', url: 'thechatterbox.fun', tech: ['Sockets', 'Styled-Components'], image: [groupchat,chatterbox,sidebar,alllist,editgroup,editprofile,indchat,loginchat,otherprofile,searchuser,startchat], desc: 'SPA chat app to connect individuals and groups to practice real-live updates', domain: true, date: 'Jun 2019', hosted: true ,lessons:"Some valuable things that I learned from this project was Sockets cannot be invoked in multiple components and Styled-Components rock! There were issues with my chat functionality initially due to its unexpected behavior of establishing three separate socket instances so it was not sending the message to the proper connection."}

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            projects: [Chatterbox,DeadStock,MarketIn,Helo,Houser],
            isBlueSelected: true,
            isGreenSelected:true,
            isYellowSelected:true
        }
    }

    render() {
        storeScroll()
        const {isBlueSelected,isGreenSelected,isYellowSelected} = this.state

        const mappedProj = this.state.projects.filter(project=>{
            const {hosted,domain} = project
            if(domain && hosted && isBlueSelected) { return project}
            if(!domain && hosted && isGreenSelected) { return project}
            if(!domain && !hosted && isYellowSelected) { return project}
        }).map(project => {
            return (
                <Project key={project.id} project={project} />
            )
        })

        return (
            <ProjBody>
                <Mapped>
                    {mappedProj}
                </Mapped>
                <Legend style={{marginTop:!isBlueSelected && !isGreenSelected && !isYellowSelected && 120}}>
                    <h1>Legend</h1>
                    <KeyHolder onClick={()=>this.setState({isBlueSelected:!isBlueSelected})} style={{ top: 45 }}>
                        <Key  style={{ background: '#7EBDC3' }}></Key>  <Text style={{textDecoration:!isBlueSelected && 'line-through'}}>Hosted with Domain</Text>
                    </KeyHolder>
                    <KeyHolder onClick={()=>this.setState({isGreenSelected:!isGreenSelected})} style={{ top: 105 }}>
                        <Key style={{ background: '#C6DEA6' }}></Key> <Text style={{textDecoration:!isGreenSelected && 'line-through'}}>Hosted, No Domain</Text>
                    </KeyHolder>
                    <KeyHolder onClick={()=>this.setState({isYellowSelected:!isYellowSelected})} style={{ top: 165 }}>
                        <Key style={{ background: '#F6E27F' }}></Key> <Text style={{textDecoration:!isYellowSelected && 'line-through'}}>Not Hosted</Text>
                    </KeyHolder>
                </Legend>
            </ProjBody>
        )
    }
}

export default Projects

const ProjBody = styled.div`
    background:#585563;
    height: 100v;
    min-height: 100vh;
    overflow:hidden;
    width:100vw;
`

const Mapped = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    min-width: 350px;
    max-width: 80%;
    align-items: center;
    margin: 0 auto;
    @media screen and (max-width:321px){
        min-width:300px
    }
`

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
    background: #9BBEC7;
    height: 50px;
    width: 50px;
`

const Text = styled.span`
    margin-left:10px;
    font-size:20px;
`



