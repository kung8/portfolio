export const SwitchToggle = ({ className = '', enabled, label, onClick }) => (
    <div className={`switch-toggle ${className}`}>
        <label
            className={`switch ${enabled ? 'enabled' : ''}`}
            onClick={onClick}
        >
            <div className={`slider ${enabled ? 'active' : ''}`} />
        </label>
        <span className={`switch-label`}>{label}</span>
    </div>
);
