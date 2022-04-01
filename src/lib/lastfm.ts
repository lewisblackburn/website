const apiKey = process.env.LAST_FM_API_KEY;

export const getLastFM = async () => {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=xphte&api_key=${apiKey}&format=json`;

  const response = await fetch(url);

  if (response.status === 200) return <Record<string, any>>response.json();
  return null;
};
