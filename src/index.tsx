import ReactDOM from "react-dom/client";
import { MetronicI18nProvider } from "./_metronic/i18n/Metronici18n";
import { AppRoutes } from "./app/routing/AppRoutes";

import "./_metronic/assets/fonticon/fonticon.css";
import "./_metronic/assets/keenicons/duotone/style.css";
import "./_metronic/assets/keenicons/outline/style.css";
import "./_metronic/assets/keenicons/solid/style.css";
import "./_metronic/assets/style.bundle.css";

chrome.storage.local.get("enabled", (data) => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  if (data["enabled"] === undefined || data["enabled"] === true) {
    root.render(
      <MetronicI18nProvider>
        <AppRoutes />
      </MetronicI18nProvider>
    );
  }
});