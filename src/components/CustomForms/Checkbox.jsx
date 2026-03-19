import { forwardRef } from "react";

export const Checkbox = forwardRef(({ label, onChange, onBlur, name }, ref) => (
  <>
    <label>
      <input
        type="checkbox"
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
      {label}
    </label>
  </>
));

Checkbox.displayName = "Checkbox";
