import { Router, type IRouter } from "express";
import { travelOffers, omraPackages } from "../data/offers";

const router: IRouter = Router();

router.get("/offers", (_req, res) => {
  res.json(travelOffers);
});

router.get("/offers/:id", (req, res) => {
  const offer = travelOffers.find((o) => o.id === req.params["id"]);
  if (!offer) {
    res.status(404).json({ success: false, error: "Offre introuvable" });
    return;
  }
  res.json(offer);
});

router.get("/omra-packages", (_req, res) => {
  res.json(omraPackages);
});

router.get("/omra-packages/:id", (req, res) => {
  const pkg = omraPackages.find((p) => p.id === req.params["id"]);
  if (!pkg) {
    res.status(404).json({ success: false, error: "Package introuvable" });
    return;
  }
  res.json(pkg);
});

export default router;
