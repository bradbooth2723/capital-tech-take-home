# Capital Tech WordPress Plugin Assignment Documentation

## Overview
This is a plugin for WordPress that fetches and displays product data from the DummyJSON API.

## Installation
1. Download the plugin zip file
2. Log in to your WordPress admin panel
3. Navigate to Plugins > Add New > Upload Plugin
4. Choose the downloaded zip file and click "Install Now"
5. After installation, click "Activate"

## Usage

### Required HTML Element
First, ensure your theme or page template includes the following HTML element somewhere in the content area
```html
<div id="cts-products"></div>
```
This element serves as the container where the products will be displayed.

### Example Page Structure
```html
<!-- Your page content -->
<div class="your-page-content">
    <h1>Our Products</h1>
    
    <!-- Required container element -->
    <div id="cts-products"></div>
</div>
```

### Access Control
- Only users with Administrator role can view the products
- Non-administrators will see an "Unauthorized" error message

## Implementation
### Frontend Architecture
1. **Grid System**
    - Implements a responsive CSS Grid Layout
    - Breakpoints following Material Design guidelines:
      - Extra-Small: 0-599px
      - Small: 600-904px
      - Medium: 905-1239px
      - Large: 1440px+
2. **Product Cards**
    - Individual product displays using flex layout
    - Responsive images with proper aspect ratio
    - Star rating system using CSS
3. **Infinite Scroll**
    - Loads 36 products and displays 18 initially.
    - When reaching bottom of page, displays the next set of 18 products while fetching the next 18.
    - Provides a seamless scroll experience for the user.

### Backend Architecture
1. **Api Integration**
    - Secure communication with DummyJSON API
    - WordPress AJAX integration
    - Error Handling
2. **Security Measure**
    - WordPress nonce verification
    - Role-based access control

## Potential Problems and Limitations
1. **Infinite Scroll Issues**
    - Race conditions possible when reaching page bottom
    - Products may display out of order during rapid scrolling
    - Potential memory leaks from accumulated event listeners
    - No loading indicators during fetch operations
    - No error state handling for failed subsequent loads

2. **API Limitations**
    - No error handling for API rate limiting
    - No caching mechanism for frequently accessed data
    - No fallback for API downtime
    - No retry mechanism for failed requests

3. **Security Considerations**
  - AJAX nonce doesn't expire
  - No sanitization of API response data before display
  - XSS vulnerabilities possible from dynamic content

4. **Performance**
    - No data caching
    - Potential memory issues with large product sets

5. **Accessibility**
    - I do not know how to get the alt text from the image when pulling it from another URL.

6. **Card Size**
    - Current cards may have inconsistent heights
    - Variable content length affects grid appearance
    - Misaligned grid items impact visual appeal

## Planned Features
- Change the number of items displayed per page
- Search bar
- Filter and sorting



## Credits
- DummyJSON API: https://dummyjson.com/
- Star Rating Component: https://dev.to/alvaromontoro/
- Grid System: https://morganfeeney.com/guides/grid-systems/
