import { useRouter } from 'next/router';

export const useGetPath = <T extends string>(): T => {
  const router = useRouter();

  const path = router.asPath.split('?')[0];

  const isRootPath = path === '/';
  if (isRootPath) {
    return path as T;
  }

  return path.slice(0, -1) as T;
};
