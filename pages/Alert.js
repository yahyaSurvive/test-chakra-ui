import { Button, AlertIcon, AlertTitle, AlertDescription, Alert, CircularProgress } from "@chakra-ui/react";
import { useState } from "react";
import BtmNav from "./components/BtmNav";

const TestAlert = () => {
  const [al, setAl] = useState(false);
  const [sir, setSir] = useState(0);

  const alertRespon = () => {
    // setAl(!al);
    setSir(sir + 20);

    if (sir >= 100) {
      setAl(!al);
    }
  };

  const Soaja = () => {
    return (
      <Alert status="success" visibility={al === true ? "visible" : "hidden"}>
        <AlertIcon />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
      </Alert>
    );
  };

  return (
    <>
      <Button onClick={() => alertRespon()}>Alert</Button>
      {al === true ? (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Your browser is outdated!</AlertTitle>
          <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
        </Alert>
      ) : (
        ""
      )}
      <CircularProgress value={sir} size="100px" thickness="4px" />

      <BtmNav />
    </>
  );
};

export default TestAlert;
