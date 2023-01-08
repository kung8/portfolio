import React, { useEffect, useState } from 'react';
import axios from 'axios';
import japan from '../Assets/japan.jpeg';

export default function Components() {
    const [compArr, updateCompArr] = useState([]);

    useEffect(() => {
        getComponentData();
    }, []);

    const getComponentData = async () => {
        const { data } = await axios.get('/api/component');
        updateCompArr(data);
    }

    const handleLink = (link) => {
        window.open(link, '_blank');
    }

    const mapComponentArr = () => {
        return compArr.map((item, index) => {
            const { image, label, link, className } = item;
            return (
                <div key={index} className={`card ${className}`} style={{ backgroundImage: `url(${image})` }}>
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