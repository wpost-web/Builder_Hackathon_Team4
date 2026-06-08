import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SearchProvider } from "./context/SearchContext";
import Index from "./pages/Index";
import RewardsPage from "./pages/RewardsPage";
import OfferDetailPage from "./pages/OfferDetailPage";
import PromotionDetailPage from "./pages/PromotionDetailPage";
import OffersSearchPage from "./pages/OffersSearchPage";
import PromotionsSearchPage from "./pages/PromotionsSearchPage";
import DestinationsPage from "./pages/DestinationsPage";
import ResortsPage from "./pages/ResortsPage";
import CategoriesPage from "./pages/CategoriesPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <SearchProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/rewards" element={<RewardsPage />} />
              <Route path="/rewards/offers/:id" element={<OfferDetailPage />} />
              <Route path="/rewards/promotions/:id" element={<PromotionDetailPage />} />
              <Route path="/rewards/offers/search" element={<OffersSearchPage />} />
              <Route path="/rewards/promotions/search" element={<PromotionsSearchPage />} />
              <Route path="/rewards/offers/search/destinations" element={<DestinationsPage />} />
              <Route path="/rewards/offers/search/resorts" element={<ResortsPage />} />
              <Route path="/rewards/offers/search/categories" element={<CategoriesPage />} />
              <Route path="/rewards/promotions/search/destinations" element={<DestinationsPage />} />
              <Route path="/rewards/promotions/search/resorts" element={<ResortsPage />} />
              <Route path="/rewards/promotions/search/categories" element={<CategoriesPage />} />
              <Route path="/rewards/search/results" element={<SearchResultsPage />} />
              <Route path="/home" element={<PlaceholderPage />} />
              <Route path="/book" element={<PlaceholderPage />} />
              <Route path="/discover" element={<PlaceholderPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SearchProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
