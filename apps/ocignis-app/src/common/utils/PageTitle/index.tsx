import Head from 'next/head';

type PageTitleProps = {
  children: React.ReactNode;
  title: string;
};

export const PageTitle = ({ children, title }: PageTitleProps) => (
  <>
    <Head>
      <title>{title} - Ocignis App</title>
    </Head>
    {children}
  </>
);
