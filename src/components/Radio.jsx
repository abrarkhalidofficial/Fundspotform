export function Radio({
  options,
  name,
  onChange,
  value,
  label,
  info,
  error,
  required,
}) {
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
              type="radio"
              name={name}
              checked={value === option}
              onChange={onChange}
            />
            <div className="container__form__input__option__text">{option}</div>
          </label>
        ))}
      </div>
      <div className="container__form__input__error">{error}</div>
    </div>
  );
}
