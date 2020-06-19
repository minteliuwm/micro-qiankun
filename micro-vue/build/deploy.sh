#! /bin/bash

set -e

npm run build

rm -rf ../server-vue/app/view/*
mv ./dist/index.html ../server-vue/app/view

rm -rf ../server-vue/app/public/*
mv ./dist/* ../server-vue/app/public
