# sample

a [Sails v1](https://sailsjs.com) application

### App Setup
```
git clone git@github.com:HannaNguyen-new/sample.git
```
```
cd sample
```
```
npm install
```
#### create .env file with below info
```
host=localhost
port=<your db connection port>
databaseName=sample
user=<db user name>
password=<db password>
```
### Commands

#### Then,
seed DB for public & staging schemas 
```
npm run seedDB 
```
sails console with debug mode on, staging environemt
```
npm run consoleStg 
```
*This command might not be used , but just in case...\
sails console with debug mode on, development environment
```
npm run console
```

### Test codes
---Expected results from staging schema---
```
Company.findOne({id:1}).populate('projects').then(res => console.log(res))
```
```
Company.findOne({id:4}).populate('companyAuths').then(res => console.log(res))
```
```
User.findOne({id:3}).populate('companyAuths').then(res => console.log(res))
```
---Unexpected results from both public & staging schema---
```
Company.findOne({id:1}).populate('users').then(res => console.log(res))
```
```
User.findOne({id:2}).populate('companies').then(res => console.log(res))
```
```
User.findOne({id:5}).populate('companies').then(res => console.log(res))
```
### Side note
All boolean values in public schema are true. Other values include the word 'public'.\
All boolean values in staging schema are false. Other values include the word 'staging'.
### Version info

This app was originally generated on Sun Oct 10 2021 16:27:19 GMT+0900 (Japan Standard Time) using Sails v1.4.4.

<!-- Internally, Sails used [`sails-generate@2.0.3`](https://github.com/balderdashy/sails-generate/tree/v2.0.3/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

