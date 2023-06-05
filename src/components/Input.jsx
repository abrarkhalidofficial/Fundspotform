export function Input({ value, name, onChange }) {
  return (
    <div className="container__form__input">
      <label className="container__form__input__label">
        Loan Amount <span>*</span>
      </label>
      <div className="container__form__input__info">
        Minimum loan amount is $3000
      </div>
      <input
        className="container__form__input__field"
        type="number"
        value={value}
        name={name}
        onChange={onChange}
        placeholder="Enter loan amount"
      />
      <div className="container__form__input__error">
        Please enter a valid amount
      </div>
    </div>
  );
}
