import { useState } from "react";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const qrLink = "https://miro.medium.com/v2/0*sARQV_T9tYQY-y5I";

  return (
    <div className={`feedback-widget ${open ? "open" : ""}`}>
      <button
        className="feedback-toggle-button"
        onClick={() => setOpen(!open)}
      >
        <span className="feedback-icon">🗨️</span>
        <span className="feedback-label">Donnez nous votre avis</span>
      </button>

      <div className="feedback-content">
        <p>
          Vous pouvez partager votre retour sur cet outil pour contribuer à son amélioration.
        </p>
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(qrLink)}`}
          alt="QR code vers le formulaire des avis utilisateur"
          className="qr"
        />
      </div>
    </div>
  );
}