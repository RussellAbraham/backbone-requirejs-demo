@echo off

set /p id="name a new path to build to : " %=%

mkdir %id%

node node_modules/.bin/r.js -o build.js

move dist "%id%"

cd "%id%"

tree&pause
