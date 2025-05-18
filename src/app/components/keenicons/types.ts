export type KeeniconsStyle = 'duotone' | 'filled' | 'solid' | 'outline';

export interface KeeniconsProps {
  icon: string;
  style?: KeeniconsStyle;
  className?: string;
}
