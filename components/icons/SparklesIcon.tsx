
import React from 'react';

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="m12 3-1.9 1.9-1.1-3-2 2-3-1.1L3 12l1.9 1.9 1.1 3 2-2 3 1.1L21 12l-1.9-1.9-1.1-3-2 2-3-1.1Z" />
    <path d="M22 12h-2" />
    <path d="M2 12H4" />
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
  </svg>
);

export default SparklesIcon;
