import type {
  CmsImage,
  CmsLink,
} from '@/interfaces/components/cms/general.interface';

import type { Heading, PsmColorModes } from '@/types/misc.types';

export interface CmsTextImageCombinationProperties {
  headline?: string
  headlineType?: Heading
  headlineAppearance?: Heading
  copy?: string
  link?: CmsLink
  image?: CmsImage
  imagePosition?: 'left' | 'right'
  size?: 'smaller' | 'normal' | 'bigger'
  hasVerticalGradientLine?: boolean
  theme?: PsmColorModes
}
