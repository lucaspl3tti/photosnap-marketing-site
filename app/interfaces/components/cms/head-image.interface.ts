import type {
  CmsImage,
  CmsLink,
} from '@/interfaces/components/cms/general.interface';

import type { Heading } from '@/types/misc.types';

export interface CmsHeadImageProperties {
  overline?: string
  headline?: string
  headlineType?: Heading
  headlineAppearance?: Heading
  subline?: string
  copy?: string
  link?: CmsLink
  image: CmsImage
  layout?: 'default' | 'simple'
  hasVerticalGradientLine?: boolean
}
