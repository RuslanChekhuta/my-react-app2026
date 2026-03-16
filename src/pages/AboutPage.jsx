import programmerImage from "../assets/programmer.jpg";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <section className="about-page">
      <h2>О странице About</h2>
      <p>Это отдельный page-компонент внутри папки pages</p>
      <a href="https://react.dev/" target="_blank">
        React Docs
      </a>
      <img src={programmerImage} alt="Программист" />
      <p>Первое изображение подключено из assets</p>
      <img src="/images/laptop.jpg" alt="Ноутбук" />
      <p>Второе изображение подключено из public</p>
    </section>
  );
};

export default AboutPage;
