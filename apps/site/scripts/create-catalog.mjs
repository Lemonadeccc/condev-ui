import { existsSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { dirname, relative, resolve } from 'path';

// 提取标题的函数
function extractHeadings(content) {
  const headingRegex = /^(?:\{\/\*\s*)?(#{2,3})\s+(.+?)(?:\s*\*\/\})?$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content))) {
    const level = match[1].length;
    const text = match[2];

    headings.push({ level, text });
  }

  // 用栈构建树状结构
  const root = [];
  const stack = [];

  for (const heading of headings) {
    // 从栈中找到 parent
    while (stack.length > 0 && heading.level <= stack[stack.length - 1].level) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(heading);
    } else {
      const parent = stack[stack.length - 1];
      parent.items = parent.items || [];
      parent.items.push(heading);
    }

    stack.push(heading);
  }

  return root;
}

function writeCatalogForFile({ mdxPathAbs, fromDirAbs }) {
  const content = readFileSync(mdxPathAbs, 'utf-8');
  const toc = extractHeadings(content);

  const relPath = relative(fromDirAbs, mdxPathAbs);
  const tsContent = `// Auto-generated catalog from ${relPath}
export const catalogList = ${JSON.stringify(toc, null, 2)};\n`;

  const outputPath = resolve(dirname(mdxPathAbs), 'catalog.ts');
  writeFileSync(outputPath, tsContent, 'utf-8');

  return { outputPath };
}

function findMdxFiles(rootDirAbs) {
  const ignoredDirNames = new Set([
    'node_modules',
    '.git',
    '.next',
    'dist',
    'out',
    'coverage',
    '.turbo',
  ]);

  const results = [];
  const stack = [rootDirAbs];

  while (stack.length > 0) {
    const currentDir = stack.pop();
    const entries = readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (ignoredDirNames.has(entry.name)) continue;
        stack.push(resolve(currentDir, entry.name));
        continue;
      }

      if (!entry.isFile()) continue;
      if (!entry.name.toLowerCase().endsWith('.mdx')) continue;

      results.push(resolve(currentDir, entry.name));
    }
  }

  return results.sort();
}

// 主执行逻辑
const input = process.argv[2];
const cwdAbs = process.cwd();

// 用法：
// 1) 全量扫描：在 apps/site 下执行 `node scripts/create-catalog.mjs`
// 2) 单文件生成：`node scripts/create-catalog.mjs app/(main)/button/markdown/read/button-markdown.mdx`
if (!input) {
  const mdxFiles = findMdxFiles(cwdAbs);
  let generated = 0;

  for (const mdxPathAbs of mdxFiles) {
    writeCatalogForFile({ mdxPathAbs, fromDirAbs: cwdAbs });
    generated += 1;
  }

  console.log(`✅ Generated ${generated} catalog.ts file(s) from ${mdxFiles.length} .mdx file(s).`);
  process.exit(0);
}

const mdxPathAbs = resolve(cwdAbs, input);

if (!existsSync(mdxPathAbs)) {
  console.error(`❌ 文件未找到: ${mdxPathAbs}`);
  process.exit(1);
}

writeCatalogForFile({ mdxPathAbs, fromDirAbs: cwdAbs });
console.log(`✅ Generated catalog.ts for ${relative(cwdAbs, mdxPathAbs)}`);
