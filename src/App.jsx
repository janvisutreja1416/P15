import { useState } from "react";
import LoginDetails from "./Components/LoginDetails";
import LoginForm from "./Components/Loginform";

function App() {
  const [user, setUser] = useState(null);

  return user ? (
    <LoginDetails
      user={user}
      onBack={() => setUser(null)}
    />
  ) : (
    <LoginForm onLogin={setUser} />
  );
}

export default App;