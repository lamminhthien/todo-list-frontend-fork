import {GetStaticProps} from 'next';

type ParsedQueryParams = {
  id: string;
};

type PageProps = {
  id: string;
};

export const getStaticProps: GetStaticProps<PageProps, ParsedQueryParams> = async ({params}) => {
  try {
    const {id} = params!;
    return {
      props: {
        id
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

// export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async () => {
//   const allList = await api.todolist.get();
//   const paths = allList.data.flatMap(({id}) => ({params: {id}}));
//   return {paths, fallback: 'blocking'};
// };
