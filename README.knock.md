# knock monorepo

```bash
yarn init
yarn add lerna -D -W
yarn lerna init --packages="packages/*"  --independent

mkdir packages
# cp types

yarn
cd packages/types && yarn build

cd ..
git add -A
cd utils/
yarn add date-fns react
yarn add -D @types/date-fns @types/react jest @types/jest
cd ..
tsc -b .
tsc -b . --clean
rm -rf */*.tsbuildinfo */dist

yarn add -WD rimraf
# 查看bin
ls -all node_modules/.bin

yarn add -D @babel/preset-env @babel/preset-typescript

volta pin node yarn
volta install node@12
yarn add -WD eslint @typescript-eslint/eslint-plugin @typescript-eslint/p
arser

lerna run clean
lerna run build
lerna run build --concurrency 2
lerna run test --concurrency 2 --stream

yarn add -WD scripty

chmod -R +x scripts/greet

yarn lerna repair

# commitlint
yarn add -WD @commitlint/cli @commitlint/config-conventional @commitlint/config-lerna-scopes commitlint husky lerna-changelog


echo "build(api): change something in api's build" | yarn commitlint
echo "feat(types): more reasonable default types for generics" | yarn commitlint
```