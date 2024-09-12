# Luca Newsletter Design Documentation

## Design Overview
Luca Newsletter features a modern, sleek design with a dark theme and vibrant accents. The design aims to create an immersive and futuristic feel while maintaining readability and usability.

## Color Scheme
- Background: #0a0a2a (Dark blue)
- Text: #ffffff (White)
- Accent Colors: 
  - #00f7ff (Cyan)
  - #ff00e6 (Magenta)
  - #ffdd00 (Yellow)
  - #00ff95 (Green)
  - #9500ff (Purple)
- Overlay Background: rgba(255, 255, 255, 0.05) (Semi-transparent white)

## Typography
- Font Family: 'Rajdhani', sans-serif
- Font Weights Used: 300, 400, 500, 600, 700
- Title Size: 3.5rem
- Subtitle Size: 2rem
- Body Text Size: 1rem

## Layout
- Single-page application with a centered content area
- Maximum content width: 1200px
- Content padding: 60px
- Responsive design with flexbox and grid layouts

## UI Elements

### Background
- Dark blue (#0a0a2a) base
- Animated floating circles with gradient backgrounds

### Container
- Semi-transparent white overlay (rgba(255, 255, 255, 0.05))
- Backdrop filter: blur(10px)
- Border-radius: 20px
- Box-shadow: 0 0 40px rgba(0, 247, 255, 0.2)

### Buttons
- Border-radius: 5px
- Padding: 15px 30px
- Text: Uppercase, bold, letter-spacing: 1px
- Hover effect: translateY(-3px) with box-shadow
- Types:
  - Subscribe Now: Cyan background (#00f7ff) with dark text
  - Unsubscribe: Magenta background (#ff00e6) with dark text
  - Edit Preferences: Yellow background (#ffdd00) with dark text
  - Submit Error: Green background (#00ff95) with dark text
  - Submit Request: Purple background (#9500ff) with white text

### Forms
- Input fields: Semi-transparent white background (rgba(255, 255, 255, 0.1))
- Border-radius: 5px
- Padding: 15px

### Language Toggle
- Position: Top-right corner
- Semi-transparent background
- Active language highlighted

### Animations
- Floating background circles: Keyframe animation
- Button hover: translateY and box-shadow transition
- Form input focus: Transition effect

## Responsive Design
- Flexbox and CSS Grid for layout
- Media queries for adjusting layout on smaller screens
- Minimum content width: 300px

## Accessibility
- High contrast between text and background
- Clear focus states for interactive elements
- Semantic HTML structure

## Icons
- No custom icons used; text-based design

## Images
- Background uses CSS gradients and shapes
- Fireworks GIF used on subscription success page

## Design Patterns
- Consistent use of border-radius (5px for elements, 20px for main container)
- Gradient accents for important text (e.g., main title)
- Hover effects on interactive elements for better UX

This design system creates a cohesive, modern, and engaging user interface for the Luca Newsletter application. The dark theme with vibrant accents provides a striking visual experience while maintaining readability and usability.