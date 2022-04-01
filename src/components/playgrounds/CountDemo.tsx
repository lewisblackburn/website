import { useCount } from "use-count";

const CountDemo = () => {
  const { value: count } = useCount("lew.sh", "use-count");

  return <div>persistant count : {count}</div>;
};

export default CountDemo;
