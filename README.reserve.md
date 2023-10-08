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
npx lerna init --packages="packages/*" --independent
# Passing multiple patterns
npx lerna init --packages="foo/*" --packages="bar/*"

lerna version --no-private

lerna run build --scope=header --concurrency=5
npx lerna run test,build,lint
npx lerna run test --scope=header
npx lerna run test --since=origin/main

nx reset

# nx.json
npx lerna add-caching
npx lerna run build --scope=remixapp
npx lerna run build --ignore=header,footer

npx lerna run build --skip-nx-cache

lerna exec --scope footer -- ls -al
lerna run --scope package-1 --scope "*-2" lint
```