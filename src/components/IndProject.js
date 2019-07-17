import React , {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

function IndProject (props){
        let mappedTech
        if(Object.keys(props.selectedProject).length === 0){
            return <Redirect to='/projects'/>
        } else {
            const {name,date,desc,image,tech,url} = props.selectedProject
    
            mappedTech = tech.map((item,index) => {
                return (
                    <div key={index}>
                        <li >{item}</li>
                    </div>
                )
            })
                    return(
                        <div style={{marginTop:120}}>
                            <h1>{name}</h1>
                            <h3>{date}</h3>
                            <h3>{desc}</h3>
                            full description
                            <h3>{url}</h3>
                            more pictures
                            <img src={image}/>
                            <button>Previous</button>
                            <button>Next</button>
                            {mappedTech}
                            <button>View Website</button>
                        </div>
                    )

        }

    }

export default connect(reduxState=>reduxState)(IndProject) 