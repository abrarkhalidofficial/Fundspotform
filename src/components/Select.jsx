export function Select({ options, value, name, onChange }) {
  return (
    <div className="container__form__input">
      <label className="container__form__input__label">
        Loan Amount <span>*</span>
      </label>
      <div className="container__form__input__info">
        Minimum loan amount is $3000
      </div>
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
      <div className="container__form__input__error">
        Please enter a valid amount
      </div>
    </div>
  );
}
