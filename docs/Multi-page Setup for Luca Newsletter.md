# Multi-page Setup for Luca Newsletter

## New Project Structure

```
newsletter-signup/
│
├── index.html
├── subscribe.html
├── unsubscribe.html
├── 404.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── script.js
│   └── redirect.js
│
└── .nojekyll
```

## Steps to Implement

1. Create New HTML Files

   Create `subscribe.html` and `unsubscribe.html` based on your existing `index.html`. Each should contain only the relevant form (subscribe or unsubscribe).

2. Update `index.html`

   Modify `index.html` to include links to the new pages:

   ```html
   <a href="/subscribe">Subscribe</a>
   <a href="/unsubscribe">Unsubscribe</a>
   ```

3. Create a 404.html

   Create a `404.html` file that will handle redirects:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Page Not Found</title>
       <script src="/js/redirect.js"></script>
   </head>
   <body>
       <h1>Page Not Found</h1>
       <p>Redirecting...</p>
   </body>
   </html>
   ```

4. Create `redirect.js`

   Create a new file `js/redirect.js`:

   ```javascript
   (function(){
     var redirect = sessionStorage.redirect;
     delete sessionStorage.redirect;
     if (redirect && redirect != location.href) {
       history.replaceState(null, null, redirect);
     }
   })();
   ```

5. Update `script.js`

   Modify your existing `script.js` to handle the language toggle and translations for each page separately.

6. Update `styles.css`

   Ensure your CSS file includes styles for all pages. You may need to add or modify styles to accommodate the new layout.

7. Create a `.nojekyll` file

   Create an empty file named `.nojekyll` in the root of your repository to tell GitHub not to process your files with Jekyll.

8. Update GitHub Pages settings

   In your repository settings, ensure GitHub Pages is set to deploy from the root of your main branch.

## Implementing the Redirect

1. In your `404.html`, add this script in the `<head>`:

   ```html
   <script>
     sessionStorage.redirect = location.href;
   </script>
   <meta http-equiv="refresh" content="0;URL='/'">
   ```

2. In your `index.html`, `subscribe.html`, and `unsubscribe.html`, add this script just before the closing `</body>` tag:

   ```html
   <script src="/js/redirect.js"></script>
   ```

## Testing

After implementing these changes:

1. Push the changes to your GitHub repository.
2. Visit `https://signup.luca137.com/subscribe` and `https://signup.luca137.com/unsubscribe`.
3. You should be redirected to the correct page without seeing a 404 error.

## Notes

- This solution uses client-side redirects, so there might be a brief flash of the 404 page before redirecting.
- Ensure all relative links in your HTML files use leading slashes (e.g., `/css/styles.css` instead of `css/styles.css`).
- You may need to adjust your JavaScript to handle form submissions and language toggles on each page separately.