/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-26 13:38:35
 * @LastEditTime: 2021-05-26 14:39:12
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: \lg-react-ui\.umirc.ts
 */
import { defineConfig } from 'dumi';

const BASE_URI = 'http://localhost:8000';
export default defineConfig({
  title: 'lg-react-mobile',
  description: '世间犹若浓汤，你我皆在碗中沉浮。',
  mode: 'doc', // site: 站点模式（导航头 + 左侧菜单 + 右侧内容）。 doc：文档
  favicon: BASE_URI + '/images/favicon.ico',
  logo: BASE_URI + '/images/icon_logo.png',
  outputPath: 'docs-dist',
 
  // more config: https://d.umijs.org/config
});
