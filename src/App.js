import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  //Using a data layer to wrap the whole login thing by using React Context API
  //While loging in we push the user into the data layer
  //So creating StateProvider.js

  //Destructing state as user from Login.js
  //const user=null;
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="null">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* Header */}
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>

    // App body
    //  Sidebar
    // Feed
    // Widgets
  );
}

export default App;
