// import { RenderMode, ServerRoute } from '@angular/ssr';

// export const serverRoutes: ServerRoute[] = [
//   {
//     path: 'main/details/:id',
//     renderMode: RenderMode.Server
//   },
//   {
//     path: '**',
//     renderMode: RenderMode.Prerender
//   }
// ];
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [

  // ✅ أي route فيه :id أو :slug
  {
    path: 'main/details/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'main/checkout/:id',
    renderMode: RenderMode.Server
  },

  // ✅ باقي الصفحات العادية
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }

];