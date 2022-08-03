#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New deployment'
git push -f https://github.com/jfkeci/my-groups-web.git master:gh-pages

cd -