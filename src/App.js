import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>

    // App body
    //  Sidebar
    // Feed
    // Widgets
  );
}

export default App;
