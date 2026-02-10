import type { Numberish } from '@/types/misc.types';

export interface CmsMembershipCardProperties {
  title: string;
  copy?: string;
  priceMonthly: Numberish;
  priceYearly: Numberish;
  billingPeriod: 'monthly' | 'yearly';
  type: 'secondary' | 'primary';
}
