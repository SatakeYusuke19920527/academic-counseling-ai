import React from 'react';
import { BsRocketTakeoff } from 'react-icons/bs';
import NavItem from './NavItem';

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
    {
      id: 1,
      label: '進路相談AI',
      link: '/',
      icon: <BsRocketTakeoff className="size-5" />,
    },
    {
      id: 2,
      label: '質問',
      link: '/components/question/questionMain1',
      icon: <BsRocketTakeoff className="size-5" />,
    }
  ];
  return (
    <div className="mt-12">
      {navList.map((navItem) => {
        return (
          <NavItem
            label={navItem.label}
            link={navItem.link}
            icon={navItem.icon}
            key={navItem.id}
          />
        );
      })}
    </div>
  );
};

export default NavList;
