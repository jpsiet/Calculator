import { ACTIONS } from "./Calculator";
import React from "react";
export default function OperationButton({ dispatch, operation, label }) {
  // send operation and calucalte event
  return (
    <button
      onClick={() => {
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
        dispatch({ type: ACTIONS.CALCULATE });
      }}
    >
      {label}
    </button>
  );
}
