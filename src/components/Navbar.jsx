import React from 'react';
import CardNav from './CardNav';
import logo from '/public/logo-black.png';
import { navigateTo } from './Router';
import Button from './playnow';

export default function Navbar() {
  const items = [
    {
      label: "Community",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Join Community", ariaLabel: "Join Community", onClick: () => navigateTo('community') },
        { label: "Join Esports", ariaLabel: "Join Esports", onClick: () => navigateTo('esports') },
        { label: "View Seasons", ariaLabel: "View Seasons", onClick: () => navigateTo('seasons') },
        { label: "Latest News", ariaLabel: "News", onClick: () => navigateTo('news') },
      ]
    },
    {
      label: "Details",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Explore Maps", ariaLabel: "Maps", onClick: () => navigateTo('maps') },
        { label: "Explore Weapons", ariaLabel: "Weapons", onClick: () => navigateTo('weapon') },
        { label: "View Characters", ariaLabel: "Characters", onClick: () => navigateTo('characters') },
        { label: "Explore Modes", ariaLabel: "Modes", onClick: () => navigateTo('modes') },
      ]
    },
    {
      label: "Store",
      bgColor: "#4C3777",
      textColor: "#fff",
      links: [
        { label: "Visit Store", ariaLabel: "Store", onClick: () => navigateTo('store') },
      ]
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-transparent">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <CardNav
          logo={logo}
          logoAlt="VARYN Logo"
          items={items.map(section => ({
            ...section,
            links: section.links.map(link => ({
              ...link,
              element: (
                <button
                  onClick={link.onClick}
                  aria-label={link.ariaLabel}
                  className="w-full text-left text-white hover:text-violet-400 transition-all cursor-pointer"
                >
                  {link.label}
                </button>
              )
            }))
          }))}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </nav>
    </header>
  );
}