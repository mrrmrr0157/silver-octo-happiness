# 陈颖作品集上线到 GitHub Pages 步骤

本项目已按仓库名 `silver-octo-happiness` 配好 GitHub Pages 路径。

上线后链接通常是：

```text
https://你的GitHub用户名.github.io/silver-octo-happiness/
```

## 1. 在 GitHub 新建仓库

1. 打开 GitHub。
2. 点右上角 `+`。
3. 选择 `New repository`。
4. 仓库名填写：

```text
silver-octo-happiness
```

5. 选择 `Public`。
6. 不要勾选 README、.gitignore、license。
7. 点 `Create repository`。

## 2. 上传本地项目

在本项目目录执行以下命令：

```powershell
git init
git add .
git commit -m "init portfolio"
git branch -M main
git remote add origin https://github.com/mrrmrr0157/silver-octo-happiness.git
git push -u origin main
```

把 `你的GitHub用户名` 换成你的真实 GitHub 用户名。

## 3. 打开 GitHub Pages

1. 进入 GitHub 仓库页面。
2. 点 `Settings`。
3. 左侧点 `Pages`。
4. `Source` 选择 `GitHub Actions`。
5. 回到仓库的 `Actions` 页面，等待 `Deploy portfolio to GitHub Pages` 运行完成。

## 4. 获取在线链接

部署成功后，GitHub Pages 会显示链接。一般格式是：

```text
https://mrrmrr0157.github.io/silver-octo-happiness/
```

这个链接就可以发给 HR 或面试官。

## 如果你换了仓库名

如果仓库名不是 `silver-octo-happiness`，需要同步修改：

```js
// vite.config.js
base: '/你的仓库名/',
```
