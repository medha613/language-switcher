// implement useTranslation hook- make less important. but it make website irresponsive for that amount of time
"use client";

import { useState, useTransition } from "react";

export default function ProductsPage() {
  const [isPending, startTranslation] = useTransition();
  const [selectedTab, setSelectedTab] = useState();
  const [tabs, setTabs] = useState([
    { id: 1, name: "Tab 1" },
    { id: 2, name: "Tab 2" },
    { id: 3, name: "Tab 3" },
    { id: 4, name: "Tab 4" },
    { id: 5, name: "Tab 5" },
  ]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  
  
  return (
    <>
      {tabs.map((tab) => (
        <>
          <div key={tab.id} className="flex flex-col gap-2">
            <button
              onClick={() => {
                startTranslation(() => {
                  setSelectedTab(tab.id);
                });
              }}
              className={`p-2 rounded-md ${
                selectedTab === tab.id ? "bg-blue-500" : "bg-gray-200"
              }`}
            >
              {tab.name}
            </button>
            {/* {selectedTab === tab.id && (
                <div className="p-4 bg-gray-100 border rounded-md">
                    Content for {tab.name}
                </div>
                )} */}
          </div>
        </>
      ))}
    </>
  );
}
