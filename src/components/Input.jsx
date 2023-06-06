export function Input({
  value,
  name,
  onChange,
  label,
  info,
  error,
  required,
  placeholder,
}) {
  return (
    <div className="container__form__input">
      <label className="container__form__input__label">
        {label} {required && <span>*</span>}
      </label>
      {info && <div className="container__form__input__info">{info}</div>}
      <input
        className="container__form__input__field"
        type="number"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className="container__form__input__error">{error}</div>
    </div>
  );
}
