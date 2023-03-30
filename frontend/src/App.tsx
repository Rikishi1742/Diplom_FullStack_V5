import React from "react";
import {UserProvider} from "./context/UserContext";
import AppBar from "./layout/AppBar";
import AppContent from "./layout/AppContent";



function App() {

  return (
    <>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </>
    
  );
}

export default App;
