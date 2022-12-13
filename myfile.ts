import csrf from 'edge-csrf'
import { NextRequest } from 'next/server'

export async function xxxx(req: NextRequest) {
    const csrfProtect = csrf()
}
