interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

export default function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <div className="toggle">
      <span className="toggle-text">{label}</span>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
}