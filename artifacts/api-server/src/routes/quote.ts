import { Router, type IRouter } from "express";

const router: IRouter = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/quote", (req, res) => {
  const body = (req.body ?? {}) as Record<string, unknown>;

  // Support both legacy web payload (fullName, serviceType) and
  // new mobile payload (firstName + lastName, tripType).
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  // Name: mobile sends firstName+lastName; web sends fullName
  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
  const lastName = typeof body.lastName === "string" ? body.lastName.trim() : "";
  const resolvedName = fullName || [firstName, lastName].filter(Boolean).join(" ");

  // Trip type: mobile sends tripType; web sends serviceType
  const tripType = typeof body.tripType === "string" ? body.tripType.trim() : "";
  const serviceType = typeof body.serviceType === "string" ? body.serviceType.trim() : "";
  const resolvedType = tripType || serviceType;

  if (!resolvedName) {
    res.status(400).json({ success: false, error: "Veuillez indiquer votre nom." });
    return;
  }
  if (!phone) {
    res.status(400).json({ success: false, error: "Veuillez indiquer votre téléphone." });
    return;
  }
  if (!email || !EMAIL_RE.test(email)) {
    res.status(400).json({ success: false, error: "Veuillez saisir une adresse e-mail valide." });
    return;
  }
  if (!resolvedType) {
    res.status(400).json({ success: false, error: "Veuillez sélectionner un type de voyage." });
    return;
  }

  res.json({
    success: true,
    message: "Votre demande a bien été reçue. Nous vous contacterons sous 24h.",
  });
});

export default router;
