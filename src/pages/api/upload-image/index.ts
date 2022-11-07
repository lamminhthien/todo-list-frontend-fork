import type {NextApiRequest, NextApiResponse} from 'next';

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {body, method} = req;

  switch (method) {
    case 'POST':
      // Update or create data in your database
      res
        .status(200)
        .send({url: 'https://ckeditor.com/apps/ckfinder/userfiles/files/Screenshot_20221107_022039.png', fileName: 'filename', uploaded: 'uploaded'});
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
