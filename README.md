# Markdown Editor

> 本项目基于 [@doocs/md](https://github.com/doocs/md) 进行二次开发，增加了 Electron 客户端支持。

一款高度简洁的微信 Markdown 编辑器，支持 Markdown 所有基础语法、色盘取色、一键复制并粘贴到公众号后台、多图上传、一键下载图片素材等特性。

## 特性

- [x] 支持所有基础的 Markdown 语法
- [x] 支持实时预览
- [x] 支持代码高亮
- [x] 支持色盘取色，一键设置字体颜色
- [x] 支持多图上传
- [x] 支持一键复制到公众号后台
- [x] 支持下载 Markdown 文本
- [x] 支持下载图片素材
- [x] 支持在线图床，多个仓库备份
- [x] 支持在线编辑和本地编辑（Electron 应用）

## 环境配置

1. 复制 `.env.example` 到 `.env`
2. 在 `.env` 中填入你的配置信息：
   ```
   # GitHub configuration
   GITHUB_TOKEN=your_github_token_here
   
   # Gitee configuration
   GITEE_TOKEN=your_gitee_token_here
   ```

注意：请勿将包含真实令牌的 .env 文件提交到代码库中！

## 功能特点

### 图床支持
- 支持 GitHub 图床
- 支持 Gitee 图床
- 多仓库备份，自动分发
- 支持配置多个 Token，自动切换

### Electron 特性
- 支持本地文件拖拽
- 支持离线使用
- 支持自动更新
- 跨平台支持（Windows/Mac/Linux）

## License

[MIT](LICENSE)
