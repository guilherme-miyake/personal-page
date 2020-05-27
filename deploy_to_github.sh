#!/usr/bin/env bash

yarn build \
&& cp -r ./build ../guilherme-miyake.github.io \
&& cd ../guilherme-miyake.github.io \
&& git add . \
&& git commit -m "new build" \
&& git push origin master
