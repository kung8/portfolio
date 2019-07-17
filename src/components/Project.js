import React, { Component } from 'react'

class Project extends Component {
    render() {
        const { name, id, url, tech, desc, domain, date, image,hosted } = this.props.project

        const mappedTech = tech.map(item => {
            return (
                <>
                    <li>{item}</li>
                </>
            )
        })

        return (
            <div id='project' key={id} style={{ borderRadius: '10px', boxShadow: '6px 6px 15px 3px black', background: 'white', width: '350px', height: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:120 }}>
                <div style={{ background: hosted ? (domain ?'lightblue' : 'lightgreen') : 'pink', width: '100%', height: '60px', borderRadius: '10px 10px 0px 0px', textAlign: 'center' }}>
                    <h1 style={{ letterSpacing:'0.035em',padding: 5 ,textShadow:'3px 1px 10px black',color:'white'}}>
                        {hosted ? <a style={{color:'white',textDecoration:'none'}} target='_blank' href={domain ? `https://${url}` : `http://${url}`}>{name}</a>:name}
                    </h1>
                </div>
                <hr style={{ width: '100%' }} />
                <img src={image} alt="website" height='200px' style={{ margin:10, maxWidth:'90%'}} />
                <hr style={{ width: '100%' }} />
                {/* <h3>Tech: {mappedTech}</h3> */}
                <div style={{ background: hosted ? (domain ?'lightblue' : 'lightgreen') : 'pink', width: '100%', height: '180px', borderRadius: '0px 0px 10px 10px' ,display:'flex',justifyContent:'center'}}>
                    <div style={{width:'90%',position:'relative'}}>
                        {/* <h3 style={{color:'white'}}>{date}</h3> */}
                        {/* <h3><a target='_blank' href={domain ? `https://${url}` : `http://${url}`}>{url}</a></h3> */}
                        <h4 style={{fontSize:25,textAlign:'center'}}>{desc}</h4>
                        <button style={{position:'absolute',bottom:10,width:150,height:50,left:'calc(175px - 85px)',fontSize:35,borderRadius:10,outline:'none'}}>Click Me</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project