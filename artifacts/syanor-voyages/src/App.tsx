import { Switch, Route, Router as WouterRouter } from "wouter";
import { QuoteProvider } from "@/components/providers/QuoteContext";

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
      <Route path="/" component={Home} />
      <Route path="/a-propos" component={AProposPage} />
      <Route path="/conditions-generales" component={ConditionsGeneralesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/formation" component={FormationPage} />
      <Route path="/mentions-legales" component={MentionsLegalesPage} />
      <Route path="/offres" component={OffresPage} />
      <Route path="/offres/:slug">
        {(params) => <OfferDetailPage slug={params.slug} />}
      </Route>
      <Route path="/omra-hajj" component={OmraHajjPage} />
      <Route path="/omra-hajj/hajj" component={HajjPage} />
      <Route path="/omra-hajj/omra" component={OmraPage} />
      <Route path="/omra-hajj/omra-plus" component={OmraPlusPage} />
      <Route path="/omra-hajj/ramadan" component={RamadanPage} />
      <Route path="/politique-confidentialite" component={PolitiqueConfidentialitePage} />
      <Route path="/sejours-sur-mesure" component={SejoursSurMesurePage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/billets-avion" component={BilletsAvionPage} />
      <Route path="/services/billets-bateau" component={BilletsBateauPage} />
      <Route path="/voyages-organises" component={VoyagesOrganisesPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QuoteProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QuoteProvider>
  );
}

export default App;
