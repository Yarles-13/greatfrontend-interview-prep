import { useState } from "react";

type UseBooleanReturn = {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

export default function UseBoolean (initialValue = false): UseBooleanReturn {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
  }
}