import type { PsmResponsiveImageTypes } from '@/types/misc.types';

export interface CmsImage extends Image {
  sources?: CmsImageSource[]
}

export interface CmsImageSource extends Image {
  type: PsmResponsiveImageTypes
}

export interface Image {
  url: string
  alt?: string
}

export interface CmsLink {
  url: string
  text: string
}
