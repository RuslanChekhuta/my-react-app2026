import { useRef } from "react";

const UncontrolledForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    alert(`Имя было отправлено: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default UncontrolledForm;
