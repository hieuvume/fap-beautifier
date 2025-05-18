import { generalSettings } from '@/app/config/general.config';
import { Container } from '@/app/components/common/container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 py-5">
          <div className="flex order-2 md:order-1  gap-2 font-normal text-sm">
            <span className="text-muted-foreground">{currentYear} &copy;</span>
            <a
              href={generalSettings.chromeWebStoreLink}
              target="_blank"
              className="text-secondary-foreground hover:text-primary"
            >
              FAP Beautifier.
            </a>
          </div>
          <nav className="flex order-1 md:order-2 gap-4 font-normal text-sm text-muted-foreground">
            <a
              href={generalSettings.cmsLink}
              target="_blank"
              className="hover:text-primary"
            >
              CMS
            </a>
            <a
              href={generalSettings.libraryLink}
              target="_blank"
              className="hover:text-primary"
            >
              Library
            </a>
            <a
              href={generalSettings.books24x7Link}
              target="_blank"
              className="hover:text-primary"
            >
              Books24x7
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
