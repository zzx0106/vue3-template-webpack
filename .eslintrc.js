module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    worker: true,
    jquery: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    // project: './tsconfig.json',
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  // ---------
  extends: ['plugin:vue/recommended', 'plugin:import/react'],
  rules: {
    // eslint文档 https://eslint.bootcss.com/docs/rules/
    // 关闭console告警
    'no-console': 'off',
    // (x) => {} 箭头函数参数只有一个时是否要有小括号。
    'arrow-parens': 'off',
    // for in 中必须有if判断 比如判断hasOwnProperty
    'guard-for-in': ['error'],
    // error; 结尾必须有分号
    semi: [2, 'always'],
    // 禁止在函数的 ( 前面有空格。存在async () => 这种问题，所以干掉这个
    'space-before-function-paren': 'off',
    // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
    'comma-dangle': ['error', 'only-multiline'],
    // 规定逗号后面必须添加空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 缩进字节数
    indent: [
      'error',
      2,
      {
        SwitchCase: 1, // case 子句将相对于 switch 语句缩进 2 个空格。
      },
    ],
    // 字符串最大长度
    'max-len': 'off',
    // 字面量属性不严格使用""号
    'quote-props': ['error', 'as-needed'],
    // 允许在空行使用空白符\允许在注释块中使用空白符
    'no-trailing-spaces': ['error', { skipBlankLines: true, ignoreComments: true }],
    // 允许使用常量表达式 if(true)
    'no-constant-condition': 'off',
    // 使用单引号代替双引号 | 允许字符串使用``
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-unused-expressions': 'off',
    // 允许单行中不使用大括号 if(true) xxx
    curly: ['error', 'multi-line'],
    // 这禁止掉 空格报错检查
    'no-irregular-whitespace': 'off',
    // 使用驼峰命名
    camelcase: 'off',
    //es6 模块 -------------------
    // error; 箭头函数的箭头前后必须有空格
    'arrow-spacing': [2, { before: true, after: true }],
    // error; 禁止import重复模块
    'no-duplicate-imports': 2,
    // error; 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 非空文件末尾至少存在一行空行（或缺少换行）off 不用
    'eol-last': ['off'],
    // 关于引入的顺序，这玩意有点智障，关了
    'import/order': ['off'],
    // 允许使用obj["a"]和obj.a的模式
    'dot-notation': ['off'],
    // vuelint文档 https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
    // 允许在dom里面输入符号
    'vue/no-parsing-error': [
      'error',
      {
        // 可以允许dom中使用符号
        'invalid-first-character-of-tag-name': false,
      },
    ],
    // template根元素可以有多个off关闭校验 vue3支持
    'vue/no-multiple-template-root': ['off'],
    // "PascalCase" |  "kebab-case"
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/require-prop-types': ['off'],
    'vue/html-closing-bracket-newline': ['off'],
    // 'vue/html-closing-bracket-newline': [
    //   'error',
    //   {
    //     // singleline: '',
    //     // multiline: 'never',
    //     multiline: 'never',
    //   },
    // ],
    // {{}}里面不用空格
    'vue/mustache-interpolation-spacing': ['error'],
    'vue/singleline-html-element-content-newline': ['off'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 999, // 每行的最大属性数
        multiline: {
          max: 999, //he max number of attributes per line when the opening tag is in multiple lines
          allowFirstLine: true,
        },
      },
    ],
    'vue/no-use-v-if-with-v-for': ['off'],
    // 不强制要求自动关闭标签
    'vue/html-self-closing': ['off'],
    'vue/name-property-casing': ['off'], // vue的name命名规则 无限制
    'vue/attributes-order': ['off'], // 关闭标签属性顺序提示
    'vue/component-name-in-template-casing': ['off'],
    'vue/no-unused-components': ['off'],
    'vue/no-unused-vars': ['off'], // 不强制vue节点中的参数必须使用
    // ts 模块 --------------------- https://github.com/typescript-eslint/typescript-eslint/tree/v2.34.0/packages/eslint-plugin/docs/rules
    // 未使用的参数
    '@typescript-eslint/no-unused-vars': ['off'],
    // 返回值没必要，比如生命周期就没必要加void
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/camelcase': ['off'],
  },
};
