import csrf from 'edge-csrf'
import { NextRequest } from 'next/server'

export async function exportedFunction(req: NextRequest) {
    const csrfProtect = csrf()
}
