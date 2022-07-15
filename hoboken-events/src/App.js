import { Link } from "react-router-dom";
import { EventItem } from "./components/happy_hours/EventItem";

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
        <Link to="/happyhour">Happy Hour</Link>
        <EventItem/>
      </nav>
    </div>
  );
}