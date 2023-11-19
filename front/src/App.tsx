import Content from "layout/content";
import Header from "layout/header";
import Router from "technical/router";

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Router />
      </Content>
    </div>
  );
}

export default App;
