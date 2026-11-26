const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite =
  repositoryName?.toLowerCase() ===
  `${process.env.GITHUB_REPOSITORY_OWNER?.toLowerCase()}.github.io`;
const basePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !isUserSite
    ? `/${repositoryName}`
    : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
};

export default nextConfig;
