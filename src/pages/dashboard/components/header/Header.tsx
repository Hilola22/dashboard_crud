import { memo } from 'react';

const Header = () => {
  return (
    <div className="w-full h-16 bg-white flex items-center justify-between px-4 border-b border-slate-200">
      <h2>Header</h2>
    </div>
  );
};

export default memo(Header);