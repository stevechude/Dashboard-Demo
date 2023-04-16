import Menu from "./components/Menu";
import Retro from "./components/Retro";

function App() {
  return (
    <div className="flex flex-col justify-center align-middle md:flex-row">
      <Retro />
      <Menu />
    </div>
  );
}

export default App;
