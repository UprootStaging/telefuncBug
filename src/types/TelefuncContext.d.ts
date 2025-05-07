import type { Cookies } from '@sveltejs/kit'
import 'telefunc'
 
declare module 'telefunc' {
  namespace Telefunc {
    interface Context {
      cookies: Cookies
    }
  }
}
