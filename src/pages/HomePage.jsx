//import UserList from "./UserList";
//import { Tasks } from "./Tasks";
// import { Comments } from "./Comments";
import { Products } from "./Products";
import "./HomePage.css";
import CityList from "./CityList";
import BookList from "./BookList";
import LessonTasks from "./LessonTasks";
import ServiceList from "./ServiceList";

function HomePage() {
  return (
    <>
      {/* <UserList /> */}
      {/* <Tasks /> */}
      {/* <Comments /> */}
      <Products />
      <CityList />
      <BookList />
      <LessonTasks />
      <ServiceList />
    </>
  );
}

export default HomePage;
