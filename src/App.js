import Header from "./components/Header";
import { Datagrid } from "./components/Datagrid";
import Footer from "./components/Footer";
import "./App.css";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <div className="body">
      <Header />
      <ToolBar/>
      <Datagrid/>
      <Footer/>
    
    </div>
  );
}

export default App;
