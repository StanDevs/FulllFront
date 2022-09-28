import "./input.css";
import { debounce } from "lodash";
import { FormEvent, InputHTMLAttributes, useCallback } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  debounce?: number;
}

const Input = (props: InputProps) => {
  const onDebouncedInput = useCallback(
    debounce((e: FormEvent<HTMLInputElement>) => {
      if (props.onInput) props.onInput(e);
    }, props.debounce),
    [props.debounce, props.onInput]
  );

  const onInput = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      if (props.onInput) {
        if (props.debounce) onDebouncedInput(e);
        else props.onInput(e);
      }
    },
    [props.onInput, props.debounce, onDebouncedInput]
  );

  return (
    <input
      className={`${props.className ?? ""} input`}
      {...props}
      onInput={onInput}
    />
  );
};

export default Input;
