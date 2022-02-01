import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const handleMessage = (message: any) => {
      if (!message.data.event) return;
      setData((data) => [...data, message.data]);
    };

    window.addEventListener("message", handleMessage);
  }, []);

  const openingFunction = () => {
    window.open(
      "//localhost:4200/porto-pag-payment-link/payments/link?data=H4sIAAAAAAAAAJWTQU%2FjMBCF%2F0pkcQAprWynTWhvCGmlPS3a5bQIRYM9REZxHNkOKlv1v%2B84UFEsOHDLeN588%2FTs7BnuIvoB%2Bp%2BabZnkCyGr1bpuLjesZNqpyeIQ2XbP4suIpLi%2B%2BUGNYbIP6KkU8rIRDeebmh1KNnqnJzXLldNJzlcJg0F5M0bjBjq6xRAxqS1G0BBhppvRtcd1rlXOolcG%2BoQQhMBBuxAclVQQ23SuRTt6DHCU0MzoglHg2mfonW9H8Ap7%2BDDjwSbIukoTmWCIHrLdafPz7AitCQHeDDz20LXBUGrmH%2Bi0yjuFr%2F5%2BHftzGDQZsJt86vx5twGdxy5NfjBnnSaihtfkRMoougj9lXVTugTBOV9ynoy%2FpJxueqBA7%2FbMDIFkfToLJMsTF7sioC2eyEYozn%2BfFYIovOQX7PMFhzJHyhwpc%2BQ6Ab9BrHJitSso%2BRPi6gui%2FILY5MTmlKixoLdaCpnQsqav6qLI2YReL3l1uKcr8QgR9VWc%2FwopFkIspLyVfMvrrayXlSBcveH8Lzv8B%2BKiBvhFAwAA&token=eyJhbGciOiJIUzI1NiJ9.eyJsaW5rSWQiOiJhYzQ0NDA0Yi0zYWNiLTRlNzQtYmQzOS0yNTc1NTgzMDgyY2MiLCJleHAiOjE2Mzc2MTUxODd9.rYGIxDgQSVqXu10PP8ma-zvlay6wExu0xM69H_IxALA"
    );
  };

  const eventList = () => {
    return data.map((message, index) => (
      <div key={index}>{message.message}</div>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={openingFunction}>Click me</button>
        <br></br>
        {eventList()}
      </header>
    </div>
  );
}

export default App;
