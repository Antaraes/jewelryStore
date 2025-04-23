import React from "react";

interface EducationLinkProps {
  title: string;
  href: string;
}

const EducationLink: React.FC<EducationLinkProps> = ({ title, href }) => {
  return (
    <a
      href={href}
      className="education-link group flex justify-between items-center p-4 border border-gray-200 rounded-md hover:border-blue-300 hover:shadow-md transition-all duration-300"
    >
      <span className="text-gray-700 group-hover:text-blue-900">{title}</span>
      <span className="link-icon text-blue-900 bg-blue-50 p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </span>
    </a>
  );
};

export default EducationLink;
