
const updateInstructions = {
  "Step 1": "Add header styles CSS link in the <head> section",
  "cssLink": '<link rel="stylesheet" href="components/header-styles.css" />',
  
  "Step 2": "Replace the entire header section (from preloader to header end) with:",
  "headerReplace": '<div include-html="components/complete-header.html"></div>',
  
  "Step 3": "Replace the footer section with:",
  "footerReplace": '<div include-html="components/footer.html"></div>',
  
  "Step 4": "Add include script before closing </body> tag:",
  "scriptAdd": '<script src="components/include.js"></script>',
  
  "sectionsToRemove": [
    "<!-- Preloader section -->",
    "<!-- Overlay sections -->",
    "<!-- Scroll to top -->", 
    "<!-- Mobile menu section and styles -->",
    "<!-- Top header section and styles -->",
    "<!-- Marquee section and styles -->",
    "<!-- Main header section -->",
    "<!-- Footer section -->",
    "<!-- Mobile menu JavaScript -->"
  ],
  
  "filesToUpdate": [
    "about-us.html",
    "academics.html", 
    "accreditations-rankings.html",
    "admissions-procedure.html",
    "all-programs.html",
    "bank-details.html",
    "contact.html",
    "fees-Structure-2025-26.html",
    "gallery.html",
    "infrastructure.html",
    "leadership.html",
    "placements.html",
    "research.html",
    "scholarship.html",
    "sports.html",
    "student-life.html",
    "university_profile.html",
    "values.html",
    "virtual-tour.html",
    // Add all your HTML files here
  ]
};

console.log("HTML Pages Update Instructions:");
console.log("================================");
console.log("");

Object.keys(updateInstructions).forEach(key => {
  if (key.startsWith("Step")) {
    console.log(`${key}: ${updateInstructions[key]}`);
    console.log("");
  }
});

console.log("Code snippets to add:");
console.log("====================");
console.log("");
console.log("1. CSS Link (add in <head>):");
console.log(updateInstructions.cssLink);
console.log("");
console.log("2. Header replacement:");
console.log(updateInstructions.headerReplace);
console.log("");
console.log("3. Footer replacement:");
console.log(updateInstructions.footerReplace);
console.log("");
console.log("4. JavaScript (add before </body>):");
console.log(updateInstructions.scriptAdd);
console.log("");

console.log("Files to update:");
console.log("================");
updateInstructions.filesToUpdate.forEach(file => {
  console.log(`- ${file}`);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = updateInstructions;
}