@echo off

set /p id="name a new path to build to : " %=%

mkdir %id%

node bin/r.js -o bin/build.js

move dist "%id%"

cd "%id%"

tree&pause
