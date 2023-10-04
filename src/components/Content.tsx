import React, { ReactNode } from 'react';

interface ContentProps  {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main className="w-3/4 p-4">
      {children}
    </main>
  );
};

export default Content;