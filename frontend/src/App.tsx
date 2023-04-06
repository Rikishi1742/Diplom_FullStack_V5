import React from "react";
import {UserProvider} from "./context/UserContext";
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
