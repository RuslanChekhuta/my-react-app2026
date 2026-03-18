import ControlledForm from "./ControlledForm";
import "./HomePage.css";
import MixedForm from "./MixedForm";
import UncontrolledForm from "./UncontrolledForm";

function HomePage() {
  return (
    <section className="home-page">
      <ControlledForm />

      <UncontrolledForm />

      <MixedForm />
    </section>
  );
}

export default HomePage;
