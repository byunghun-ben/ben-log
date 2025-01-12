/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as PostsIndexImport } from './routes/posts/index'
import { Route as PostsYearMonthSlugImport } from './routes/posts/$year.$month.$slug'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  path: '/posts/',
  getParentRoute: () => rootRoute,
} as any)

const PostsYearMonthSlugRoute = PostsYearMonthSlugImport.update({
  path: '/posts/$year/$month/$slug',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      id: '/posts/'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof rootRoute
    }
    '/posts/$year/$month/$slug': {
      id: '/posts/$year/$month/$slug'
      path: '/posts/$year/$month/$slug'
      fullPath: '/posts/$year/$month/$slug'
      preLoaderRoute: typeof PostsYearMonthSlugImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/posts': typeof PostsIndexRoute
  '/posts/$year/$month/$slug': typeof PostsYearMonthSlugRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/posts': typeof PostsIndexRoute
  '/posts/$year/$month/$slug': typeof PostsYearMonthSlugRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/posts/': typeof PostsIndexRoute
  '/posts/$year/$month/$slug': typeof PostsYearMonthSlugRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/posts' | '/posts/$year/$month/$slug'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/posts' | '/posts/$year/$month/$slug'
  id: '__root__' | '/' | '/about' | '/posts/' | '/posts/$year/$month/$slug'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  PostsIndexRoute: typeof PostsIndexRoute
  PostsYearMonthSlugRoute: typeof PostsYearMonthSlugRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  PostsIndexRoute: PostsIndexRoute,
  PostsYearMonthSlugRoute: PostsYearMonthSlugRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/posts/",
        "/posts/$year/$month/$slug"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/posts/": {
      "filePath": "posts/index.tsx"
    },
    "/posts/$year/$month/$slug": {
      "filePath": "posts/$year.$month.$slug.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
