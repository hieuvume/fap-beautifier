import { useLayout } from "../layout/core";
import { ThemeModeComponent } from "../assets/ts/layout";

export const toAbsoluteUrl = (pathname: string) => chrome?.runtime?.getURL(pathname) ?? `/${pathname}`;

export const useIllustrationsPath = (illustrationName: string): string => {
  const { config } = useLayout();

  const extension = illustrationName.substring(
    illustrationName.lastIndexOf("."),
    illustrationName.length
  );
  const illustration =
    ThemeModeComponent.getMode() === "dark"
      ? `${illustrationName.substring(
        0,
        illustrationName.lastIndexOf(".")
      )}-dark`
      : illustrationName.substring(0, illustrationName.lastIndexOf("."));
  return toAbsoluteUrl(
    `media/illustrations/${config.illustrations?.set}/${illustration}${extension}`
  );
};

export function getFirstTwoDigits(inputString: string) {
  const digits = inputString.match(/\d+/g);
  if (digits && digits.length > 0) {
    const firstNumberString = digits[0];
    return firstNumberString.substring(0, 2);
  } else {
    return '0';
  }
}