import {useRouter} from 'next/router';

const Action: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push('/list')}>Create New List</button>
      <input type="text" placeholder="Enter a link or ID" />
    </>
  );
};

export default Action;
