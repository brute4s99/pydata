const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PyData Delhi Blog | Official blog for PyData Delhi", // <title>
  shortSiteTitle: "PyData Delhi", // <title> ending for posts and pages
  siteDescription: "PyData Delhi 2019.",
  siteUrl: "https://piyush.tech",
  pathPrefix: "/pydata",
  siteImage: "../../src/images/jpg/avatar.jpg",
  siteLanguage: "en",
  // author
  authorName: "PyData Delhi",
  authorTwitterAccount: "PyDataDelhi",
  // info
  infoTitle: "piyush aggarwal",
  infoTitleNote: "hullo",
  // manifest.json
  manifestName: "piyush ka blog",
  manifestShortName: "piyush.blog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "pydatadelhi@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/pydatadelhi" },
    { name: "twitter", url: "https://twitter.com/PyDataDelhi" },
    { name: "linkedin", url: "https://www.linkedin.com/company/pydatadelhi/" }
  ]
};
