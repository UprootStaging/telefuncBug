set -ex

npm prune
rm -rf build/
npm run build
VERSION=$1
tar cjf bundle-$VERSION.tbz2 build/ package.json package-lock.json deploy.sh .env.production
