import { useState } from "react";
import logo from "./logo.jpeg";
import Desc from "./desc";
import { Info } from "lucide-react";

const componentsList = {
    "Text Inputs": ["Single-line input", "Password input", "Search bar input"],
    "Text Areas": ["Basic multi-line", "Auto-resizing text area", "With a character counter"],
    "Checkboxes": ["Basic checkbox", "Checkbox with label and description", "Checkbox group (multi-select)"],
    "Radio Buttons": ["Basic radio group", "With icons", "Inline radio group"],
    "Toggles & Switches": ["Basic toggle", "Toggle with icons (e.g. sun/moon)", "Labeled toggle"],
    "Dropdowns & Select Menus": ["Basic dropdown", "Dropdown with search", "Multi-select dropdown"],
    "Navigation Bars": ["Horizontal top navbar", "Sidebar navigation", "Mobile bottom nav"],
    "Breadcrumbs": ["Basic breadcrumb trail", "With icons", "Collapsed breadcrumb for long paths"],
    "Tabs": ["Basic horizontal tabs", "Vertical tabs", "Icon tabs"],
    "Pagination": ["Numbered pagination", "Prev/Next style", "With page jumper"],
    "Modals": ["Centered modal", "Full-screen modal", "Slide-in modal (side panel)"],
    "Tooltips": ["Top tooltip", "Hover-based with animation", "Tooltip with CTA"],
    "Toasts-Notifications": ["Success message", "Error alert", "Info message with action button"],
    "Alerts": ["Inline error message", "Warning banner", "Confirm alert box"],
    "Tables": ["Basic table", "Table with sorting-filtering", "Table with row actions"],
    "Cards": ["Basic content card", "Image card with CTA", "Product or pricing card"],
    "Lists": ["Bulleted list", "List with avatars", "Interactive list items"],
    "Badges": ["Status badge (e.g., active)", "Number badge (notifications)", "Icon badge"],
    "Buttons": ["Primary button", "Secondary-ghost button", "Icon button"],
    "Button Groups": ["Segmented controls", "Toolbar with multiple actions", "FAB with sub-actions"],
    "Basic Form": ["Name, email, message", "Login form", "Signup form"],
    "Advanced Layouts": ["Multi-step form", "Inline form", "Form in modal"],
    "Avatars": ["Initials avatar", "Image avatar", "Avatar with status dot"],
    "Image Displays": ["Responsive image grid", "Lightbox gallery", "Image with caption"],
    "Video Embeds": ["Embedded player", "Video with controls", "Auto-play muted thumbnail"],
    "Spinners": ["Circular spinner", "Dots animation", "Linear progress bar"],
    "Skeleton Screens": ["Text and image skeleton", "Card skeleton", "Table skeleton"],
    "Side Drawers": ["Left-side drawer", "Right-side with settings", "Persistent vs. temporary"],
    "Overlays": ["Full-screen overlay", "Overlay with dim background", "Overlay with blur"],
    "Chips": ["Filter chips", "Input chips", "Choice chips"],
    "Accordions": ["Basic accordion", "Icon + label accordion", "Nested accordion"],
    "Steppers": ["Horizontal stepper", "Vertical wizard", "Progress + step indicator"],
    "Calendars & Pickers": ["Date picker", "Time picker", "Date range picker"]
  };
  

// Function to dynamically load images from component & subcomponent folders
const getImagePaths = (component, variant) => {
  const basePath = `/components/${component}/${variant}/`;
  const maxImages = 5; // Adjust this based on expected max images

  // Generate potential image paths
  return Array.from({ length: maxImages }, (_, i) => ({
    src: `${basePath}image${i + 1}.png`,
    id: i + 1, // Unique ID for React rendering
  }));
};


export default function StorybookClone() {
  const [selectedComponent, setSelectedComponent] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [search, setSearch] = useState("");
  const [expandedComponents, setExpandedComponents] = useState([]);
  const [showDesc, setShowDesc] = useState(true);

  const filteredComponents = Object.keys(componentsList)
    .map((component) => {
      const matchedVariants = componentsList[component].filter((variant) =>
        variant.toLowerCase().includes(search.toLowerCase())
      );
      if (component.toLowerCase().includes(search.toLowerCase())) {
        return { component, variants: componentsList[component] };
      } else if (matchedVariants.length > 0) {
        return { component, variants: matchedVariants };
      }
      return null;
    })
    .filter(Boolean);

  const toggleComponent = (component) => {
    setExpandedComponents((prev) =>
      prev.includes(component)
        ? prev.filter((item) => item !== component)
        : [...prev, component]
    );
  };

  const handleComponentClick = (component, variant = "") => {
    setSelectedComponent(""); // Reset to force re-render
    setTimeout(() => {
      setSelectedComponent(component);
      setSelectedVariant(variant);
      setShowDesc(false);
    }, 10);
  };
  

  const handleAboutClick = () => {
    setShowDesc(true);
    setSelectedComponent("");
    setSelectedVariant("");
  };

  return (
    <div className="flex h-screen w-full font-figtree">
      {/* Sidebar */}
      <aside className="w-72 p-4 flex flex-col border-r border-gray-300 bg-white shadow-md">
        <img src={logo} alt="Tcules Logo" className="w-32 mx-auto mb-4" />
        <input
          type="text"
          placeholder="Find components"
          className="mt-2 p-2 rounded border border-gray-400 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="mt-4 p-2 rounded w-full font-semibold text-black transition-all flex items-center gap-2"
          onClick={handleAboutClick}
        >
          <Info className="w-5 h-5" /> About This
        </button>
        <div className="mt-4 flex-1 overflow-auto">
          {filteredComponents.map(({ component, variants }, index) => (
            <div key={index}>
              <button
                className="w-full text-left p-2 font-medium hover:bg-gray-200 hover:text-blue-500 transition-all"
                onClick={() => toggleComponent(component)}
              >
                {component}
              </button>
              {(expandedComponents.includes(component) || search) && (
                <div className="ml-4 mt-1">
                  {variants.map((variant, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left p-2 text-sm hover:bg-gray-200 hover:text-blue-700 transition-all"
                      onClick={() => handleComponentClick(component, variant)}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 flex flex-col">
        {showDesc && !selectedComponent && (
          <div className="p-6 mb-6 bg-white shadow-md rounded-lg border border-gray-300">
            <Desc />
          </div>
        )}
        {selectedComponent && (
          <>
            <h1 className="text-2xl font-semibold text-gray-800">{selectedComponent}</h1>
            {selectedVariant && (
              <p className="text-gray-600 mt-2">Selected Variant: {selectedVariant}</p>
            )}
            {/* Dynamically Load Images */}
            {selectedVariant && (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
    {getImagePaths(selectedComponent, selectedVariant).map(({ src, id }) => (
      <img
        key={id}
        src={src}
        alt={`${selectedVariant} ${id}`}
        className="rounded shadow-md w-full h-auto"
        onError={(e) => e.target.style.display = "none"} // Hide images that fail to load
      />
    ))}
  </div>
)}



          </>
        )}
      </main>
    </div>
  );
}
