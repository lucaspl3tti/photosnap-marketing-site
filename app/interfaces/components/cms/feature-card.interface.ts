import type { Heading } from '@/types/misc.types';

export interface CmsFeatureCardProperties {
  headline: string
  headlineType?: Heading
  headlineAppearance?: Heading
  copy?: string
  icon: string
}

export interface CmsFeatureCardListProperties {
  features: CmsFeatureCardProperties[]
}
