import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import japan from '../Assets/japan.jpeg';

function Components(props) {
    const [compArr, updateCompArr] = useState([]);

    useEffect(() => {
        getComponentData();
    }, []);

    const getComponentData = async () => {
        const { data } = await axios.get('/api/component');
        updateCompArr(data);
    }

    const handleLink = (link) => {
        if (link.includes('http')) {
            window.open(link, '_blank');
        } else {
            props.history.push(link);
        }
    }

    const mapComponentArr = () => {
        return compArr.map((item, index) => {
            const { image, label, link, className } = item;
            return (
                <div key={index} className={`card ${className ? className : undefined}`} style={{ backgroundImage: `url(${image})` }}>
                    <h3 className="card-label">{label}</h3>
                    <button className="learn-more" onClick={() => handleLink(link)}>View</button>
                </div>
            )
        })
    }

    return (
        <div className="components-page flex" style={{ backgroundImage: `url(${japan})` }}>
            <div className="components-inner-container set-top p-rel">
                <h1>Components:</h1>
                <div className="components-container flex wrap">
                    {mapComponentArr()}
                </div>
            </div>
        </div>
    )
}

export default withRouter(Components); 
