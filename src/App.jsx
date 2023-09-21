import { Hero, Navbar, Sidebar, Trending } from "./components";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Hero />
      <Trending />
    </div>
  );
};

export default App;
