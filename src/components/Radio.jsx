export function Radio({ options, name, onChange, value }) {
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
              type="radio"
              name={name}
              checked={value === option}
              onChange={onChange}
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
