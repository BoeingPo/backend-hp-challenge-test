#!/bin/bash

echo "Complied ts to js"
npx tsc

pwd

echo "Start server"
node ./dist/index.js