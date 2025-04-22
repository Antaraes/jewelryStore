import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface DropdownMenuProps {
  item: NavItem;
  isMobile: boolean;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ item, isMobile }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer text-foreground hover:text-muted-foreground"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
      >
        <span>{item.label}</span>
        {item.children && (
          <ChevronDown
            className={`ml-1 h-4 w-4 transition-transform text-foreground ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {item.children && isOpen && (
        <div
          className={`${
            isMobile
              ? "pl-4 pt-2 pb-1"
              : "absolute top-full left-0 bg-background shadow-md min-w-max z-10 py-2 border border-border rounded-md"
          }`}
          onMouseEnter={() => !isMobile && setIsOpen(true)}
          onMouseLeave={() => !isMobile && setIsOpen(false)}
        >
          {item.children.map((child, idx) => (
            <a
              key={idx}
              href={child.url}
              className={`block ${
                isMobile ? "py-1" : "px-4 py-2"
              } text-foreground hover:bg-muted hover:text-muted-foreground text-sm`}
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
