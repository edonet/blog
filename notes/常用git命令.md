# git 常用操作
记录一些常用的git操作命令，以备不时之需。

## 代码库操作
``` sh
    $ git init # 初始化一个本地库
    $ git clone <git url> # clone远程git库
    $ git pull # 拉取远程代码
    $ git push # 推送远程代码
    $ git remote -v # 查看远程服务器地址和仓库名称
    $ git remote show origin # 查看远程服务器仓库状态
    $ git remote add origin <git url> # 添加远程仓库地址
    $ git remote set-url origin <git url> # 设置远程仓库地址(用于修改远程仓库地址)
    $ git remote rm <repository> # 删除远程仓库
```

## 修改操作
``` sh
    $ git add . # 添加所有文件到暂存区
    $ git add -A # 添加所有文件到暂存区
    $ git add <file name> # 添加指定文件到暂存区
    $ git reset HEAD <file name> # 将指定文件从暂存区移出
    $ git reset -- <file name> # 将指定文件从暂存区移出
    $ git checkout -- <file name> # 恢复对指定文件的修改
    $ git commit -m "<description>" # 提交暂存区文件到库，并添加描述
```

## 隐藏操作
``` sh
    $ git stash: 隐藏当前的工作区的内容
    $ git stash pop: 恢复隐藏的内容。
    $ git stash list: 显示隐藏列表。
    $ git stash clear: 清空隐藏列表。
```

## 分支操作
``` sh
    $ git branch # 查看分支状态
    $ git branch -a # 查看所有（包括远程）分支
    $ git branch <branch name> # 创建分支
    $ git checkout <branch name> # 切换到指定分支
    $ git chekcout –b <branch name> # 创建并切换到指定分支
    $ git merge <branch name> # 将指定分支合并到当前分支
    $ git branch –d <branch name> # 删除指定分支
    $ git push origin :<branch name> # 删除远程分支
```

## 标签操作
``` sh
    $ git tag # 列出所有标签
    $ git tag <version> # 设置版本标签
    $ git tag -d <version> # 删除版本标签
    $ git push tags # 同步所有标签至远程库
```

## 版本回退
``` sh
    $ git reset <commit id> # 回退到指定的版本
    $ git reset <commit id> <file name> # 回退指定文件到指定版本
    $ git reset --hard HEAD^ # 回退到上一版本
    $ git reset --hard HEAD^^ # 回退到上上一版本
    $ git reset --hard HEAD~<number> # 回退指定数量个版本
    $ git reset --hard origin/master # 将本地版本回退到跟远程一样
```

## 其它操作
``` sh
    $ git status # 查看当前状态
    $ git log # 查看版本日志
    $ git reflog # 查看索引日志
    $ git diff # 比较本地与远程库的区别
    $ git clean -f # 删除未与版本库关联的文件
    $ git clean -f -d # 删除未与版本库关联的文件和文件夹
    $ git clean -n # 显示将要删除的未与版本库关联的文件和文件夹
    $ git update-index --assume-unchanged <file name> # 只忽略本地文件，不与远程服务器同步
    $ git update-index --no-assume-unchanged <file name> # 恢复忽略的本地文件，重新与远程服务器同步
```
