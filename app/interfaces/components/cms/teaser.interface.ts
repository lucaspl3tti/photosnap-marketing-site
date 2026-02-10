import type {
  CmsImage,
  CmsLink,
} from '@/interfaces/components/cms/general.interface';

import type { Heading } from '@/types/misc.types';

export interface CmsTeaserProperties {
  headline?: string
  headlineType?: Heading
  headlineAppearance?: Heading
  copy?: string
  link?: CmsLink
  image: CmsImage
}

export interface CmsTeaserListProperties {
  teasers: CmsTeaserProperties[]
}
