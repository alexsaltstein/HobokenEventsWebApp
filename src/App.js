import "./index.css";
// import { Link } from "react-router-dom";
import { EventList } from "./components/events/EventList";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div>
      <Header />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        {/* example link for use when we add events */}
        {/* <Link to="/happyhour">Happy Hour</Link> */}
        <EventList title="Happy Hours" url="https://reqres.in/api/users" />
      </nav>
    </div>
  );
}
