# 树状列表生成器

```
node tree.js -h // 查看所有的指令
```

## 下面是指令：

```
  .option('-d, --directory [dir]', '指定文件夹，不填就是当前文件夹', process.cwd())
  .option('-i, --ignore [ig]', '使用"a|b|c|d"来过滤文件')
  .option('-r, --regexp [rg]', '使用"正则"来过滤文件')
  .option('-e, --export [epath]', '输出路径')
  .option('-f, --only-folder', '是否只输出文件夹名称')
```

比如我想排除掉 node_modules 等文件夹

```
node tree.js -i "node_modules|.idea|.git|dist|t|medias|images" -e tree.md
```

注：-i 后面接需要排除的文件夹，打印出来会有文件夹名，但不会有内部文件名
-e 为输出路径，其实还可以不用-e
例如

```
node tree.js -i "node_modules|.idea|.git|dist|t|medias|images" >> tree.md
```

使用>> 一样能输出，>>输出的是 console 打印的内容。vue-cli 打印 config 也是用的>>

## 正则细化：

建议正则只对文件进行操作，比如我想在上面的基础上再过滤掉所有的.md 和.json 文件

```
node tree.js -i "node_modules|.idea|.git|dist|t|medias|images" -r ".md|.json" -e tree.md
```
此处是生成的结构图，后续填充

├─.git
├─.idea
├─.vscode
|  ├─extensions.json
|  └─settings.json
├─build
|  ├─config.js
|  └─README.md
├─node_modules
├─public
|  ├─favicon.ico
|  └─index.html
├─src
|  ├─api
|  |  ├─common
|  |  |  └─common.ts
|  ├─assets
|  |  ├─global
|  |  |  ├─base.scss
|  |  |  └─README.md
|  |  ├─common.scss
|  |  ├─logo.png
|  |  └─reset.scss
|  ├─components
|  |  ├─global
|  |  |  ├─g-img-preload.vue
|  |  |  └─index.ts
|  |  ├─c-helloworld.vue
|  |  └─c-jsx-component.vue
|  ├─config
|  ├─directives
|  |  ├─clipboard.ts
|  |  ├─darg.ts
|  |  ├─index.ts
|  |  ├─number.ts
|  |  ├─permission.ts
|  |  └─README.md
|  ├─lib
|  |  ├─date-format.js
|  |  └─README.md
|  ├─pages
|  |  ├─children.vue
|  |  └─index.vue
|  ├─routers
|  |  ├─middleware
|  |  |  ├─permission.ts
|  |  |  └─title.ts
|  |  ├─modules
|  |  |  └─children.ts
|  |  ├─index.ts
|  |  ├─README.md
|  |  └─routes.ts
|  ├─store
|  |  ├─modules
|  |  |  ├─common.ts
|  |  |  └─module1.ts
|  |  ├─README.md
|  |  └─store.ts
|  ├─store-vuex
|  |  ├─modules
|  |  |  ├─common.ts
|  |  |  └─module1.ts
|  |  ├─getters.ts
|  |  ├─README.md
|  |  └─store.ts
|  ├─utils
|  |  ├─createAsyncComponent.tsx
|  |  ├─http.ts
|  |  ├─inject.ts
|  |  ├─polyfill.ts
|  |  └─tools.ts
|  ├─App.vue
|  ├─main.ts
|  └─shims-vue.d.ts
├─types
|  ├─global.d.ts
|  └─inject.d.ts
├─.browserslistrc
├─.env.development
├─.env.production
├─.env.test
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─.npmrc
├─.prettierignore
├─.yarnrc
├─babel.config.js
├─package-lock.json
├─package.json
├─postcss.config.js
├─README.md
├─tree.js
├─tree.md
├─tsconfig.json
├─vue.config.js
└─规范文档.md
