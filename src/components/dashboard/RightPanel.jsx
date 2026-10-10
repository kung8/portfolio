import {  memo, useCallback, useEffect } from 'react';
import { links } from '.';

const RightPanelComponent = ({ setSelected }) => {
    const handleScroll = useCallback(() => {
        setTimeout(() => {
            const container = document.querySelector('.right-panel-container');
            if (!container) return;
            
            const position = container.scrollTop;
            const max = links.filter(link => link.show).length;
            let height = -80;
            for (let i = 0; i < max; i++) {
                const itemHeight = document.getElementById(i)?.getBoundingClientRect().height + 96;
                const bottom = height + itemHeight;

                if (height < position && bottom > position) {
                    setSelected(i);
                    break;
                } else {
                    height += itemHeight;
                }
            }
        }, 250);
    }, [setSelected]);

    useEffect(() => {
        const container = document.querySelector('.right-panel-container');
        if (!container) return;

        container.addEventListener('scroll', handleScroll);
        
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className='right-panel-container'>
            {links.filter(link => !!link.show).map((link, index) => (
                <link.component key={index} id={index} />
            ))}
        </div>
    )
}

export const RightPanel = memo(RightPanelComponent);
