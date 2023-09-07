import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err.data);
  return (
    <div>
      <h1>OOPSc!</h1>
      <h2>{err.data}</h2>
      <h2>{err.status}</h2>
    </div>
  );
};
export default Error;
