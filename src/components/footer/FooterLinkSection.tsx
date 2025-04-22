import React from "react";

interface FooterLinkSectionProps {
  linkGroup: FooterLinkGroup;
}

export const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({ linkGroup }) => {
  return (
    <div className="mb-6 md:mb-0">
      <h2 className="mb-4 font-medium text-gray-800">{linkGroup.title}</h2>
      <ul className="space-y-2">
        {linkGroup.links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
