import type { NextApiRequest, NextApiResponse } from "next";
import { getCommits } from "~/lib/github";

const handler = async (_req: NextApiRequest, res: NextApiResponse<any>) => {
  const commits = await getCommits();
  if (!commits) {
    return res.status(200).json({});
  }

  res.status(200).json(commits);
};

export default handler;
