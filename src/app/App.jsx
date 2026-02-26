import { SiteLayout } from "./SiteLayout";
import { AppRouter } from "./router";

export function App() {
  return (
    <SiteLayout>
      <AppRouter />
    </SiteLayout>
  );
}
