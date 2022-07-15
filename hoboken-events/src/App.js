import "./index.css";
// import { Link } from "react-router-dom";
import { EventList } from "./components/events/EventList";
import { EventItem } from "./components/events/EventItem";

export default function App() {
  return (
    <div>
      <h1>Hoboken Happy hours</h1>
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
