import React from 'react';
interface Props{
    children: React.ReactNode,
    className?: string,
};

const Container = ({children,className}:Props) => {
  return (
    <div className={`${className} max-w-screen-xl mx-auto px-4 xl:px-12 py-10`}>
      {children}
    </div>
  )
}

export default Container;