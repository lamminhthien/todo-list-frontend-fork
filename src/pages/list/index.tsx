import {useRouter} from 'next/router';

const List: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <h1>TODO | Your List</h1>
      <div className="list">
        <div className="item">
          Shopping
          <button onClick={() => router.push('/detail')}>Detail</button>
        </div>
      </div>
    </>
  );
};

export default List;
