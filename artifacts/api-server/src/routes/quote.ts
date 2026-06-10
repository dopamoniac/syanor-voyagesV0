import { Router, type IRouter } from "express";

const router: IRouter = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/quote", (req, res) => {
  const body = (req.body ?? {}) as Record<string, unknown>;

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const serviceType =
    typeof body.serviceType === "string" ? body.serviceType.trim() : "";
  const departureCity =
    typeof body.departureCity === "string" ? body.departureCity.trim() : "";

  if (!fullName || !phone || !email || !serviceType || !departureCity) {
    res.status(400).json({
      success: false,
      error: "Veuillez remplir tous les champs obligatoires.",
    });
    return;
  }

  if (!EMAIL_RE.test(email)) {
    res.status(400).json({
      success: false,
      error: "Veuillez saisir une adresse e-mail valide.",
    });
    return;
  }

  res.json({ success: true });
});

export default router;
