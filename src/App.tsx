import "./App.css";
import Applications from "./components/Applications/Applications.tsx";
import Header from "./components/Header/Header.tsx";
import {CreateApplicationForm} from "./components/CreateApplicationForm/CreateApplicationForm.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <CreateApplicationForm />
      <Applications />
    </div>
  );
}

export default App;
