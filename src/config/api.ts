interface Config {
  githubToken: string
  giteeToken: string
}

export const config: Config = {
  githubToken: process.env.GITHUB_TOKEN || '',
  giteeToken: process.env.GITEE_TOKEN || '',
}

export const githubConfig = {
  username: `chenrongjian`,
  repoList: [`img1`, `img2`, `img3`, `img4`, `img5`],
  branch: `main`,
}

export const giteeConfig = {
  username: `filesss`,
  repoList: Array.from({ length: 20 }, (_, i) => `img${i}`),
  branch: `main`,
}
