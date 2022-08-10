# A Salty Bot for Salty People (:

## If you want to contribute, then here's your guide   

#### Clone the repo (Or just fork it on Github, which is easier)
```bash
git clone https://github.com/jacoby-y/salty-bot.git
cd salty-bot
```   

#### Install packages
```bash
npm install
```   

#### Add config.js
```js
// In config.js at root level
module.exports = {
    token: "YOUR BOT'S TOKEN",
};
```   


#### Run bot
```bash
# do `node deploy.js` if you've invited it to another server and you want to update the server with new slash commands
node index.js
```


#### Push code
... Yeah I'm not sure about this step. If you forked it then push it to your remote and make a pull request.