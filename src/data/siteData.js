export const CONTACT = {
  phoneDisplay: "+91 62990 55812",
  phoneRaw: "+916299055812",
  whatsappUrl: "https://wa.me/916299055812",
  email: "muskansales.service@gmail.com",
  technicianImage: "/technician.svg",
};

// Update these photo paths anytime from code side.
// Add/replace image files inside /public and use absolute paths like "/tv-work-1.jpg".
const DEFAULT_WORK_PHOTOS = ["/work-placeholder.svg", "/work-placeholder.svg"];

export const BRANDS = [
  "Blowhot Kitchen Appliances Pvt Ltd",
  "RICO Appliances Pvt. Ltd.",
  "Aisen Home Appliance",
];

export const SERVICES = [
  {
    id: "tv",
    icon: "📺",
    title: "LED TV Service",
    points: ["TV Installation", "Wall Mount Support", "LED TV Repair"],
    rate: "Starts at Rs. 399",
    photos: DEFAULT_WORK_PHOTOS,
    featured: true,
  },
  {
    id: "ro",
    icon: "💧",
    title: "KENT RO Service",
    points: ["RO Installation", "Filter & System Repair", "Routine Service Support"],
    rate: "Starts at Rs. 349",
    photos: DEFAULT_WORK_PHOTOS,
    featured: false,
  },
  {
    id: "wm",
    icon: "🧺",
    title: "Washing Machine",
    points: ["Installation", "Fully Automatic Repair", "Semi-Automatic Repair"],
    rate: "Starts at Rs. 499",
    photos: DEFAULT_WORK_PHOTOS,
    featured: true,
  },
  {
    id: "geyser",
    icon: "🔥",
    title: "Geyser Service",
    points: ["New Installation", "Heating Issue Repair", "Regular Maintenance"],
    rate: "Starts at Rs. 299",
    photos: DEFAULT_WORK_PHOTOS,
    featured: false,
  },
  {
    id: "ac",
    icon: "❄️",
    title: "AC Service",
    points: ["AC Installation", "Gas Charging & Repair", "Cooling & Leakage Solutions"],
    rate: "Starts at Rs. 699",
    photos: DEFAULT_WORK_PHOTOS,
    featured: true,
  },
  {
    id: "all",
    icon: "🏠",
    title: "All Home Appliances",
    points: ["Multi-brand Appliance Support", "Quick Doorstep Service", "Trusted Technician Assistance"],
    rate: "Custom quote after inspection",
    photos: DEFAULT_WORK_PHOTOS,
    featured: false,
  },
];
