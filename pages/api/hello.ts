import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  text: string;
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (_: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ text: "Hello" });
};
