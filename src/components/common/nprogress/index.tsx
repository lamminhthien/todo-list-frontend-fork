import {useRouter} from 'next/router';
import nProgress from 'nprogress';
import {ReactNode, useEffect} from 'react';
import useSWR from 'swr';

interface INProgresProps {
  children: ReactNode;
}

const fetcher = (url: RequestInfo | URL) => fetch(url).then(res => res.json());
const apiRoute = `${process.env.NEXT_PUBLIC_SITE_URL}/api/server-build-id`;

const NProgres = ({children}: INProgresProps) => {
  const {data} = useSWR(`${apiRoute}`, fetcher);
  const router = useRouter();

  nProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: true
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const serverBuildID = data?.serverBuildID || 'serverID';
    console.log('🚀 ~ file: index.tsx:27 ~ useEffect ~ serverBuildID', serverBuildID);
    const clientBuildID = process.env.NEXT_PUBLIC_GIT_COMMIT_SHA || 'clientID';
    console.log('🚀 ~ file: index.tsx:29 ~ useEffect ~ clientBuildID', clientBuildID);

    const progress = () => {
      nProgress.start();
      console.log(
        '🚀 ~ file: index.tsx:32 ~ progress ~ serverBuildID !== clientBuildID && data && !error',
        serverBuildID !== clientBuildID && data !== undefined
      );
      if (serverBuildID !== clientBuildID && data !== undefined) {
        console.log('Deploy Reload');
        router.reload();
      }
    };

    const doneProgress = () => {
      nProgress.done();
    };

    router.events.on('routeChangeStart', progress);
    router.events.on('routeChangeComplete', doneProgress);
    router.events.on('routeChangeError', doneProgress);

    return () => {
      router.events.off('routeChangeStart', progress);
      router.events.off('routeChangeComplete', doneProgress);
      router.events.off('routeChangeError', doneProgress);
    };
  }, []);

  return <>{children}</>;
};

export default NProgres;
