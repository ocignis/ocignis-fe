import fs from 'fs';

import { Octokit } from '@octokit/core';

const importOcignisShared = () => {
  const SHARED_CONTENT = [
    {
      path: 'dist-ocignis-shared/index.d.ts',
      targetPath: 'src/common/api/ocignis/api-types/index.d.ts',
    },
    {
      path: 'dist-ocignis-shared/index.js',
      targetPath: 'src/common/api/ocignis/api-types/index.js',
    },
  ] as const;

  const octokit = new Octokit({
    // Provide token if using private GitHub repo
    // auth: TOKEN,
  });

  SHARED_CONTENT.map(async (SHARED_CONTENT_ITEM) => {
    // Get repository content - https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-repository-content
    const octoRepoResponse = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}{?ref}', {
      owner: 'ocignis',
      repo: 'ocignis-bot',
      path: SHARED_CONTENT_ITEM.path,
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    const decodedFileContent = Buffer.from(octoRepoResponse.data.content, 'base64');

    fs.writeFileSync(SHARED_CONTENT_ITEM.targetPath, decodedFileContent);
  });
};

importOcignisShared();
