import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react"; // иконки для бургера

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // для бургера на мобилках
  const [isHovered, setIsHovered] = useState(false); // для ховера на десктопе

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarWidth = isOpen || isHovered ? "w-64" : "w-16";

  return (
    <>
      {/* Кнопка бургера только на мобилках */}
      <div className="md:hidden p-2">
        <button
          onClick={toggleSidebar}
          className="text-purple-600 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-purple-100 p-4 flex flex-col justify-between transition-all duration-300 z-0
        ${sidebarWidth} ${isOpen ? "block" : "hidden"} md:block`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Навигация */}
        <div className="space-y-2">
          <SidebarLink
            to="/"
            icon="🏠"
            label="Приборна панель"
            isOpen={isOpen || isHovered}
          />
          <SidebarLink
            to="/transactions"
            icon="📄"
            label="Транзакції"
            isOpen={isOpen || isHovered}
          />
          <SidebarLink
            to="/budget"
            icon="💰"
            label="Бюджет"
            isOpen={isOpen || isHovered}
          />
          <SidebarLink
            to="/analytics"
            icon="📈"
            label="Аналітика"
            isOpen={isOpen || isHovered}
          />
          <SidebarLink
            to="/goals"
            icon="🎯"
            label="Цілі"
            isOpen={isOpen || isHovered}
          />
        </div>

        <div></div>
      </div>
    </>
  );
};

interface SidebarLinkProps {
  to: string;
  icon: string;
  label: string;
  isOpen: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  icon,
  label,
  isOpen,
}) => {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 p-2 rounded hover:bg-purple-700 hover:text-white transition"
    >
      <span className="text-xl">{icon}</span>
      {isOpen && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
};

export default Sidebar;
