# URL shortener

This is an URL shortener which can shorten your URL.

## Features

You can enter an URL into it, and press 'shorten' to generate a new URL.

If you generate it successfully, it will display "Success! Please use this link".

Otherwise, if someone has already shortened your URL, it will display "Oops! This URL has been shortened! Please use this link" and give you the already shortened one.

## Download, install and run
If you don't want to download, you can use [online version on heroku](https://secure-plains-56493.herokuapp.com/).

If you want to download it, then

+ Use Terminal to download the repository
```
git clone https://github.com/sinon0049/url_shortener.git
```
+ Download MongoDB and create a database called "url"
+ Download Express and Handlebars in the folder ```url_shortener```
```
npm i express
npm i express-handlebars
npm i body-parser
npm i mongoose
```
or install them together
```
npm i express express-handlebars body-parser mongoose
```
run the project with npm command
```
npm run dev
```
If succeeded, Terminal will show 
```
URL shortener is listening on http://localhost:3000
mongodb connected!
```
, and you can use it on your browser with the address http://localhost:3000/

## Environments and utilities
+ Node.js v10.15.0
+ Express 4.17.1
+ Handlebars 5.2.0
+ bootstrap 4.2.1
+ jquery 3.3.1
+ Font Awesome
+ MongoDB
+ Mongoose 5.10.14