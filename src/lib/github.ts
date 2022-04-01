export const getCommits = async () => {
  const url = "https://api.github.com/repos/lewisblackburn/website/commits";

  const response = await fetch(url);

  if (response.status === 200) return <Record<string, any>>response.json();
  return null;
};
