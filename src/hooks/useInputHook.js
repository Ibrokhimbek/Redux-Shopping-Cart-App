import { useState } from "react";

const useInputHook = (initialState = "") => {
  const [state, setState] = useState(initialState);

  const updateInput = (e) => {
    setState(e.target.value);
  };
  return [state, updateInput];
};

export default useInputHook;
