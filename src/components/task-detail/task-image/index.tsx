import Image from 'next/image';
import {FC} from 'react';

export interface IPreviewImage {
  name: string;
  link: string;
}
interface ITaskImagesProps {
  className?: string;
  images: IPreviewImage[];
}
const TaskImages: FC<ITaskImagesProps> = ({images, className}) => {
  return (
    <div className={className}>
      {images.map((e, idx) => (
        <div key={idx} className="flex gap-2.5 rounded-lg bg-sky-50">
          <div className="relative h-40 w-full border lg:w-40">
            <Image src={e.link} alt="" objectFit="contain" layout="fill" />
          </div>
          <div className="hidden h-40 w-40 lg:block">
            <div className="break-all text-h6 font-medium text-slate-700">{e.name}</div>
            <div className="flex gap-2.5 text-h7 text-slate-500 underline">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TaskImages;
