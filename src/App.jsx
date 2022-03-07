import { Box } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Info from "./components/Info";
import MapComp from "./components/Map";

function App() {
  const [info, setInfo] = useState(null);
  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      className="App"
      width={"full"}
    >
      <Box width={{ base: "full", md: "70%" }}>
        <MapComp setInfo={setInfo} />
      </Box>
      <Box width={{ base: "full", md: "30%" }}>
        <Info info={info} />
      </Box>
    </Box>
  );
}

export default App;
