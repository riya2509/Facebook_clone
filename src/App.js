import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* App body
      Sidebar
     Feed
     Widgets */}
      </div>
    </div>

    // App body
    //  Sidebar
    // Feed
    // Widgets
  );
}

export default App;
