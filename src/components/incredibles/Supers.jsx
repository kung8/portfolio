// import { useEffect, useState } from 'react';
// import { useGetData } from '../../hooks';

// export default function Supers() {
//     const [selected, setSelected] = useState(0);
//     const { data: heroes, isFetched } = useGetData('heroes');

//     useEffect(() => {
//         handleTransition(heroes);
//         // eslint-disable-next-line
//     }, [isFetched])

//     const handleTransition = (data) => {
//         const interval = setInterval(async () => {
//             if (data?.length > 0) {
//                 await addInterval(data);
//                 clearInterval(interval);
//             }
//         }, 1000);
//     }

//     const addInterval = async (data) => {
//         const prototype = document.querySelector('.prototype-termination');
//         const superhero = document.querySelector('.superhero-termination');

//         for (let i = 0; i < data.length - 1; i++) {
//             setTimeout(() => {
//                 setSelected(i);
//                 // prototype.classList.add('visible-none');
//                 // superhero.classList.add('visible-none');
//                 if (superhero && selected === 0 && data[selected] && data[selected].terminated) {
//                     setTimeout(() => {
//                         superhero.classList.remove('visible-none');
//                     }, 500 * i);
//                 }

//                 const { terminated } = data[i];
//                 if (terminated) {
//                     setTimeout(() => {
//                         prototype.classList.add('visible-none');
//                         superhero.classList.remove('visible-none');
//                     }, 500 * i)
//                 } else {
//                     setTimeout(() => {
//                         superhero.classList.add('visible-none');
//                         prototype.classList.remove('visible-none');
//                     }, 500 * i)
//                 }
//             }, 1500 * i)
//         }

//     }

//     const mapHeroes = () => {
//         if (heroes?.length > 0 && heroes?.[selected]) {
//             const { name, image, power, omnidroid } = heroes[selected];
//             const { img, version, feature } = omnidroid;
//             return (
//                 <div className="kronos-screen flex">
//                     <div className="opponent-container">
//                         <div className="top-part">
//                             <div className="opponent-top-banner">
//                                 <h2 className="opponent-label">Opponent</h2>
//                                 {/* <div className="threat-rating">Threat Rating</div> */}
//                             </div>
//                             <img className="superhero-image" src={image} alt={name} />
//                         </div>
//                         <div className="superhero-info-container">
//                             <h3 className="superhero-name">{name}</h3>
//                             <p className="superhero-power-details"><strong>Powers:</strong> {power}</p>
//                         </div>
//                         <div className="termination superhero-termination visible-none">Terminated</div>
//                     </div>
//                     <div className="prototype-container">
//                         <div className="top-part">
//                             <div className="prototype-top-banner">
//                                 <h2 className="prototype-label">Prototype</h2>
//                             </div>
//                             <img className="prototype-image" src={img} alt={'prototype-version-' + version} />
//                         </div>
//                         <div className="prototype-info-container">
//                             <h3 className="prototype-name">Omnidroid <span className="version-label">v.</span>{version}</h3>
//                             <p className="prototype-power-details">{feature}</p>
//                         </div>
//                         <div className="termination prototype-termination visible-none">Terminated</div>
//                     </div>
//                 </div>
//             )
//         } else {
//             return null;
//         }
//     }

//     return mapHeroes();
// }

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Supers() {
    const [heroes, updateHeroes] = useState([]);
    const [selected, updateSelected] = useState(0);

    useEffect(() => {
        getHeroData();
        // eslint-disable-next-line
    }, [heroes]);

    const getHeroData = async () => {
        const { data } = await axios.get('/api/hero');
        await updateHeroes(data);
        handleTransition(data);
    }

    const handleTransition = (data) => {
        const interval = setInterval(async () => {
            if (data.length > 0) {
                await addInterval();
                clearInterval(interval);
            }
        }, 1000);
    }

    const addInterval = async () => {
        const prototype = document.querySelector('.prototype-termination');
        const superhero = document.querySelector('.superhero-termination');

        if (superhero && selected === 0 && heroes[selected] && heroes[selected].terminated) superhero.classList.remove('visible-none');

        let newSelected = selected + 1;

        if (heroes[newSelected]) {
            setTimeout(() => {
                const { terminated } = heroes[newSelected];
                if (terminated) {
                    prototype.classList.add('visible-none');
                    superhero.classList.remove('visible-none');
                } else {
                    superhero.classList.add('visible-none');
                    prototype.classList.remove('visible-none');
                }
            }, 350);

            const secondInterval = setInterval(async () => {
                if (newSelected < heroes.length && newSelected !== heroes.length) {
                    await updateSelected(newSelected);
                    clearInterval(secondInterval);
                }
            }, 500);
        }
    }

    const mapHeroes = () => {
        if (heroes.length > 0 && heroes[selected]) {
            const { name, image, power, omnidroid } = heroes[selected];
            const { img, version, feature } = omnidroid;
            return (
                <div className="kronos-screen flex">
                    <div className="opponent-container">
                        <div className="top-part">
                            <div className="opponent-top-banner">
                                <h2 className="opponent-label">Opponent</h2>
                                {/* <div className="threat-rating">Threat Rating</div> */}
                            </div>
                            <img className="superhero-image" src={image} alt={name} />
                        </div>
                        <div className="superhero-info-container">
                            <h3 className="superhero-name">{name}</h3>
                            <p className="superhero-power-details"><strong>Powers:</strong> {power}</p>
                        </div>
                        <div className="termination superhero-termination visible-none">Terminated</div>
                    </div>
                    <div className="prototype-container">
                        <div className="top-part">
                            <div className="prototype-top-banner">
                                <h2 className="prototype-label">Prototype</h2>
                            </div>
                            <img className="prototype-image" src={img} alt={'prototype-version-' + version} />
                        </div>
                        <div className="prototype-info-container">
                            <h3 className="prototype-name">Omnidroid <span className="version-label">v.</span>{version}</h3>
                            <p className="prototype-power-details">{feature}</p>
                        </div>
                        <div className="termination prototype-termination visible-none">Terminated</div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    return mapHeroes();
}