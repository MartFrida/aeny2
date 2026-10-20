import { useState, type FormEvent } from "react";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  Clock3,
  Droplets,
  MapPin,
  Shirt,
  Ticket,
  Timer,
  Trophy,
  Apple,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/common/Button";
import { Container } from "../../components/common/Container";
import { PageMetadata } from "../../components/common/PageMetadata";

const formName = "chasqui-migrante-2026-registration";

export function ChasquiMigrante2026Page() {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage === "es" ? "es" : "en";
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const paymentUrl = import.meta.env.VITE_CHASQUI_PAYMENT_URL;
  const securePaymentUrl = paymentUrl?.startsWith("https://") ? paymentUrl : "";
  const englishPath = "/en/events/chasqui-migrante-2026";
  const spanishPath = "/es/events/chasqui-migrante-2026";
  const path = language === "es" ? spanishPath : englishPath;
  const includedItems = [
    { key: "shirt", icon: Shirt },
    { key: "chip", icon: Timer },
    { key: "hydration", icon: Droplets },
    { key: "medal", icon: Award },
    { key: "bib", icon: Ticket },
    { key: "certificate", icon: BadgeCheck },
    { key: "fruit", icon: Apple },
    { key: "prizes", icon: Trophy },
  ] as const;
  const eventFacts = [
    { key: "date", value: t("chasqui2026.fullDate"), icon: CalendarDays },
    { key: "time", value: "08:00", icon: Clock3 },
    {
      key: "location",
      value: t("chasqui2026.fullLocation"),
      icon: MapPin,
    },
    { key: "distance", value: "5K / 10K", icon: Timer },
    { key: "registration", value: "$15 USD", icon: Ticket },
  ] as const;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmissionError("");

    const body = new URLSearchParams();
    new FormData(event.currentTarget).forEach((value, key) => {
      if (typeof value === "string") body.append(key, value);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error(`Registration failed with status ${response.status}`);
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Could not submit Chasqui Migrante registration.", error);
      setSubmissionError(t("chasqui2026.form.error"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageMetadata
        language={language}
        title={t("chasqui2026.seoTitle")}
        description={t("chasqui2026.seoDescription")}
        canonicalPath={path}
        alternateLanguagePaths={{ en: englishPath, es: spanishPath }}
      />

      <section className="overflow-hidden bg-(--surface-dark) text-white">
        <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
              {t("chasqui2026.eyebrow")}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              {t("chasqui2026.title")}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              {t("chasqui2026.heroDescription")}
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/80">
              <span>{t("chasqui2026.date")}</span>
              <span>08:00</span>
              <span>{t("chasqui2026.city")}</span>
              <span>5K / 10K</span>
              <span>{t("chasqui2026.registrationPrice")}</span>
            </div>
            <div className="mt-8">
              <a
                href="#registration"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-(--accent) px-5 py-3 text-sm font-semibold text-(--surface-dark) transition-colors hover:bg-(--accent)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface-dark) sm:w-auto"
              >
                {t("chasqui2026.registerCta")}
              </a>
            </div>
          </div>
          <aside className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-7">
            <h2 className="font-display text-2xl text-white">
              {t("chasqui2026.informationTitle")}
            </h2>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {eventFacts.map(({ key, value, icon: Icon }) => (
                <div
                  key={key}
                  className="min-w-0 rounded-xl border border-white/10 bg-black/10 p-4"
                >
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/60">
                    <Icon size={16} aria-hidden="true" />
                    {t(`chasqui2026.facts.${key}`)}
                  </dt>
                  <dd className="mt-2 whitespace-pre-line text-sm font-medium leading-6 text-white">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </Container>
      </section>

      <section className="bg-(--background) py-14 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t("chasqui2026.includedEyebrow")}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl">
              {t("chasqui2026.includedTitle")}
            </h2>
            <p className="mt-5 text-base leading-7 text-(--muted)">
              {t("chasqui2026.description")}
            </p>
            <p className="mt-5 font-semibold text-(--foreground)">
              {t("chasqui2026.organizerLabel")}:{" "}
              {t("chasqui2026.organizer")}
            </p>
            <a
              href="https://www.finisherdata.com/eventos/chasqui_migrante_2026?id_event=830"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-10 items-center rounded-md text-sm font-semibold text-(--primary) underline decoration-(--accent) underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)"
            >
              {t("chasqui2026.officialEventLink")}
            </a>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {includedItems.map(({ key, icon: Icon }) => (
              <li
                key={key}
                className="flex min-h-20 items-center gap-4 rounded-xl border border-(--border) bg-(--surface) p-4 sm:p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--accent-soft) text-(--primary)">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="font-medium text-(--foreground)">
                  {t(`chasqui2026.included.${key}`)}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        id="registration"
        className="scroll-mt-20 border-y border-(--border) bg-(--surface) py-14 md:py-20"
      >
        <Container className="grid gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t("chasqui2026.registrationEyebrow")}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl">
              {t("chasqui2026.registrationTitle")}
            </h2>
            <p className="mt-4 leading-7 text-(--muted)">
              {t("chasqui2026.registrationPrice")}
            </p>
            <p className="mt-4 text-sm leading-6 text-(--muted)">
              {t("chasqui2026.registrationNote")}
            </p>
          </div>

          {submitted ? (
            <div
              className="rounded-2xl border border-(--border) bg-(--background) p-6 sm:p-8"
              role="status"
              aria-live="polite"
            >
              <h3 className="font-display text-2xl text-(--foreground)">
                {t("chasqui2026.form.successTitle")}
              </h3>
              <p className="mt-3 leading-7 text-(--muted)">
                {t("chasqui2026.form.successMessage")}
              </p>
              {securePaymentUrl && (
                <a
                  href={securePaymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-(--primary) px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 sm:w-auto"
                >
                  {t("chasqui2026.form.paymentCta")}
                </a>
              )}
            </div>
          ) : (
            <form
              name={formName}
              method="POST"
              action="/"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4 rounded-2xl border border-(--border) bg-(--background) p-5 sm:grid-cols-2 sm:p-7"
            >
              <input type="hidden" name="form-name" value={formName} />
              <input
                type="hidden"
                name="event"
                value="Chasqui Migrante 5K & 10K 2026"
              />
              <input type="hidden" name="price" value="15 USD" />

              <FormField
                id="firstName"
                label={t("chasqui2026.form.firstName")}
                required
              />
              <FormField
                id="lastName"
                label={t("chasqui2026.form.lastName")}
                required
              />
              <FormField
                id="email"
                label={t("chasqui2026.form.email")}
                type="email"
                required
              />
              <FormField
                id="phone"
                label={t("chasqui2026.form.phone")}
                type="tel"
                required
              />
              <label className="grid gap-2 text-sm font-medium text-(--foreground)">
                {t("chasqui2026.form.distance")}
                <select
                  name="distance"
                  required
                  defaultValue=""
                  className="min-h-11 w-full rounded-md border border-(--border) bg-(--background) px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)"
                >
                  <option value="" disabled>
                    {t("chasqui2026.form.selectOption")}
                  </option>
                  <option value="5K">5K</option>
                  <option value="10K">10K</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-(--foreground)">
                {t("chasqui2026.form.shirtSize")}
                <select
                  name="shirtSize"
                  required
                  defaultValue=""
                  className="min-h-11 w-full rounded-md border border-(--border) bg-(--background) px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)"
                >
                  <option value="" disabled>
                    {t("chasqui2026.form.selectOption")}
                  </option>
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </label>
              <FormField
                id="birthDate"
                label={t("chasqui2026.form.birthDate")}
                type="date"
                required
              />
              <FormField
                id="city"
                label={t("chasqui2026.form.city")}
              />
              <FormField
                id="country"
                label={t("chasqui2026.form.country")}
              />
              <FormField
                id="emergencyContact"
                label={t("chasqui2026.form.emergencyContact")}
                required
              />
              <FormField
                id="emergencyPhone"
                label={t("chasqui2026.form.emergencyPhone")}
                type="tel"
                required
              />

              <label className="flex items-start gap-3 text-sm leading-6 text-(--foreground) sm:col-span-2">
                <input
                  type="checkbox"
                  name="informationConfirmed"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-(--primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2"
                />
                <span>{t("chasqui2026.form.confirmInformation")}</span>
              </label>
              <label className="flex items-start gap-3 text-sm leading-6 text-(--foreground) sm:col-span-2">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-(--primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2"
                />
                <span>{t("chasqui2026.form.acceptTerms")}</span>
              </label>

              {submissionError && (
                <p
                  className="text-sm font-medium text-red-700 sm:col-span-2"
                  role="alert"
                  aria-live="assertive"
                >
                  {submissionError}
                </p>
              )}
              <Button
                type="submit"
                disabled={submitting}
                className="min-h-11 w-full justify-center bg-(--primary) text-white hover:bg-(--primary)/90 disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
              >
                {submitting
                  ? t("chasqui2026.form.submitting")
                  : t("chasqui2026.form.submit")}
              </Button>
            </form>
          )}
        </Container>
      </section>
    </>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
};

function FormField({
  id,
  label,
  type = "text",
  required = false,
}: FormFieldProps) {
  return (
    <label
      htmlFor={id}
      className="grid gap-2 text-sm font-medium text-(--foreground)"
    >
      {label}
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="min-h-11 w-full rounded-md border border-(--border) bg-(--background) px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)"
      />
    </label>
  );
}
