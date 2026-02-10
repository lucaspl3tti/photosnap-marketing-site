import type { PsmResponsiveImageTypes } from '@/types/misc.types';

export default function(type: PsmResponsiveImageTypes): string|undefined {
  let mediaQuery: string|undefined;

  switch (type) {
    case 'mobile':
      mediaQuery = '(max-width: 600px)';
      break;
    case 'tablet':
      mediaQuery = '(min-width: 600px) and (max-width: 991px)';
      break;
    case 'desktop':
      mediaQuery = '(min-width: 992px)';
      break;
    default:
      mediaQuery = undefined;
  }

  return mediaQuery;
}
