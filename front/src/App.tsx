import Content from "layout/content";
import Header from "layout/header";
import Home from "pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Home />
      </Content>
    </div>
  );
}

export default App;
