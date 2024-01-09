import React, { useState } from "react";
import "./Input.css";

// Set requirements object format
type RequirementOptions = {
  description: string;
  validator: Function;
};

// Set input props
type TInputProps = {
  requirements: Array<RequirementOptions>;
};

const Input = (props: TInputProps) => {
  const requirements = props.requirements;
  const [passwordValue, setInputValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="password-component">
      <input
        type="password"
        onChange={(e) => handleOnChange(e)}
        aria-label="password-input"
      />
      <ul className="validations">
        {requirements.map((req) => {
          const { description, validator } = req;
          const isCorrect = validator(passwordValue);
          return (
            <li className="validation-item" key={description}>
              <div
                className="circle"
                style={{ backgroundColor: isCorrect && "green" }}
              >
                {isCorrect ? "✔" : "x"}
              </div>
              <span className="validation-text">{description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Input;
