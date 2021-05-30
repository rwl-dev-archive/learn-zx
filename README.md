# Learn zx
以下Zenn Scrapsの写経のようなもの  
https://zenn.dev/korosuke613/scraps/07729cd55a628b

## なぜやるのか
コマンドをShellで書くということがどうしても苦手で、JavaScriptでShellを書きたかった。    
最初はDenoで書きたいという気持ちで始めたが、Skypackやesm.shなど、主要なサービスでzxは利用できない状態だったため断念している。

## 何をやったのか
zxを`.mjs`形式と`.ts`形式で触ってみた。

### `.mjs`
公式が推奨する拡張子形式。  
zxをグローバルインストールして`.mjs`で実行すれば、すぐに実行ができる。コード内部に`import ...`と書く必要もない。  
手軽に試すなら、この形式。

### `.ts`
私が好きなTypeScriptで書ける拡張子形式。    
`ts-node`単体だと以下のようなエラーが出る。

``` bash
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /Users/windchime-yk/Documents/web/learn-zx/main.ts
    at Loader.defaultGetFormat [as _getFormat] (internal/modules/esm/get_format.js:65:15)
    at Loader.getFormat (internal/modules/esm/loader.js:101:42)
    at Loader.getModuleJob (internal/modules/esm/loader.js:230:31)
    at Loader.import (internal/modules/esm/loader.js:164:17)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
```

これはおそらく、`package.json`でESモジュールであることを明示しているためと思われる。   
以下のコマンドで解決すると書かれていた[記事](https://zenn.dev/tak_iwamoto/articles/862527e69f544e)があり、実行したところエラーは出なかった。

``` bash
node --loader ts-node/esm src/main.ts
```
