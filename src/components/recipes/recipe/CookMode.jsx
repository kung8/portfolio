import { useState } from "react";

import { toast } from 'react-toastify';

import { SwitchToggle } from "../../switch-toggle/SwitchToggle";

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
        </div>
    )
}

