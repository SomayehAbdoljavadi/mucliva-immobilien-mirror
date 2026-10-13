import { Link as RouterLink } from '@tanstack/react-router';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { useLanguage } from '@/lib/preferences';
import { localizePath } from '@/lib/i18n-routes';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string;
  children?: ReactNode;
  activeOptions?: { exact?: boolean };
  activeProps?: { className?: string };
};

/** Link that takes German paths and points to the current language's URL. */
export function Link({ to, ...rest }: Props) {
  const { language } = useLanguage();
  return <RouterLink {...(rest as Record<string, unknown>)} to={localizePath(to, language) as never} />;
}
