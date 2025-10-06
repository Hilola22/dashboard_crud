import { memo, type FC, type ReactNode } from 'react';

interface Props {
    children: ReactNode,
    className?: string
}

const Title:FC<Props> = ({children,className}) => {
  return (
    <h3 className={`${className} text-xl font-bold`}>
      {children}
    </h3>
  );
};

export default memo(Title);