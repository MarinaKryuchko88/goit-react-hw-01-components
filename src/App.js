import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import "./components/Profile/styles.css";
import "./components/Statistics/styles.css";

function App() {
  return (
    <div className="App">
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

export default App;
