import { Checkbox } from "../components/Checkbox";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";
import { Radio } from "../components/Radio";
import { Select } from "../components/Select";
import { Textarea } from "../components/Textarea";
import { useState } from "react";

export default function Application() {
  const [steps, setSteps] = useState(0);

  const [form, setForm] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);

  return (
    <div className="container">
      <Link className="container__logo" to="/">
        <img
          src="https://res.cloudinary.com/dhg7c7ypc/image/upload/v1685972600/fund/vactor_carlfn.png"
          alt="logo"
        />
      </Link>
      <div className="container__progress">
        <div
          className="container__progress__bar"
          style={{ width: `${(steps / 5) * 100}%` }}
        />
      </div>
      <div className="container__form">
        {steps === 0 ? (
          <>
            <Input value={form.name} name="234234234" onChange={handleChange} />
            <Textarea
              value={form.nsdfasdfame}
              name="nsdfasdfame"
              onChange={handleChange}
            />
            <Select
              options={["Option 1", "Option 2", "Option 3"]}
              value={form.sdfsdf}
              name="sdfsdf"
              onChange={handleChange}
            />
            <Checkbox
              options={["Option 1", "Option 2", "Option 3"]}
              value={form.namasdfasdfe}
              name="namasdfasdfe"
              onChange={handleChange}
            />
            <Radio
              label="Radio"
              error="Error"
              info="Info"
              required={true}
              value={form.detaisdfdsafls}
              name="detaisdfdsafls"
              onChange={handleChange}
              options={["Option 1", "Option 2", "Option 3"]}
            />
          </>
        ) : steps === 1 ? (
          <></>
        ) : steps === 2 ? (
          <></>
        ) : steps === 3 ? (
          <></>
        ) : steps === 4 ? (
          <></>
        ) : steps === 5 ? (
          <></>
        ) : null}
        <button
          onClick={() => setSteps(steps + 1)}
          className="container__content__button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
