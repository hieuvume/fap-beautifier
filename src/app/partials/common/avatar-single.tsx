import { LucideIcon } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { cn } from '@/app/lib/utils';

interface AvatarSingleProps {
  image?: string;
  fallback?: string;
  icon?: LucideIcon;
  iconClass?: string;
  badgeClass?: string;
  className?: string;
  imageClass?: string;
}

const AvatarSingle = ({
  image,
  fallback,
  icon: Icon,
  iconClass,
  badgeClass,
  className,
  imageClass,
}: AvatarSingleProps) => {
  return (
    <div className={cn(className && className)}>
      {image && (
        <img
          src={toAbsoluteUrl(`/media/avatars/${image}`)}
          className={cn(imageClass && imageClass)}
          alt="image"
        />
      )}
      {!image && fallback && fallback}
      {!image && !fallback && Icon && (
        <Icon size={16} className={cn(iconClass && iconClass)} />
      )}
      {badgeClass && <div className={cn(badgeClass && badgeClass)}></div>}
    </div>
  );
};

export { AvatarSingle, type AvatarSingleProps };
