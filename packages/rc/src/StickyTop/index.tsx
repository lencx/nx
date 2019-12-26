import React from 'react';
import styled from 'styled-components';

export interface StickyTopProps {
  children: React.ReactNode,
  title: React.ReactNode,
  className?: string,
}

export default function StickyTop({ children, title, className }: StickyTopProps) {
  return (
    <div className={className}>
      <Header>{title}</Header>
      <div>{children}</div>
    </div>
  )
}

const Header = styled.div`
  position: sticky;
  background: #fff;
  top: 0;
`;