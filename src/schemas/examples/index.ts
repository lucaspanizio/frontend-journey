import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import inquirer from 'inquirer';

// Obtém o diretório do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const examplesDir = path.join(__dirname);
const files = fs
  .readdirSync(examplesDir)
  .filter((file) => file.endsWith('.ts') && file !== 'index.ts');

const runScript = async () => {
  const choices = files.map((file) => ({
    name: file,
    value: path.join(examplesDir, file),
  }));

  const questions = [
    {
      type: 'list',
      name: 'filePath',
      message: 'Escolha o arquivo que deseja executar:',
      choices,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { filePath } = await inquirer.prompt(questions as any);

  console.log(`Executando ${path.basename(filePath)}...`);
  execSync(`npx tsx ${filePath}`, { stdio: 'inherit' });
};

runScript();
