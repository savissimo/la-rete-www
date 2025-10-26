export default function withBase(path: string) {
  const base = (process.env.URL_BASE_PATH || '').toString();
  if (!base || base === '/') return path;
  const cleanedBase = base.replace(/\/$/, '');
  const cleanedPath = path.replace(/^\//, '');
  return cleanedBase + (cleanedPath ? '/' + cleanedPath : '/');
}
