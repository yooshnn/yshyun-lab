import formidable from 'formidable';
import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';
import { Readable } from 'stream';

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

export async function POST(request: Request) {}
