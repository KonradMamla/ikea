import fs from 'fs';
import path from 'path';

const dir = 'allure-results';
const filePath = path.join(dir, 'environment.properties');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const content = `
Environment=staging
Browser=Chrome 136
Platform=macOS
`;

fs.writeFileSync(filePath, content.trim());
console.log(`Created ${filePath}`);
