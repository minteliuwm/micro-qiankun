#! /bin/bash

set -e

npm run build

rm -rf ../server-main/app/view/*
mv ./dist/index.html ../server-main/app/view

rm -rf ../server-main/app/public/*
mv ./dist/* ../server-main/app/public
