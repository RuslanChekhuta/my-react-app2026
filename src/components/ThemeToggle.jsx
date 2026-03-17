export function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      style={{
        background: isDarkMode ? "black" : "green",
        color: isDarkMode ? "white" : "black",
        height: 200,
      }}
    >
      <button onClick={toggleTheme}>Переключить цвет</button>
    </div>
  );
}
