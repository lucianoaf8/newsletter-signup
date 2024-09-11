# Luca Newsletter Signup Page

## Project Overview
The Luca Newsletter Signup page is a sleek, futuristic web application for newsletter subscription and unsubscription. It features a modern, space-themed design with responsive layout, animated background, and bilingual support (English and Portuguese).

## Key Features
- Bilingual toggle (English and Portuguese)
- Subscribe and unsubscribe functionality
- Modern, responsive design
- Animated background with floating elements
- Glassmorphism effect on main container

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure
The project consists of three main files:
1. `index.html`: Main HTML structure
2. `styles.css`: All styling and animations
3. `script.js`: JavaScript for language switching and dynamic content

## Design Details

### Color Scheme
- Primary Color: `#00f7ff` (cyan)
- Secondary Color: `#ff00e6` (magenta)
- Background Color: `#0a0a2a` (dark blue)
- Text Color: `#ffffff` (white)

### Typography
- Font Family: 'Rajdhani', sans-serif
- Import in CSS:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
  ```

### Layout
- Single-page design with centered content
- Maximum width of 1200px for the main container
- Responsive layout adapting to various screen sizes

### Key Design Elements
1. Animated Background:
   - Three floating circles with gradient colors
   - Smooth animation using keyframes for a space-like effect

2. Main Container:
   - Glassmorphism effect (semi-transparent background with blur)
   - Subtle box shadow for depth
   - Border radius for a modern look

3. Typography:
   - Large, gradient-colored title using the site's primary colors
   - Clear hierarchy with distinct styles for headings and body text

4. Forms:
   - Minimalist input fields with hover and focus effects
   - Submit buttons with color transitions on hover

5. Language Toggle:
   - Positioned in the top-right corner
   - Clear visual indication of the active language

## Animations and Transitions

1. Background Animations:
   - Floating effect for background circles using keyframe animation

2. Hover Effects:
   - Subtle scale and shadow changes for buttons
   - Color transitions for interactive elements

3. Focus States:
   - Clear visual indicators for keyboard navigation

4. Language Toggle:
   - Smooth transition when switching between languages

## Functionality

### Language Toggle
- Switches all text content between English and Portuguese
- Updates placeholder text in form inputs
- Smooth transition effect when switching languages

### Subscribe Form
- Collects email for newsletter subscription
- Placeholder text changes based on selected language
- Submits to FormSubmit.co for processing

### Unsubscribe Form
- Allows users to remove their email from the newsletter
- Placeholder text changes based on selected language
- Submits to FormSubmit.co for processing

## Responsive Design
- Flexbox layout for easy responsiveness
- Media queries to adjust layout and sizing for different screen sizes
- Mobile-first approach ensuring compatibility across devices

## Accessibility Considerations
- High color contrast for readability
- Keyboard navigable interface
- ARIA labels for interactive elements

## Code Structure and Standards

### HTML (`index.html`)
- Semantic HTML5 elements
- Proper headings hierarchy
- Forms with appropriate input types and labels

### CSS (`styles.css`)
- Organized by component (body, container, forms, buttons)
- Use of CSS variables for colors and repeated values
- Media queries for responsiveness
- Keyframe animations for background elements

### JavaScript (`script.js`)
- Event listeners for language toggle and form submissions
- Object for storing translations
- Functions for updating UI elements based on selected language

## Guidelines for Future Development

1. Maintain the existing color scheme and typography
2. Ensure any new elements are responsive and follow the current design aesthetic
3. Keep animations smooth and lightweight
4. Add new translations to both language objects when introducing new text
5. Implement form validation with error messages
6. Consider adding success messages after form submission
7. Enhance accessibility features (e.g., improved focus states, ARIA attributes)

## How to Edit

1. HTML Structure: Modify `index.html`
2. Styling: Update `styles.css`
   - Add new styles at the end of their respective sections
   - Use existing CSS variables for consistency
3. Functionality: Edit `script.js`
   - Add new translations to the language objects
   - Create new functions for additional features as needed

Remember to test all changes across different devices and browsers to ensure consistency and responsiveness.