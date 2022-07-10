import React, { FC, PropsWithChildren } from 'react';

import './GridList.scss';

interface GridListProps extends PropsWithChildren {
  columns: string | number;
}

export const GridList: FC<GridListProps> = (props) => {
  const columnCount = String(props.columns) || '2';
  const containerClass = `grid-list columns-${columnCount}`;

  return (
    <div className={containerClass}>
      {props.children}
    </div>
  );
};
