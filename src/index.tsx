import ReactDOM from "react-dom/client";
import { MetronicI18nProvider } from "./_metronic/i18n/Metronici18n";
import { AppRoutes } from "./app/routing/AppRoutes";

const initReact = () => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <MetronicI18nProvider>
      <AppRoutes />
    </MetronicI18nProvider>
  );
}

if (chrome.storage) {
  chrome.storage.local.get("enabled", (data) => {
    if (data["enabled"] === undefined || data["enabled"] === true) {
      initReact()
    }
  });
} else {
  initReact()
}