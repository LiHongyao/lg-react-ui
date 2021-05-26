/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-26 14:10:51
 * @LastEditTime: 2021-05-26 14:29:46
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: \lg-react-ui\src\components\NoData\index.tsx
 */

import React, { memo } from 'react';
import './index.less';

interface IProps {
  tips?: string;
}

const NoData: React.FC<IProps> = ({ tips }) => {
  return (
    <div className="lg-no-data">
      <img
        className="lg-no-data__img"
        src={require('./images/no-data__1.png')}
        alt=""
      />
      <div className="lg-no-data__tips">{tips}</div>
    </div>
  );
};

export default memo(NoData);
