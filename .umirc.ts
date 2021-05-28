/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-26 13:38:35
 * @LastEditTime: 2021-05-27 14:13:27
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: \lg-react-ui\.umirc.ts
 */
import { defineConfig } from 'dumi';

const BASE_URI = '/lg-react-ui'; // 仓库路径
export default defineConfig({
  title: 'lg-react-ui',
  description: '世间犹若浓汤，你我皆在碗中沉浮。', // 描述信息（仅在doc模式下生效）
  mode: 'doc', // site: 站点模式（导航头 + 左侧菜单 + 右侧内容）。 doc：文档
  favicon: BASE_URI + '/images/favicon.ico',
  logo: BASE_URI + '/images/icon_logo.png',

  // 打包路径配置
  base: BASE_URI,
  publicPath: BASE_URI + '/', // 打包文件时，引入地址生成 publicPath/xxx.js
  outputPath: 'docs-dist',
  exportStatic: {}, // 对每个路由输出html
  dynamicImport: {}, // 动态导入
  hash: true, //加hash配置，清除缓存
  manifest: {
    // 内部发布系统规定必须配置
    fileName: 'manifest.json',
  },
});
