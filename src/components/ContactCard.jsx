export function ContactCard() {
  return (
    <>
      <h2>Контактный блок</h2>
      <p>Этот компонент создан для тренировки правил JSX.</p>
      <label htmlFor="contact-name">Имя</label>
      <br />
      <input id="contact-name" type="text" />
      <br />
      <button disabled>Отправить</button>
    </>
  );
}
