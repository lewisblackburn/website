const authToken = process.env.AUTH_TOKEN;

export const getTollable = async ({ counterId }: { counterId: string }) => {
  const url = `https://blitzapp-iocc.onrender.com/api/${counterId}`;

  const headers = {
    "Content-Type": "application/json",
    "auth-token": authToken?.toString() ?? "",
  };
  const response = await fetch(url, { headers });

  if (response.status === 200) return <Record<string, any>>response.json();
  return null;
};
