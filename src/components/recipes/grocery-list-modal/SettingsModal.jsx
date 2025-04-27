import closeBtn from '../../../Assets/x.png';
import { getStartingDay } from '../utils';

export const SettingsModal = ({
    closeModal,
    handleApply,
    setStartingDay,
    startingDay,
}) => {
    const days = [
        { label: 'Sun', value: 'sunday' },
        { label: 'Mon', value: 'monday' },
        { label: 'Tue', value: 'tuesday' },
        { label: 'Wed', value: 'wednesday' },
        { label: 'Thu', value: 'thursday' },
        { label: 'Fri', value: 'friday' },
        { label: 'Sat', value: 'saturday' }
    ];

    return (
        <div className="settings-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Settings</h3>
                    <img src={closeBtn} alt="close" onClick={closeModal} />
                </div>
                <div className="modal-body">
                    <h4 className="section-heading">Starting Day</h4>
                    <ul className="starting-day-checklist">
                        {days.map(({ label, value }) => (
                            <li
                                key={value}
                                className={`starting-day-option ${value === startingDay ? 'selected-day' : ''}`}
                                onClick={() => setStartingDay(value)}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={closeModal}>Cancel</button>
                    <button className="action-btn" onClick={handleApply} disabled={startingDay === getStartingDay()}>Apply</button>
                </div>
            </div>
        </div>
    )
};