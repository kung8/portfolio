import { useEffect } from 'react';
import { links } from '.';

export const RightPanel = ({ setSelected }) => {
    const addScrollListener = () => {
        const container = document.querySelector('.right-panel-container')
        container.addEventListener('scroll', () => {
            setTimeout(() => {
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
        });
    }

    useEffect(() => {
        addScrollListener();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='right-panel-container'>
            {links.filter(link => !!link.show).map((link, index) => <link.component key={index} id={index} />)}
        </div>
    )
}
