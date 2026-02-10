import type {
  ButtonType,
  PsmColorVariantsExtended,
  LinkTargets,
  PsmSizes,
} from '@/types/misc.types';

import type { PsmIconProperties } from './icon.interface';

// button component
export interface PsmButtonProperties {
  block?: boolean
  styleClasses?: string
  href?: string
  icon?: PsmIconProperties
  isIconBtn?: boolean
  size?: PsmSizes,
  tag?: keyof HTMLElementTagNameMap
  target?: LinkTargets
  text?: string
  theme?: PsmColorVariantsExtended
  to?: string
  type?: ButtonType
}
