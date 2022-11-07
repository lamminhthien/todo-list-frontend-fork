import type {NextApiRequest, NextApiResponse} from 'next';

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {body, method} = req;

  switch (method) {
    case 'POST':
      // Update or create data in your database
      res.status(200).send(JSON.stringify(body));
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb'
    }
  }
};
