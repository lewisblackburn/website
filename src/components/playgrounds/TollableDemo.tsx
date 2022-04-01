import useSWR from "swr";
import { fetcher } from "~/lib/fetcher";

const TollableDemo = () => {
  const { data: count } = useSWR(
    "/api/b798457c-6c98-404d-a62b-3414cf449c6f",
    fetcher
  );

  return <div>persistant count : {count?.value ?? 0}</div>;
};

export default TollableDemo;
