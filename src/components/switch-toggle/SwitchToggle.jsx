export const SwitchToggle = ({ enabled, label, onClick }) => (
    <div className="switch-toggle">
        <label
            className={`switch ${enabled ? 'enabled' : ''}`}
            onClick={onClick}
        >
            <div className={`slider ${enabled ? 'active' : ''}`} />
        </label>
        <span>{label}</span>
    </div>
);
