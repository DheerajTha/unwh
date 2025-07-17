# UNWH Website Components

This folder contains reusable header and footer components for the UNWH website.

## Folder Structure

```
components/
├── complete-header.html      # Complete header with all components
├── footer.html              # Footer component
├── header-styles.css        # Combined CSS for all header components
├── include.js              # JavaScript include system
├── main-header.html        # Main navigation header
├── marquee.html            # Marquee component
├── marquee-styles.css      # Marquee-specific styles
├── mobile-menu.html        # Mobile menu component
├── mobile-menu-styles.css  # Mobile menu styles
├── top-header.html         # Top header with contact info
├── top-header-styles.css   # Top header styles
└── README.md               # This file
```

## Usage Methods

### Method 1: Complete Header Include (Recommended)

Add this to your HTML pages after the `<body>` tag:

```html
<!-- Include header styles -->
<link rel="stylesheet" href="components/header-styles.css" />

<!-- Include complete header -->
<div include-html="components/complete-header.html"></div>

<!-- Include footer -->
<div include-html="components/footer.html"></div>

<!-- Include JavaScript at the end of body -->
<script src="components/include.js"></script>
```

### Method 2: Individual Components

If you want to include components separately:

```html
<!-- Individual components -->
<div include-html="components/mobile-menu.html"></div>
<div include-html="components/top-header.html"></div>
<div include-html="components/marquee.html"></div>
<div include-html="components/main-header.html"></div>

<!-- Include styles -->
<link rel="stylesheet" href="components/mobile-menu-styles.css" />
<link rel="stylesheet" href="components/top-header-styles.css" />
<link rel="stylesheet" href="components/marquee-styles.css" />

<!-- Include JavaScript -->
<script src="components/include.js"></script>
```

## Implementation Steps

### Step 1: Update your HTML pages

Replace the existing header and footer sections with the include statements above.

### Step 2: Add CSS Link

Add the header styles link in your `<head>` section:

```html
<link rel="stylesheet" href="components/header-styles.css" />
```

### Step 3: Add JavaScript

Add the include script before the closing `</body>` tag:

```html
<script src="components/include.js"></script>
```

## Example Implementation

Here's how your HTML structure should look:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Page Title</title>
  
  <!-- Existing CSS files -->
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/main.css" />
  
  <!-- Add header components CSS -->
  <link rel="stylesheet" href="components/header-styles.css" />
</head>

<body>
  <!-- Include complete header -->
  <div include-html="components/complete-header.html"></div>

  <!-- Your page content goes here -->
  <main>
    <!-- Page content -->
  </main>

  <!-- Include footer -->
  <div include-html="components/footer.html"></div>

  <!-- Existing JavaScript files -->
  <script src="assets/js/jquery-3.7.1.min.js"></script>
  <script src="assets/js/main.js"></script>
  
  <!-- Add include system -->
  <script src="components/include.js"></script>
</body>
</html>
```

## Benefits

1. **Consistency**: All pages will have the same header and footer
2. **Easy Updates**: Change header/footer in one place, updates everywhere
3. **Maintainability**: Organized code structure
4. **Performance**: Cached components load faster
5. **Modularity**: Can include individual components as needed

## Notes

- The include system works with static HTML files
- Components are loaded asynchronously
- Mobile menu functionality is automatically initialized
- All existing styles and functionality are preserved
- Components are responsive and work on all devices

## Troubleshooting

If components don't load:
1. Check file paths are correct
2. Ensure server supports AJAX requests to local files
3. Check browser console for errors
4. Verify all component files exist in the components folder