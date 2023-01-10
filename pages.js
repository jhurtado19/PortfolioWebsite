const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/MarineNewt/PortfolioWebsite.github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "origin",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
