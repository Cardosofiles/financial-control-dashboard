import { QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { queryClient } from "@/lib/react-query";
import { router } from "@/routes";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="dashboard-financial" defaultTheme="dark">
        <Helmet titleTemplate="%s | Controle Financeiro" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
