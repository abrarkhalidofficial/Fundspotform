export function Textarea({ value, name, onChange }) {
  return (
    <div className="container__form__input">
      <label className="container__form__input__label">
        Business Loan Details <span>*</span>
      </label>
      <div className="container__form__input__info">
        Please describe your use for the funds.
      </div>
      <textarea
        value={value}
        name={name}
        onChange={onChange}
        className="container__form__input__field"
        placeholder="Maximum 200 characters"
      />
      <div className="container__form__input__error">
        This is a required field.
      </div>
    </div>
  );
}
