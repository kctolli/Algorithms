#!/bin/bash
# Jest test
npm run test

echo ""

# Git Update
git pull 
git add . 
git commit -m "Deploy --- `date +%m`/`date +%d`/`date +%Y` `date +%r`"
git push
