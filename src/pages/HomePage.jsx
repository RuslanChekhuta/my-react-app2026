//import { Greeting } from "./Greeting";
//import { Notification } from "./Notification";
//import { UserProfile } from "./UserProfile";
//import { TodoList } from "./TodoList";
import { WelcomeMessage } from "./WelcomeMessage";
import "./HomePage.css";
import AccessMessage from "./AccessMessage";
import OrderStatus from "./OrderStatus";
import AlertBanner from "./AlertBanner";
import GuestOnlyMessage from "./GuestOnlyMessage";

function HomePage() {
  // const messages = ["Сообщение 1", "Сообщение 2"];
  // const user = {
  //   name: "Иван",
  //   age: 25,
  // };

  // const todos = [
  //   { id: 1, text: "Изучить React", completed: true },
  //   { id: 2, text: "Создать проект", completed: false },
  // ];

  const isLoggedIn = true;

  const alerts = ["Предупреждение 1", "Предупреждение 2", "Предупреждение 3"];

  return (
    <>
      {/* <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} /> */}
      {/* <Notification messages={messages} />
      <Notification messages={[]} /> */}
      {/* <UserProfile user={user} />
      <UserProfile user={null} /> */}
      {/* <TodoList todos={todos} /> */}
      <WelcomeMessage isLoggedIn={isLoggedIn} />
      <AccessMessage hasAccess={true} />
      <AccessMessage hasAccess={false} />
      <OrderStatus isPaid={true} />
      <OrderStatus isPaid={false} />
      <AlertBanner alerts={alerts} />
      <AlertBanner alerts={[]} />
      <GuestOnlyMessage showMessage={true} />
      <GuestOnlyMessage showMessage={false} />
    </>
  );
}

export default HomePage;
