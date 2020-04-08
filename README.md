# LAN-Share
![stars](https://img.shields.io/github/stars/songquanpeng/lan-share) ![forks](https://img.shields.io/github/forks/songquanpeng/lan-share) ![repo-size](https://img.shields.io/github/repo-size/songquanpeng/lan-share) ![license](https://img.shields.io/github/license/songwonderful/lan-share) ![release](https://img.shields.io/github/v/release/songwonderful/lan-share) ![download](https://img.shields.io/github/downloads/songquanpeng/lan-share/total)
[中文](https://iamazing.cn/page/LAN-SHARE-使用教程)

## Notice
Check the [GoLang version](https://github.com/songquanpeng/lan-share-go), it's more easy to deploy.

## Description
+ Used for file sharing in LAN
+ Simple to deploy.

## Demo
![image](https://user-images.githubusercontent.com/39998050/68082537-f0ada600-fe58-11e9-8188-de36ce763e60.png)

![image](https://user-images.githubusercontent.com/39998050/68082521-cfe55080-fe58-11e9-8131-2a4d793832ef.png)

## Deploy Steps
1. Install [Node.js](https://nodejs.org/en/) v10.14.2 or any other compatible versions.
2. Use git to clone `https://github.com/songquanpeng/lan-share.git`
3. Delete `package-lock.json` (because i use the taobao npm mirror, which may not be suitable to you) by `rm ./package-lock.json`, then run `npm i` to install dependencies.
4. Run `npm start` and then open [http://YOUR_IP:3000/](http://localhost:3000)
