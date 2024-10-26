import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

// Explicitly mark the route as dynamic

export async function POST(req: NextRequest) {


    const { filePath } = await req.json();
    if (!filePath) {
        return NextResponse.json({ error: 'File path is required' }, { status: 400 });
    }

    console.log('filePath', filePath);
    const filePathA = path.join(process.cwd(), filePath);

    try {
        const code = fs.readFileSync(filePathA, 'utf-8');
        return NextResponse.json({ code }, { status: 200 });
    } catch (error) {
        console.error('Error reading file:', error);
        return NextResponse.json({ error: 'File not found or unreadable' }, { status: 500 });
    }
};


