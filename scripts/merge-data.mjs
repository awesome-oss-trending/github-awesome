#!/usr/bin/env node
// Merges multiple JSON sources for the same date, deduplicating by full_name

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'data');

const date = process.argv[2] || '2026-03-19';
const files = process.argv.slice(3);

if (files.length === 0) {
	console.error('Usage: node merge-data.mjs <date> <file1.json> [file2.json ...]');
	process.exit(1);
}

const seen = new Set();
const allRepos = [];

for (const file of files) {
	const data = JSON.parse(readFileSync(file, 'utf-8'));
	for (const repo of data.repos) {
		if (!seen.has(repo.full_name)) {
			seen.add(repo.full_name);
			allRepos.push(repo);
		}
	}
}

const merged = {
	date,
	scraped_at: new Date().toISOString(),
	count: allRepos.length,
	repos: allRepos,
};

const outPath = join(DATA_DIR, `${date}.json`);
writeFileSync(outPath, JSON.stringify(merged, null, 2));
console.log(`Merged ${allRepos.length} unique repos for ${date}`);
