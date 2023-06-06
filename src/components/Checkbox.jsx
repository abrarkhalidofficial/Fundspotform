import { useEffect, useState } from "react";

export function Checkbox({
  options,
  name,
  onChange,
  value,
  label,
  info,
  error,
  required,
}) {
  const [checked, setChecked] = useState(
    options.map((option) => option === value) || []
  );
  const handleChange = (e) => {
    if (e.target.checked) {
      setChecked([...checked, e.target.value]);
    } else {
      setChecked(checked.filter((item) => item !== e.target.value));
    }
  };

  useEffect(() => {
    onChange({ target: { value: checked, name } });
  }, [checked]);

  return (
    <div className="container__form__input">
      <label className="container__form__input__label">
        {label} {required && <span>*</span>}
      </label>
      {info && <div className="container__form__input__info">{info}</div>}
      <div className="container__form__input__options">
        {options.map((option) => (
          <label key={option} className="container__form__input__option">
            <input
              type="checkbox"
              checked={checked.includes(option)}
              onChange={handleChange}
              value={option}
            />
            <div className="container__form__input__option__text">{option}</div>
          </label>
        ))}
      </div>
      <div className="container__form__input__error">{error}</div>
    </div>
  );
}
