import { useState } from "react";

const GetSet = () => {
  const [value, setValue] = useState(0);

  const handleGetValue = () => {
    // get value from contract
  };

  const handleSetValue = () => {
    // set value
  };

  return (
    <div>
      <h1>Get and Set</h1>
      <p>Get and set values on the smart contract.</p>
      <form onSubmit={handleSetValue}>
        <label>
          Enter value:&nbsp;
          <input
            type="number"
            value={value}
            onChange={(ev) => setValue(+ev.target.value)}
          />
        </label>
        <button className="ml-2" type="submit">Set value</button>
      </form>
      <div className="mt-4">
        <button onClick={handleGetValue}>Get value from contract</button>
        <span>{/* show value here */}</span>
      </div>
    </div>
  );
};

export default GetSet;
