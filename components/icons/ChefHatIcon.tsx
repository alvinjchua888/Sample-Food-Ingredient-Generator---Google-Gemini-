
import React from 'react';

const ChefHatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3c2.4 0 4.3.8 5.4 2.1.2.2.3.5.3.8v3.2c0 .3-.1.6-.3.8-.5.5-1.2.8-2 .9V12h-2v-2.1c-.8-.1-1.5-.4-2-.9-.2-.2-.3-.5-.3-.8V6c0-.3.1-.6.3-.8C7.7 3.8 9.6 3 12 3z" />
    <path d="M4 12h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z" />
  </svg>
);

export default ChefHatIcon;
