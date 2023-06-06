export function Textarea({
  value,
  name,
  onChange,
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
      <div className="container__form__input__info">{info}</div>
      <textarea
        value={value}
        name={name}
        onChange={onChange}
        className="container__form__input__field"
        placeholder="Maximum 200 characters"
      />
      <div className="container__form__input__error">{error}</div>
    </div>
  );
}
