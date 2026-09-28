import React, { useEffect, useState } from "react";

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  // TODO: Set up state to track the active tab
  const [selectedButton, setSelectedButton] = useState("home");

  const handleClick = (id) => {
    setSelectedButton(id);
  };

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {/* TODO: Render buttons for each tab */}
        {/* Use data-testid={`tab-button-${tab.id}`} for each button */}
        {tabs.map((tab) => (
          <>
            <button
              data-testid={`tab-button-${tab.id}`}
              onClick={() => handleClick(tab.id)}
              key={tab.id}
              className={selectedButton === tab.id ? "active" : ""}
            >
              {tab.label}
            </button>
          </>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {/* TODO: Show content of the currently active tab */}
        {tabs.find((tab) => tab.id === selectedButton)?.content}
      </div>
    </div>
  );
}
