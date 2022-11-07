// import {PutObjectRequest,ManagedUpload} from 'aws-sdk/client-s3';
import aws from 'aws-sdk';
import {ManagedUpload, PutObjectRequest} from 'aws-sdk/clients/s3';
import type {NextApiRequest, NextApiResponse} from 'next';

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {body, method} = req;

  aws.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION
  });

  const s3 = new aws.S3();

  const name = Date.now();

  const s3ObjectRequest: PutObjectRequest = {
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
    Body: body,
    Key: `data1/${name}.png`,
    ACL: 'public-read'
  };

  switch (method) {
    case 'POST':
      // Update or create data in your database
      s3.upload(s3ObjectRequest, (err: Error, response: ManagedUpload.SendData) => {
        if (err) console.log('Error', err);
        if (response) {
          res.status(200).send({url: response.Location, fileName: 'filename', uploaded: 'uploaded'});
        } else {
          res.status(400).send('Error Cannot upload image');
        }
      });

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
