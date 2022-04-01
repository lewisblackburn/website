import { getTollable } from "~/lib/tollable";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const tollable = await getTollable({
    counterId: req.query.counterId.toString() ?? "",
  });

  if (!tollable) {
    return res.status(200).json({});
  }

  res.status(200).json(tollable);
};

export default handler;
