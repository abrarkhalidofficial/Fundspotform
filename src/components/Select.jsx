export function Select({
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
      <select
        className="container__form__input__field"
        value={value}
        name={name}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <div className="container__form__input__error">{error}</div>
    </div>
  );
}
