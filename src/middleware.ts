import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { createI18nMiddleware } from 'next-international/middleware';

const isProtectedRoute = createRouteMatcher([
    '/dashboard/(.*)',
    '/(api|trpc)(.*)',
]); // Exclut la page d'accueil
const I18nMiddleware = createI18nMiddleware({
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
});

// Combinaison du middleware Clerk et I18n
export default clerkMiddleware((auth, req) => {
    // Protection des routes Clerk (seulement pour les pages définies dans isProtectedRoute)
    if (isProtectedRoute(req)) auth.protect();

    // Exécution du middleware i18n
    return I18nMiddleware(req);
});

export const config = {
    matcher: [
        // Matcher combiné pour exclure la page d'accueil mais protéger les autres routes
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};
