# lerna

1. scripts
```bash
# lerna
npx lerna run build
npx lerna run test

npx lerna add-caching
npx lerna run build --scope=remixapp

npm lerna version
yarn lerna -- watch -- lerna run build --scope=\$LERNA_PACKAGE_NAME

npx lerna list
npx lerna bootstrap
npx lerna repair
npx lerna init --packages="packages/*"

# knock lerna v7.3.0
mkdir ./new-lerna-workspace
cd ./new-lerna-workspace
npx lerna init --dryRun

# Passing a single pattern
npx lerna init --packages="packages/*"
# Passing multiple patterns
npx lerna init --packages="foo/*" --packages="bar/*"

lerna version --no-private
```