# sample

a [Sails v1](https://sailsjs.com) application


### Commands
#### please first create .env file with below info
```
host=localhost
port=<your db connection port>
databaseName=sample
user=<db user name>
password=<db password>
```
#### Then,
```
seedDB 
```
seed DB for public & staging schemas 
```
console
```
sails console with debug mode on, development environemt
```
consoleStg 
```
sails console with debug mode on, staging environemt

### Test codes
```
Company.findOne({id:1}).populate('projects').then(res => console.log(res))
```
```
Company.findOne({id:1}).populate('users').then(res => console.log(res))
```

### Version info

This app was originally generated on Sun Oct 10 2021 16:27:19 GMT+0900 (Japan Standard Time) using Sails v1.4.4.

<!-- Internally, Sails used [`sails-generate@2.0.3`](https://github.com/balderdashy/sails-generate/tree/v2.0.3/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

