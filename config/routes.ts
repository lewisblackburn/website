export const ApiRoutes = {
  GetSong: '/api/spotify/now-playing',
  GetTopTracks: '/api/spotify/top-tracks',
  GetLastFMUser: '/api/lastfm/user',
  GetLastFMTopAlbums: '/api/lastfm/top-albums',
}

export const Routes = {
  Home: '',
  Dashboard: '/dashboard',
  Blog: '/blog',
  Contact: '/contact',
  Projects: '/projects',
  Services: '/services',
  Uses: '/uses',
  Resume: '/resume.pdf',
  Project: (slug: string) => `/projects/${slug}`,
  LocalBlogPost: (slug: string) => `/blog/${slug}`,
}
