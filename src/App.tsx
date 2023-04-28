import "./App.scss";
import "./Login.scss";

import { useState, useEffect } from "react";
import { TodoWrapper } from "./assets/components/TodoWrapper";
import { Auth } from "./assets/components/auth";
import { auth } from "./config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">{isAuthenticated ? <TodoWrapper /> : <Auth />}</div>
  );
}

export default App;
