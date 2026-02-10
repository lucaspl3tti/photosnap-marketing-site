import type {
  CmsImage,
  CmsLink,
} from '@/interfaces/components/cms/general.interface';

import type { Numberish } from '@/types/misc.types';

// Homepage
export interface ContentHomepageData {
  blocks: HomepageBlock[]
}

export interface HomepageBlock {
  id: string,
  headline: string;
  copy?: string;
  image: CmsImage;
  link?: CmsLink;
}

// Stories
export interface ContentStoriesData {
  header: StoriesHeaderData
  stories: StoryTeaser[]
}

export interface StoriesHeaderData extends PageHeaderData {
  overline: string;
  date: string;
  publishedBy: string;
  link: CmsLink;
}

export interface StoryTeaser {
  date: string;
  headline: string;
  publishedBy: string;
  image: CmsImage;
  link: CmsLink;
}

// Features
export interface ContentFeaturesData {
  header: PageHeaderData
  features: FeatureCard[]
}

export interface FeatureCard {
  icon: string;
  headline: string;
  copy: string;
}

// Beta Notice
export interface ContentBetaNotice {
  beta: {
    headline: string;
    image: CmsImage;
    link: CmsLink;
  }
}

// Pricing
export interface ContentPricingData {
  header: PageHeaderData
  memberships: MembershipPlan[]
  comparison: {
    features: ComparisonFeature[]
  }
}

export interface MembershipPlan {
  type: 'basic' | 'pro' | 'business';
  title: string;
  copy: string;
  priceMonthly: Numberish;
  priceYearly: Numberish;
}

export interface ComparisonFeature {
  id: string;
  title: string;
  basic: boolean;
  pro: boolean;
  business: boolean;
}

// general
export interface PageHeaderData {
  headline: string;
  copy: string;
  image: CmsImage;
}
