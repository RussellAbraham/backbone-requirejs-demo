#!/bin/bash

read -p "Name a new path to build to: " id

mkdir "$id"

node node_modules/.bin/r.js -o build.js

mv dist "$id"

cd "$id"

ls -R

read -p "Press any key to continue..."
