/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-26 14:10:51
 * @LastEditTime: 2021-05-26 14:29:46
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: \lg-react-ui\src\components\NoData\index.tsx
 */
import React, { memo } from 'react';
import "./index.css";

var NoData = function NoData(_ref) {
  var tips = _ref.tips;
  return /*#__PURE__*/React.createElement("div", {
    className: "lg-no-data"
  }, /*#__PURE__*/React.createElement("img", {
    className: "lg-no-data__img",
    src: require('./images/no-data__1.png'),
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "lg-no-data__tips"
  }, tips));
};

export default /*#__PURE__*/memo(NoData);