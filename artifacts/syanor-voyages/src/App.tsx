import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QuoteProvider } from "@/components/providers/QuoteContext";
import ScrollToTop from "@/components/ScrollToTop";

/* ── Portal ── */
import Home from "@/app/page";

/* ── Agency space ── */
import AgenceHome            from "@/app/agence/page";
import AProposPage           from "@/app/a-propos/page";
import ConditionsGeneralesPage from "@/app/conditions-generales/page";
import ContactPage           from "@/app/contact/page";
import FormationPage         from "@/app/formation/page";
import MentionsLegalesPage   from "@/app/mentions-legales/page";
import OffresPage            from "@/app/offres/page";
import OfferDetailPage       from "@/app/offres/[slug]/page";
import PolitiqueConfidentialitePage from "@/app/politique-confidentialite/page";
import SejoursSurMesurePage  from "@/app/sejours-sur-mesure/page";
import ServicesPage          from "@/app/services/page";
import BilletsAvionPage      from "@/app/services/billets-avion/page";
import BilletsBateauPage     from "@/app/services/billets-bateau/page";
import VoyagesOrganisesPage  from "@/app/voyages-organises/page";
import VisasPage             from "@/app/visas/page";
import FaqPage               from "@/app/faq/page";
import BlogPage              from "@/app/blog/page";
import BlogArticlePage       from "@/app/blog/[slug]/page";

/* ── Omra Factory space ── */
import OmraHajjPage          from "@/app/omra-hajj/page";
import HajjPage              from "@/app/omra-hajj/hajj/page";
import OmraPage              from "@/app/omra-hajj/omra/page";
import OmraPlusPage          from "@/app/omra-hajj/omra-plus/page";
import RamadanPage           from "@/app/omra-hajj/ramadan/page";
import OmraContactPage       from "@/app/omra-hajj/contact/page";
import OmraBlogPage          from "@/app/omra-hajj/blog/page";
import OmraBlogArticlePage   from "@/app/omra-hajj/blog/[slug]/page";
import Omra2026Page          from "@/app/omra-2026/page";
import Omra2027Page          from "@/app/omra-2027/page";
import OmraMonthPage2026     from "@/app/omra-2026/[month]/page";
import OmraMonthPage2027     from "@/app/omra-2027/[month]/page";
import Hajj2027Page          from "@/app/hajj-2027/page";
import ZiyaratPage           from "@/app/ziyarat/page";

/* ── Shared (no namespace) ── */
import DepartCityPage        from "@/app/depart/[city]/page";

/* ── Client-side redirect ── */
function Redirect({ to }: { to: string }) {
  const [, setLocation] = useLocation();
  useEffect(() => { setLocation(to, { replace: true }); }, [to, setLocation]);
  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-syanor-ivory px-6 text-center">
      <h1 className="font-playfair text-4xl font-bold text-syanor-ink">404</h1>
      <p className="mt-4 text-syanor-ink/70">Cette page n&apos;existe pas.</p>
      <a href="/agence" className="btn-primary mt-8">
        Retour à l&apos;agence
      </a>
    </div>
  );
}

