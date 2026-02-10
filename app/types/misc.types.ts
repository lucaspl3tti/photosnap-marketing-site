/* eslint-disable max-len */
export type ButtonType = 'button' | 'submit' | 'reset';
export type PsmColorFuntionals = 'danger' | 'success' | 'warning' | 'info';
export type PsmColorThemes = 'primary' | 'secondary';
export type PsmColorModes = 'light' | 'dark';
export type PsmColorVariants = PsmColorModes | PsmColorThemes;
export type PsmColorVariantsExtended = PsmColorVariants | PsmColorFuntionals;
export type HeadingSite = 'h1'
export type HeadingSub = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type Heading = HeadingSite | HeadingSub;
export type InputType = 'text' | 'number' | 'email' | 'password' | 'search' | 'url' | 'tel' | 'date' | 'time' | 'range' | 'color' | 'datetime' | 'datetime-local' | 'month' | 'week';
export type LinkTargets = '_blank' | '_self' | '_parent' | '_top';
export type Numberish = number | string;
export type PositionValue = 'top' | 'right' | 'bottom' | 'left';
export type PositionValueHorizontal = 'left' | 'center' | 'right';
export type PositionValueVertical = 'top' | 'bottom';
export type PositionValueVerticalWithCenter = PositionValueVertical | 'center';
export type PsmSizes = 'sm' | 'md' | 'lg';
export type PsmSizesExtra = PsmSizes | 'xs' | 'xl';
export type TextPositions = 'start' | 'center' | 'end';
export type PsmViewport = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fhd' | 'qhd' | 'uhd';
export type PsmResponsiveImageTypes = 'mobile'|'tablet'|'desktop';
/* eslint-enable max-len */
