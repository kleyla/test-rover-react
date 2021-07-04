## GITHUB PAGES

```
npm install --save-dev gh-pages
```

package.json copiamos antes de "name" y modificamos con nuestros datos:

```json
"homepage":"https://yourusername.github.io/repository-name"
```

package.json en la parte de script copiamos:

```json
"scripts": {
    //...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
```

Finalmente en la consola:

```
npm run deploy
```
