import { Switch, Route, Router as WouterRouter } from "wouter";
import { QuoteProvider } from "@/components/providers/QuoteContext";
import ScrollToTop from "@/components/ScrollToTop";

import Home from "@/app/page";
import AProposPage from "@/app/a-propos/page";
import ConditionsGeneralesPage from "@/app/conditions-generales/page";
import ContactPage from "@/app/contact/page";
import FormationPage from "@/app/formation/page";
import MentionsLegalesPage from "@/app/mentions-legales/page";
import OffresPage from "@/app/offres/page";
import OfferDetailPage from "@/app/offres/[slug]/page";
import OmraHajjPage from "@/app/omra-hajj/page";
import HajjPage from "@/app/omra-hajj/hajj/page";
import OmraPage from "@/app/omra-hajj/omra/page";
import OmraPlusPage from "@/app/omra-hajj/omra-plus/page";
import RamadanPage from "@/app/omra-hajj/ramadan/page";
import PolitiqueConfidentialitePage from "@/app/politique-confidentialite/page";
import SejoursSurMesurePage from "@/app/sejours-sur-mesure/page";
import ServicesPage from "@/app/services/page";
import BilletsAvionPage from "@/app/services/billets-avion/page";
import BilletsBateauPage from "@/app/services/billets-bateau/page";
import VoyagesOrganisesPage from "@/app/voyages-organises/page";

import Omra2026Page from "@/app/omra-2026/page";
import Omra2027Page from "@/app/omra-2027/page";
import OmraMonthPage2026 from "@/app/omra-2026/[month]/page";
import OmraMonthPage2027 from "@/app/omra-2027/[month]/page";
import DepartCityPage from "@/app/depart/[city]/page";
import VisasPage from "@/app/visas/page";
import FaqPage from "@/app/faq/page";
import BlogPage from "@/app/blog/page";
import BlogArticlePage from "@/app/blog/[slug]/page";
import Hajj2027Page from "@/app/hajj-2027/page";
import ZiyaratPage from "@/app/ziyarat/page";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-syanor-ivory px-6 text-center">
      <h1 className="font-playfair text-4xl font-bold text-syanor-ink">404</h1>
      <p className="mt-4 text-syanor-ink/70">Cette page n&apos;existe pas.</p>
      <a href="/" className="btn-primary mt-8">
        Retour à l&apos;accueil
      </a>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      {/* ── Core ── */}
      <Route path="/" component={Home} />
      <Route path="/a-propos" component={AProposPage} />
      <Route path="/conditions-generales" component={ConditionsGeneralesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/formation" component={FormationPage} />
      <Route path="/mentions-legales" component={MentionsLegalesPage} />
      <Route path="/politique-confidentialite" component={PolitiqueConfidentialitePage} />
      <Route path="/sejours-sur-mesure" component={SejoursSurMesurePage} />
      <Route path="/voyages-organises" component={VoyagesOrganisesPage} />

      {/* ── Services ── */}
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/billets-avion" component={BilletsAvionPage} />
      <Route path="/services/billets-bateau" component={BilletsBateauPage} />

      {/* ── Offers ── */}
      <Route path="/offres" component={OffresPage} />
      <Route path="/offres/:slug">
        {(params) => <OfferDetailPage slug={params.slug} />}
      </Route>

      {/* ── Omra & Hajj legacy ── */}
      <Route path="/omra-hajj" component={OmraHajjPage} />
      <Route path="/omra-hajj/hajj" component={HajjPage} />
      <Route path="/omra-hajj/omra" component={OmraPage} />
      <Route path="/omra-hajj/omra-plus" component={OmraPlusPage} />
      <Route path="/omra-hajj/ramadan" component={RamadanPage} />

      {/* ── Omra 2026 hub + month sub-pages ── */}
      <Route path="/omra-2026" component={Omra2026Page} />
      <Route path="/omra-2026/:month">
        {(params) => <OmraMonthPage2026 month={params.month ?? ""} />}
      </Route>

      {/* ── Omra 2027 hub + month sub-pages ── */}
      <Route path="/omra-2027" component={Omra2027Page} />
      <Route path="/omra-2027/:month">
        {(params) => <OmraMonthPage2027 month={params.month ?? ""} />}
      </Route>

      {/* ── City departure pages ── */}
      <Route path="/depart/:city">
        {(params) => <DepartCityPage city={params.city ?? ""} />}
      </Route>

      {/* ── SEO pages ── */}
      <Route path="/visas" component={VisasPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/hajj-2027" component={Hajj2027Page} />
      <Route path="/ziyarat" component={ZiyaratPage} />

      {/* ── Blog ── */}
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug">
        {(params) => <BlogArticlePage slug={params.slug ?? ""} />}
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QuoteProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <ScrollToTop />
        <Router />
      </WouterRouter>
    </QuoteProvider>
  );
}

export default App;
