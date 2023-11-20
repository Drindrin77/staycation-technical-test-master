import { UserApi } from "business/user/services/api";
import Content from "layout/content";
import Header from "layout/header";
import { useEffect, useState } from "react";
import Router from "technical/router";

function App() {
  useEffect(() => {
    getUser();
  }, []);

  const [user, setUser] = useState<{ first_name: string } | null>(null);

  const getUser = async () => {
    const user = await UserApi.getUser();
    setUser(user.data);
  };

  return (
    <div className="App">
      <Header first_name={user?.first_name ?? ""} />
      <Content>
        <Router />
      </Content>
    </div>
  );
}

export default App;