function Router() {
  return (
    <Switch>

      {/* ══ PORTAL ══ */}
      <Route path="/" component={Home} />

      {/* ══ AGENCY SPACE (/agence/*) ══ */}
      <Route path="/agence" component={AgenceHome} />
      <Route path="/agence/a-propos"                component={AProposPage} />
      <Route path="/agence/conditions-generales"    component={ConditionsGeneralesPage} />
      <Route path="/agence/contact"                 component={ContactPage} />
      <Route path="/agence/formation"               component={FormationPage} />
      <Route path="/agence/mentions-legales"        component={MentionsLegalesPage} />
      <Route path="/agence/politique-confidentialite" component={PolitiqueConfidentialitePage} />
      <Route path="/agence/sejours-sur-mesure"      component={SejoursSurMesurePage} />
      <Route path="/agence/voyages-organises"       component={VoyagesOrganisesPage} />
      <Route path="/agence/services"                component={ServicesPage} />
      <Route path="/agence/services/billets-avion"  component={BilletsAvionPage} />
      <Route path="/agence/services/billets-bateau" component={BilletsBateauPage} />
      <Route path="/agence/visas"                   component={VisasPage} />
      <Route path="/agence/faq"                     component={FaqPage} />
      <Route path="/agence/offres"                  component={OffresPage} />
      <Route path="/agence/offres/:slug">
        {(params) => <OfferDetailPage slug={params.slug ?? ""} />}
      </Route>
      <Route path="/agence/blog"                    component={BlogPage} />
      <Route path="/agence/blog/:slug">
        {(params) => <BlogArticlePage slug={params.slug ?? ""} />}
      </Route>

      {/* ══ OMRA FACTORY SPACE (/omra-factory/*) ══ */}
      <Route path="/omra-factory"                   component={OmraHajjPage} />
      <Route path="/omra-factory/hajj"              component={HajjPage} />
      <Route path="/omra-factory/omra"              component={OmraPage} />
      <Route path="/omra-factory/omra-plus"         component={OmraPlusPage} />
      <Route path="/omra-factory/ramadan"           component={RamadanPage} />
      <Route path="/omra-factory/contact"           component={OmraContactPage} />
      <Route path="/omra-factory/blog"              component={OmraBlogPage} />
      <Route path="/omra-factory/blog/:slug">
        {(params) => <OmraBlogArticlePage slug={params.slug ?? ""} />}
      </Route>
      <Route path="/omra-factory/omra-2026"         component={Omra2026Page} />
      <Route path="/omra-factory/omra-2026/:month">
        {(params) => <OmraMonthPage2026 month={params.month ?? ""} />}
      </Route>
      <Route path="/omra-factory/omra-2027"         component={Omra2027Page} />
      <Route path="/omra-factory/omra-2027/:month">
        {(params) => <OmraMonthPage2027 month={params.month ?? ""} />}
      </Route>
      <Route path="/omra-factory/hajj-2027"         component={Hajj2027Page} />
      <Route path="/omra-factory/ziyarat"           component={ZiyaratPage} />

      {/* ══ SHARED ══ */}
      <Route path="/depart/:city">
        {(params) => <DepartCityPage city={params.city ?? ""} />}
      </Route>

      {/* ══ LEGACY REDIRECTS — agency ══ */}
      <Route path="/a-propos">            {() => <Redirect to="/agence/a-propos" />}            </Route>
      <Route path="/conditions-generales">{() => <Redirect to="/agence/conditions-generales" />}</Route>
      <Route path="/contact">             {() => <Redirect to="/agence/contact" />}             </Route>
      <Route path="/formation">           {() => <Redirect to="/agence/formation" />}           </Route>
      <Route path="/mentions-legales">    {() => <Redirect to="/agence/mentions-legales" />}    </Route>
      <Route path="/politique-confidentialite">{() => <Redirect to="/agence/politique-confidentialite" />}</Route>
      <Route path="/sejours-sur-mesure">  {() => <Redirect to="/agence/sejours-sur-mesure" />}  </Route>
      <Route path="/voyages-organises">   {() => <Redirect to="/agence/voyages-organises" />}   </Route>
      <Route path="/services">            {() => <Redirect to="/agence/services" />}            </Route>
      <Route path="/services/billets-avion">{() => <Redirect to="/agence/services/billets-avion" />}</Route>
      <Route path="/services/billets-bateau">{() => <Redirect to="/agence/services/billets-bateau" />}</Route>
      <Route path="/visas">               {() => <Redirect to="/agence/visas" />}               </Route>
      <Route path="/faq">                 {() => <Redirect to="/agence/faq" />}                 </Route>
      <Route path="/offres">              {() => <Redirect to="/agence/offres" />}              </Route>
      <Route path="/offres/:slug">
        {(params) => <Redirect to={`/agence/offres/${params.slug ?? ""}`} />}
      </Route>
      <Route path="/blog">                {() => <Redirect to="/agence/blog" />}                </Route>
      <Route path="/blog/:slug">
        {(params) => <Redirect to={`/agence/blog/${params.slug ?? ""}`} />}
      </Route>

      {/* ══ LEGACY REDIRECTS — Omra Factory ══ */}
      <Route path="/omra-hajj">           {() => <Redirect to="/omra-factory" />}              </Route>
      <Route path="/omra-hajj/hajj">      {() => <Redirect to="/omra-factory/hajj" />}         </Route>
      <Route path="/omra-hajj/omra">      {() => <Redirect to="/omra-factory/omra" />}         </Route>
      <Route path="/omra-hajj/omra-plus"> {() => <Redirect to="/omra-factory/omra-plus" />}    </Route>
      <Route path="/omra-hajj/ramadan">   {() => <Redirect to="/omra-factory/ramadan" />}      </Route>
      <Route path="/omra-hajj/contact">   {() => <Redirect to="/omra-factory/contact" />}      </Route>
      <Route path="/omra-hajj/blog">      {() => <Redirect to="/omra-factory/blog" />}         </Route>
      <Route path="/omra-hajj/blog/:slug">
        {(params) => <Redirect to={`/omra-factory/blog/${params.slug ?? ""}`} />}
      </Route>
      <Route path="/omra-2026">           {() => <Redirect to="/omra-factory/omra-2026" />}    </Route>
      <Route path="/omra-2026/:month">
        {(params) => <Redirect to={`/omra-factory/omra-2026/${params.month ?? ""}`} />}
      </Route>
      <Route path="/omra-2027">           {() => <Redirect to="/omra-factory/omra-2027" />}    </Route>
      <Route path="/omra-2027/:month">
        {(params) => <Redirect to={`/omra-factory/omra-2027/${params.month ?? ""}`} />}
      </Route>
      <Route path="/hajj-2027">           {() => <Redirect to="/omra-factory/hajj-2027" />}    </Route>
      <Route path="/ziyarat">             {() => <Redirect to="/omra-factory/ziyarat" />}      </Route>

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
