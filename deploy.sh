#!/usr/bin/env sh


git init
git add -A
git commit -m 'deploy'



# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Maggie5821/maggieblog.git master:gh-pages

git remote add origin https://github.com/Maggie5821/reactinput.git

git pull --rebase origin master

git push -u origin master

cd -