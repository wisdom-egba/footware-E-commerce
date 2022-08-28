import React from "react";
import Navbar from "./component/Navbar";
import Hub from "./component/Hub";
import Grid from "./component/Grid";
import Newsletter from "./component/Newsletter";
import Card from "./component/Card";
function App() {
  return (
    <div>
      <Navbar />
      <Hub />
      <Grid />
      <Newsletter/>
      <Card/>
    </div>
  );
}

export default App;
