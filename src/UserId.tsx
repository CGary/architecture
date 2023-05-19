import { useEffect, useState } from "react";

interface State {
  userId: number | "loading...";
}

export function UserId(): JSX.Element {
  const [result, setResult] = useState<State>({
    userId: "loading...",
  });
  useEffect(() => {
    const fetchUserId = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
      setResult(data);
    };

    fetchUserId();
  }, []);

  return <div>Value: {result.userId}</div>;
}
