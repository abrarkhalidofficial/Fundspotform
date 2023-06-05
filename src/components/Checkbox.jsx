import { useEffect, useState } from "react";

export function Checkbox({ options, value, name, onChange }) {
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
        Loan Amount <span>*</span>
      </label>
      <div className="container__form__input__info">
        Minimum loan amount is $3000
      </div>
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
      <div className="container__form__input__error">
        Please enter a valid amount
      </div>
    </div>
  );
}
