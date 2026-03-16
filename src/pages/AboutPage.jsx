import programmerImage from "../assets/programmer.jpg";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <section className="about-page">
      <h2>О странице About</h2>
      <p>Это отдельный page-компонент внутри папки pages</p>
      <img src={programmerImage} alt="Программист" />
      <img src="/images/laptop.jpg" alt="Ноутбук" />
    </section>
  );
};

export default AboutPage;
