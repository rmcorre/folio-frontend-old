const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@sideBar': path.resolve(__dirname, 'src/components/SideBar'),
      '@main': path.resolve(__dirname, 'src/components/Main'),
      '@grid': path.resolve(__dirname, 'src/components/Grid'),
      '@hero': path.resolve(__dirname, 'src/components/Hero'),
      '@identity': path.resolve(__dirname, 'src/components/Identity'),
      '@avatar': path.resolve(__dirname, 'src/components/Avatar'),
      '@summarySection': path.resolve(
        __dirname,
        'src/components/SummarySection'
      ),
      '@contact': path.resolve(__dirname, 'src/components/Contact'),
      '@education': path.resolve(__dirname, 'src/components/Education'),
      '@experience': path.resolve(__dirname, 'src/components/Experience'),
      '@skillSetSection': path.resolve(
        __dirname,
        'src/components/SkillSetSection'
      ),
      '@concept': path.resolve(
        __dirname,
        'src/components/SkillSetSection/Concept'
      ),
      '@tech': path.resolve(__dirname, 'src/components/SkillSetSection/Tech'),
      '@framework': path.resolve(
        __dirname,
        'src/components/SkillSetSection/Framework'
      ),
      '@tool': path.resolve(__dirname, 'src/components/SkillSetSection/Tool'),
    },
  },
};
