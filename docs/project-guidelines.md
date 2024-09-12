# Luca Newsletter Project Guidelines

## General Guidelines

1. Follow Vue.js best practices and style guide.
2. Use Vue 3 Composition API for new components.
3. Maintain consistent code formatting using ESLint and Prettier.
4. Write clear, self-documenting code with comments where necessary.
5. Keep components small and focused on a single responsibility.
6. Use props for parent-to-child communication and events for child-to-parent communication.
7. Utilize Vue Router for navigation between views.
8. Use Vue I18n for all text content to support internationalization.

## Adding New Components

1. Create a new `.vue` file in the appropriate directory (`src/components/` for reusable components, `src/views/` for page components).
2. Use the following template for new components:

```vue
<template>
  <div class="component-name">
    <!-- Component template -->
  </div>
</template>

<script>
export default {
  name: 'ComponentName',
  props: {
    // Define props here
  },
  data() {
    return {
      // Define reactive data here
    }
  },
  methods: {
    // Define methods here
  }
}
</script>

<style scoped>
/* Component-specific styles */
</style>
```

3. Import and register the component where it's needed.
4. Add any necessary routes in `router.js` for new view components.

## Modifying Existing Components

1. Ensure changes are backward-compatible or update all usages of the component.
2. Update unit tests to reflect changes (if applicable).
3. Update the component's documentation in comments if functionality changes.

## Adding New Views

1. Create a new `.vue` file in the `src/views/` directory.
2. Add a new route in `router.js`.
3. Update the navigation menu in `App.vue` or relevant components.

## Styling Guidelines

1. Use the existing color scheme defined in the design documentation.
2. Maintain consistent spacing and sizing:
   - Use multiples of 4px for spacing (e.g., 4px, 8px, 16px, 24px, 32px).
   - Use rem units for font sizes.
3. Keep styles scoped to components when possible.
4. Use CSS variables for commonly used values (colors, fonts, etc.).
5. Follow mobile-first approach for responsive design.

## Internationalization

1. Add all new text content to the `messages` object in `main.js`.
2. Use `$t('key')` in templates and `this.$t('key')` in script sections to reference translations.
3. Provide translations for both English and Portuguese.

## Form Handling

1. Use `v-model` for two-way data binding on form inputs.
2. Implement form validation using Vue's built-in validators or a library like Vuelidate.
3. Show loading state on submit buttons during form submission.
4. Handle and display form errors appropriately.

## State Management

1. For simple state, use component-level data and props.
2. For more complex state management, consider using Vuex (not currently implemented).

## Performance Considerations

1. Use lazy-loading for routes to improve initial load time.
2. Optimize images and assets before adding them to the project.
3. Use Vue's built-in performance features like `v-once` for static content.

## Accessibility

1. Use semantic HTML elements.
2. Provide appropriate ARIA attributes where necessary.
3. Ensure proper color contrast for text readability.
4. Make sure all interactive elements are keyboard accessible.

## Testing

1. Write unit tests for new components and functions.
2. Update existing tests when modifying components or functionality.
3. Aim for high test coverage, especially for critical application logic.

## Documentation

1. Update the project documentation when adding new features or making significant changes.
2. Use JSDoc comments for functions and components to provide inline documentation.

By following these guidelines, developers and designers can maintain consistency and quality throughout the Luca Newsletter project, ensuring it remains maintainable and scalable as it evolves.