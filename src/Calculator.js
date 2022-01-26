import React from "react";
import { useReducer } from "react";
import OperationButton from "./OperationButton";
import "./Calculator.scss";

export const ACTIONS = {
  ADD_FIRST_OPERAND: "first-number",
  ADD_SECOND_OPERAND: "second-number",
  CHOOSE_OPERATION: "choose-operation",
  CALCULATE: "evaluate",
};
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_FIRST_OPERAND:
      return {
        ...state,
        number1: payload,
      };

    case ACTIONS.ADD_SECOND_OPERAND:
      return {
        ...state,
        number2: payload,
      };
    case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        operation: payload.operation,
      };

    case ACTIONS.CALCULATE:
      return {
        ...state,
        output: evaluate(state),
      };
  }
}

function evaluate({ number1, number2, operation }) {
  if (isNaN(number1) || isNaN(number2)) {
    return "Please Enter Valid Input";
  }
  let computation = 0;
  switch (operation) {
    case "+":
      computation = number1 + number2;
      break;
    case "-":
      computation = number1 - number2;
      break;
    case "*":
      computation = number1 * number2;
      break;
    case "÷":
      computation = number1 / number2;
      break;
  }
  computation = computation.toFixed(2);
  return `${number1} ${operation} ${number2} = ${computation}`;
}

function Calculator() {
  const [{ number1, number2, operation, output }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculater-cont">
      <div className="calculater-cont-output">{output}</div>

      <div className="calculater-cont-input">
        <input
          className="input"
          type="number"
          name="number1"
          onInput={(event) => {
            let value = event.currentTarget.value;
            value = value === "" ? NaN : Number(value);
            dispatch({ type: ACTIONS.ADD_FIRST_OPERAND, payload: value });
          }}
        />
        <input
          type="number"
          name="number2"
          onInput={(event) => {
            let value = event.currentTarget.value;
            value = value === "" ? NaN : Number(value);
            dispatch({ type: ACTIONS.ADD_SECOND_OPERAND, payload: value });
          }}
        />
      </div>

      <div className="calculater-cont-operation">
        <OperationButton operation="+" label="Add" dispatch={dispatch} />
        <OperationButton operation="-" label="Subtract" dispatch={dispatch} />
        <OperationButton operation="*" label="Multiply" dispatch={dispatch} />
        <OperationButton operation="÷" label="Divide" dispatch={dispatch} />
      </div>
      <div></div>
    </div>
  );
}

export default Calculator;
