# browserExtensionFunction

## 実装機能
youtubeで広告をskipする。  
具体的には、以下のようなことをしている。
* 右下に出てくる広告表示をまであと〇秒を非表示にする
* 広告が表示された時に自動でskipする

## 対応ブラウザ
* chrome

## 使用方法
1. 本リポジトリをgit cloneする
1. ブラウザの拡張機能から、`パッケージ化されていない拡張機能を読み込む`を選択して`src`ディレクトリを読み込ませる。
1. [youtube](https://www.youtube.com/)を表示して、consoleに`ようつべ広告スキップします!`と表示されていれば、OK！

## 参考
* [chrome拡張機能作成方法](https://qiita.com/RyBB/items/32b2a7b879f21b3edefc)