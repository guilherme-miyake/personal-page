#!/usr/bin/env bash
rm ../guilherme-miyake.github.io/precache-manifest*
rm -r ../guilherme-miyake.github.io/static

yarn build \
&& cp ./build/index.html ./build/404.html \
&& cp -r ./build/* ../guilherme-miyake.github.io \
&& cd ../guilherme-miyake.github.io \
&& git add . \
&& git commit -m "new build" \
&& git push origin master
