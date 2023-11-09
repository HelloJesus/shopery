import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'
import { Database } from './types/supabase'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session?.user?.id && req.nextUrl.pathname !== '/signin' && req.nextUrl.pathname !== '/signup') {
    return NextResponse.redirect(new URL('/signin', req.url))
  }

  if (session?.user?.id && (req.nextUrl.pathname === '/signin' || req.nextUrl.pathname === '/signup')) {
    console.log(true)
    return NextResponse.redirect(new URL('/', req.url))
  }
  
  return res
}

export const config = {
  matcher: ['/profile', '/signin', '/signup'],
}