const path = require('path');

const resolve = (relativePath) => {
  return path.resolve(__dirname, relativePath);
};

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@SiteNavbar': resolve('src/components/UI/Navbar/SiteNavbar.js'),
      '@sideBar': path.resolve(__dirname, 'src/components/SideBar'),
      '@Main': resolve('src/components/Main/Main.js'),
      '@grid': path.resolve(__dirname, 'src/components/Grid'),
      '@hero': path.resolve(__dirname, 'src/components/Hero'),
      '@Identity': resolve('src/components/Identity/Identity.js'),
      '@Avatar': resolve('src/components/Avatar/Avatar.js'),
      '@Contact': resolve('src/components/Contact/Contact.js'),
      '@ProfileSection': resolve('src/components/Profile/ProfileSection.js'),
      '@SummarySection': resolve('src/components/Summary/SummarySection'),
      '@education': path.resolve(__dirname, 'src/components/Education'),
      '@experience': path.resolve(__dirname, 'src/components/Experience'),
      '@SkillSetSection': resolve('src/components/SkillSet/SkillSetSection.js'),
      '@Concept': resolve('src/components/SkillSet/Concept/Concept.js'),
      '@Tech': resolve('src/components/SkillSet/Tech/Tech.js'),
      '@Framework': resolve('src/components/SkillSet/Framework/Framework.js'),
      '@Tool': resolve('src/components/SkillSet/Tool/Tool.js'),
    },
  },
};
