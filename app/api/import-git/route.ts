import { NextResponse } from 'next/server';
import crypto from 'crypto';
import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import fs from 'fs';
import path from 'path';


// ... existing code ...

export async function POST(request: Request) {
  const { url, filePath } = await request.json();

  console.log('Received request to import from Git:', { url, filePath });

  if (!url || !filePath) {
    return NextResponse.json(
      { error: 'URL and file path are required' },
      { status: 400 }
    );
  }

  // Use a custom temporary directory in the project root
  const tempDir = path.join(process.cwd(), 'temp', `repo-${crypto.randomBytes(8).toString('hex')}`);

  // Ensure the temp directory exists
  await fs.promises.mkdir(path.dirname(tempDir), { recursive: true });

  try {
    // Clone the repository with only the latest commit and a single branch
    await git.clone({
      fs,
      http,
      dir: tempDir,
      url: url,
      singleBranch: true,
      depth: 1,
    });

    // Log the contents of the temp directory after cloning
    const files = await fs.promises.readdir(tempDir);
    console.log('Files in temporary directory after cloning:', files);

    // Construct the full path to the desired file
    const fullPath = path.join(tempDir, filePath);

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    // Read the file content
    const code = await fs.promises.readFile(fullPath, 'utf8');

    // Insert the code block into the database


    return NextResponse.json({ code });
    // return NextResponse.json({ code });
  } catch (error) {
    console.error('Error fetching from Git:', error);
    return NextResponse.json(
      { error: 'Failed to fetch code from Git' },
      { status: 500 }
    );
  } finally {
    // Clean up the temporary directory
    console.log('Starting cleanup of temporary directory:', tempDir);

    const timeout = setTimeout(() => {
      console.warn('Cleanup is taking longer than expected...');
    }, 5000);

    try {
      await fs.promises.rm(tempDir, { recursive: true, force: true });
      clearTimeout(timeout);
      console.log('Successfully cleaned up temporary directory:', tempDir);
    } catch (cleanupError) {
      clearTimeout(timeout);
      console.error('Error cleaning up temporary directory:', cleanupError);
    }
  }
}