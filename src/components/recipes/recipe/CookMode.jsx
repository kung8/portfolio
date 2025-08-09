import { useState } from "react";
import { SwitchToggle } from "../../switch-toggle/SwitchToggle";
import { Slide, ToastContainer, toast } from 'react-toastify';

export const CookMode = () => {
    const [wakeLock, setWakeLock] = useState(null);

    const requestWakeLock = async () => {
        try {
            const newWakeLock = await navigator.wakeLock.request('screen');
            setWakeLock(newWakeLock);
            toast('Enabled Cook Mode', { className: 'success' });
        } catch (err) {
            console.error(`${err.name}, ${err.message}`);
        }
    }

    const releaseWakeLock = () => {
        if (wakeLock) {
            wakeLock.release();
            toast('Disabled Cook Mode', { className: 'info' });
            setWakeLock(null);
        }
    }

    return (
        <div className="cook-mode">
            <SwitchToggle
                enabled={wakeLock}
                label='Cook Mode'
                onClick={() => {
                    if (!wakeLock) {
                        requestWakeLock();
                    } else {
                        releaseWakeLock();
                    }
                }}
            />
            <ToastContainer
                position="top-right"
                hideProgressBar={true}
                closeOnClick={true}
                autoClose={1500}
                transition={Slide}
                draggable={true}
                draggablePercent={80}
            />
        </div>
    )
}

