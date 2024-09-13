import { execSync } from 'child_process';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper function to run commands
const run = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    process.exit(1);
  }
}

// Build the app
run('npm run build');

// Navigate to the build output directory
process.chdir('dist');

// Create CNAME file
fs.writeFileSync('CNAME', 'signup.luca137.com');

// Initialize git repository in dist folder
run('git init');
run('git add -A');
run('git commit -m "deploy"');

// Force push to the gh-pages branch
run('git push -f git@github.com:lucianoaf8/newsletter-signup.git HEAD:gh-pages');

// Navigate back to the project root
process.chdir(resolve(__dirname));

console.log('Deployment complete!');