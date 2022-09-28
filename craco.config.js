// Instead of ejecting our webpack file, we are utlizing the library craco.
// This allows us to make custom changes to our webpack configuration without ejecting
const path = require(`path`);
const alias = require(`./aliases`);

const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
  eslint: {
    enable: false,
  },
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@use 'src/styles/global-styles.scss' as *;`,
      },
    },
  },
};
