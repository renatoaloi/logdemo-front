
# LogDemo Frontend

[Angular frontend for LogDemo API](https://github.com/renatoaloi/java-log-api)

## Template

[Angular 2+](https://github.com/coreui/coreui-free-angular-admin-template)

#### Prerequisites
Before you begin, make sure your development environment includes `Node.js®` and an `npm` package manager.

###### Node.js
Angular 9 requires `Node.js` version 10.13 or later.

- To check your version, run `node -v` in a terminal/console window.
- To get `Node.js`, go to [nodejs.org](https://nodejs.org/).

###### Angular CLI
Install the Angular CLI globally using a terminal/console window.
```bash
npm install -g @angular/cli
```

##### Update to Angular 9
Angular 9 requires `Node.js` version 10.x or newer    
Update guide - see: [https://update.angular.io](https://update.angular.io)

## Installation

### Clone repo

``` bash
# clone the repo
$ git clone https://github.com/renatoaloi/logdemo-front my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```

## Configure

```bash
# change proxy.conf.js to reflect your API host
const proxy = [
  {
    context: '/api',
    # Change here to your host:
    target: 'http://localhost:8080/api', 
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
```

## Usage

``` bash
# serve with hot reload at localhost:4200.
$ npm start

# build for production with minification
$ ng build
```

## Documentation

The documentation for the CoreUI Free Angularp Admin Template is hosted at our website [CoreUI](https://coreui.io/angular/)

