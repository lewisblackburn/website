import type { NextApiRequest, NextApiResponse } from "next";
import { getLastFM } from "~/lib/lastfm";
import { LastFM } from "~/types/lastfm.type";

const handler = async (_req: NextApiRequest, res: NextApiResponse<LastFM>) => {
  const lastfm = await getLastFM();
  if (!lastfm || !lastfm.user || !lastfm.user.playcount) {
    return res.status(200).json({ user: { playcount: 0, registered: 0 } });
  }

  res.status(200).json({
    user: {
      playcount: lastfm.user.playcount,
      registered: parseInt(lastfm.user.registered.unixtime, 10),
    },
  });
};

export default handler;
