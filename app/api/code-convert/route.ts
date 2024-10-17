import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

// Explicitly mark the route as dynamic

export async function POST(req: NextRequest) {
    const { filePath } = await req.json();

    console.log('filePath', filePath)
    const filePathA = path.join(process.cwd(), filePath); // Update with your file path
    const code = fs.readFileSync(filePathA, 'utf-8');

    return NextResponse.json({ code }, { status: 200 });
};


