import { memo, type FC, type ReactNode } from 'react';

interface Props {
    children: ReactNode,
    className?: string
}

const Box:FC<Props> = ({children,className}) => {
  return (
    <div className={`${className} p-4 rounded-xl bg-white shadow mb-4`}>
      {children}
    </div>
  );
};

export default memo(Box);