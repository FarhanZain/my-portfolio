import React, { ReactNode } from "react";
import { useRouter } from 'next/router'

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

const RegularCard: React.FC<CardProps> = ({ children, className = "", href = "" }) => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  }

  return (
    <div className={`rounded-3xl border border-[#222222] bg-[#171717] overflow-hidden ${className}`} onClick={handleClick}>
      {children}
    </div>
  );
};

export default RegularCard;
