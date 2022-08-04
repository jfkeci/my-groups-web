#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist

git init
git add -A
git commit -m 'New deployment'
git push -f https://github.com/jfkeci/my-groups-web.git master:gh-pages

cd -