# PowerShell script to update all HTML pages to use the new component system
# Run this script from the root directory of your project

Write-Host "UNWH Website Component Update Script" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Green
Write-Host ""

# Define the files to update (add all your HTML files here)
$htmlFiles = @(
    "about-us.html",
    "academics.html", 
    "accreditations-rankings.html",
    "admissions-procedure.html",
    "all-programs.html",
    "bank-details.html",
    "career.html",
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
    "virtual-tour.html"
    # Add more files as needed
)

# CSS link to add
$cssLink = '    <!-- Header Components CSS -->' + "`n" + '    <link rel="stylesheet" href="components/header-styles.css" />'

# Header replacement
$headerInclude = '    <!-- Include Complete Header -->' + "`n" + '    <div include-html="components/complete-header.html"></div>'

# Footer replacement  
$footerInclude = '    <!-- Include Footer -->' + "`n" + '    <div include-html="components/footer.html"></div>'

# JavaScript to add
$jsInclude = '    <!-- Include System for Components -->' + "`n" + '    <script src="components/include.js"></script>'

Write-Host "This script will help you update your HTML files to use the new component system." -ForegroundColor Yellow
Write-Host ""
Write-Host "What it will do:" -ForegroundColor Cyan
Write-Host "1. Add header components CSS link in the <head> section" -ForegroundColor White
Write-Host "2. Replace header sections with component includes" -ForegroundColor White
Write-Host "3. Replace footer sections with component includes" -ForegroundColor White
Write-Host "4. Add include system JavaScript" -ForegroundColor White
Write-Host ""

Write-Host "IMPORTANT: This script provides guidance. You'll need to manually apply these changes." -ForegroundColor Red
Write-Host ""

Write-Host "Files to update:" -ForegroundColor Cyan
foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        Write-Host "✓ $file" -ForegroundColor Green
    } else {
        Write-Host "✗ $file (not found)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Manual Steps for each file:" -ForegroundColor Yellow
Write-Host ""

Write-Host "Step 1: Add CSS link in head section (after main.css):" -ForegroundColor Cyan
Write-Host $cssLink -ForegroundColor White
Write-Host ""

Write-Host "Step 2: Replace entire header section (from preloader to header end) with:" -ForegroundColor Cyan
Write-Host $headerInclude -ForegroundColor White
Write-Host ""

Write-Host "Step 3: Replace footer section with:" -ForegroundColor Cyan
Write-Host $footerInclude -ForegroundColor White
Write-Host ""

Write-Host "Step 4: Add JavaScript before closing body tag:" -ForegroundColor Cyan
Write-Host $jsInclude -ForegroundColor White
Write-Host ""

Write-Host "Example of updated file structure:" -ForegroundColor Yellow
$exampleCode = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- existing head content -->
    <link rel="stylesheet" href="assets/css/main.css" />
    <!-- Header Components CSS -->
    <link rel="stylesheet" href="components/header-styles.css" />
</head>
<body>
    <!-- Include Complete Header -->
    <div include-html="components/complete-header.html"></div>
    
    <!-- Your page content here -->
    
    <!-- Include Footer -->
    <div include-html="components/footer.html"></div>
    
    <!-- existing scripts -->
    <!-- Include System for Components -->
    <script src="components/include.js"></script>
</body>
</html>
"@
Write-Host $exampleCode -ForegroundColor White

Write-Host ""
Write-Host "Benefits of this system:" -ForegroundColor Green
Write-Host "• Consistent header/footer across all pages" -ForegroundColor White
Write-Host "• Easy to update - change once, updates everywhere" -ForegroundColor White
Write-Host "• Better maintainability" -ForegroundColor White
Write-Host "• Organized code structure" -ForegroundColor White

Write-Host ""
Write-Host "Need help? Check the README.md file in the components folder!" -ForegroundColor Cyan