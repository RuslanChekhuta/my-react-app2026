import { forwardRef } from "react";

export const Textarea = forwardRef(({ label, onChange, onBlur, name }, ref) => (
  <>
    <label>{label}</label>
    <textarea name={name} ref={ref} onChange={onChange} onBlur={onBlur} />
  </>
));

Textarea.displayName = "Textarea";
