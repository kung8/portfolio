import { useState } from 'react';
import defaultDown from '../../Assets/default-down.png';
import defaultUp from '../../Assets/default-up.png';
import whiteDown from '../../Assets/white-down.png';
import whiteUp from '../../Assets/white-up.png';

const Item = ({ title, organization, dateRange, showEndDateOnly, images, bullets, chips, url, hosted, borderAdded }) => (
    <a href={url && url} target={url?.includes('kevinung8.com') || url?.includes('localhost') ? '_self' : '_blank'} rel="noreferrer" className={`item-container ${url ? 'clickable' : ''}`}>
        {images && images[0] ?
            <img className={`item-image ${borderAdded ? 'image-border' : ''}`} src={images[0]} alt={title} />
            :
            showEndDateOnly ? (
                <span className='item-end-date'>{dateRange[1]}</span>
            ) : (
                <span className='item-date-range'>{dateRange.join(' - ')}</span>
            )
        }
        <div className="item-details">
            {organization && <h6 className='item-organization'>{organization} {hosted && <span className="hosted-badge">H</span>}</h6>}
            {title && <h6 className='item-title'>{title}</h6>}
            {bullets?.length ? (
                <ul className="bullets">
                    {bullets.map((item, index) => <li key={index} className="bullet-item">{item}</li>)}
                </ul>
            ) : null}
            {chips?.length ? (
                <ul className='chips'>
                    {chips.map((item, index) => <li key={index} className="chip-item">{item}</li>)}
                </ul>
            ) : null}
        </div>
    </a>
);

export const Items = ({
    items,
    showMore,
    setShowMore,
    buttonLabels,
    showEndDateOnly = false,
    hasMore = true,
}) => {
    const [hovered, setHovered] = useState(false);
    const isLocalUrl = window.location.href.includes('localhost');

    const filteredItems = items.filter(item => {
        if (showMore) return true;
        return item.show;
    }).reverse();

    return (
        <>
            {filteredItems.map((item, index) => <Item key={index} {...{ ...item, url: isLocalUrl && item.localUrl ? item.localUrl : item.url, showEndDateOnly }} />)}
            {hasMore && (
                <div className='show-container'>
                    <span
                        className='show-label'
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? buttonLabels.hide : buttonLabels.show}
                    </span>
                    {showMore ?
                        <img className='show-arrow' src={hovered ? whiteUp : defaultUp} alt="up" />
                        :
                        <img className='show-arrow' src={hovered ? whiteDown : defaultDown} alt="down" />
                    }
                </div>
            )}
        </>
    )
}