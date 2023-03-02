import { useGetPath } from 'ocignis-utils';
import { useEffect, useState } from 'react';

import { AppBarLinks } from 'common/components';
import { PathParams } from 'common/routes';

import { appBarLinks } from './appBarLinks';

export const useGetAppBarLinks = () => {
  const [appBarLinksSelected, setAppBarLinksSelected] = useState<AppBarLinks>(appBarLinks);

  const path = useGetPath<PathParams>();

  useEffect(() => {
    const appBarLinksMapSelected = appBarLinks.map((appBarLink) => {
      if (appBarLink.url === path) {
        return {
          ...appBarLink,
          isSelected: true,
        } satisfies AppBarLinks[number];
      }

      return appBarLink;
    });

    setAppBarLinksSelected(appBarLinksMapSelected);
  }, [path, setAppBarLinksSelected]);

  return { appBarLinks: appBarLinksSelected };
};
