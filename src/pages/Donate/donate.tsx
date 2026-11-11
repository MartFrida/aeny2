import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Landmark,
  MessageCircle,
} from "lucide-react";
import { Container } from "../../components/common/Container";
import { PageMetadata } from "../../components/common/PageMetadata";
import { Section } from "../../components/common/Section";
import { contactInfo } from "../../data/contact";
import {
  getInvolvedContent,
  getInvolvedDonationQr,
} from "../../data/getInvolved";

const focusClass =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary)";
const buttonClass = `inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-lg px-4 py-3 text-center text-sm font-semibold leading-5 transition-colors motion-reduce:transition-none ${focusClass}`;
const primaryButtonClass = `${buttonClass} bg-(--primary) text-(--primary-foreground) hover:bg-(--primary)/90`;
const secondaryButtonClass = `${buttonClass} border border-(--border) bg-(--surface) text-(--foreground) hover:bg-(--background)`;

const whatsappLink = (message: string) =>
  `${contactInfo.whatsappHref}?text=${encodeURIComponent(message)}`;

export function DonatePage() {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage === "es" ? "es" : "en";
  const { donation } = getInvolvedContent[language];

  return (
    <>
      <PageMetadata
        language={language}
        title={t("donate.seoTitle")}
        description={t("donate.seoDescription")}
        canonicalPath={`/${language}/donate`}
        alternateLanguagePaths={{ en: "/en/donate", es: "/es/donate" }}
      />

      <Section
        id="donate"
        aria-labelledby="donate-title"
        className="scroll-mt-24 border-b border-(--border) bg-(--background)"
      >
        <Container className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-6 xl:gap-x-16">
          {/* Intro comes first on mobile; the text column sits on the right on desktop. */}
          <div className="mx-auto w-full min-w-0 max-w-2xl lg:col-start-2 lg:row-start-1 lg:max-w-none">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t("donate.title")}
            </p>
            <h1
              id="donate-title"
              className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) sm:text-4xl"
            >
              {donation.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-(--muted)">
              {donation.copy}
            </p>
          </div>

          {/* The QR follows the intro on mobile and spans the left column on desktop. */}
          <aside
            aria-labelledby="donation-qr-title"
            className="mx-auto w-full min-w-0 max-w-md rounded-2xl border border-(--primary)/20 bg-(--surface) p-5 text-center sm:p-8 lg:col-start-1 lg:row-span-2 lg:row-start-1"
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-(--accent-soft) text-(--primary)">
              <Landmark size={23} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h2
              id="donation-qr-title"
              className="mt-4 font-display text-2xl leading-tight text-(--foreground)"
            >
              {donation.qrTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-(--muted)">
              {donation.qrCopy}
            </p>

            <a
              href={getInvolvedDonationQr}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={donation.qrOpenLabel}
              className={`mx-auto mt-6 block w-full max-w-72 rounded-xl border border-(--border) bg-white p-3 ${focusClass}`}
            >
              <span className="flex aspect-square w-full items-center justify-center">
                <img
                  src={getInvolvedDonationQr}
                  alt={donation.qrAlt}
                  width={342}
                  height={352}
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </span>
            </a>

            <p className="mt-4 text-sm font-semibold leading-6 text-(--foreground)">
              {donation.amountNote}
            </p>
            <div className="mt-5 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={getInvolvedDonationQr}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={donation.qrOpenLabel}
                className={`${secondaryButtonClass} w-full`}
              >
                <span className="min-w-0 break-words">{donation.qrOpen}</span>
                <ExternalLink size={16} className="shrink-0" aria-hidden="true" />
              </a>
              <a
                href={getInvolvedDonationQr}
                download="AEINY-Cooperativa-Yuyay-QR.jpeg"
                className={`${primaryButtonClass} w-full`}
              >
                <Download size={16} className="shrink-0" aria-hidden="true" />
                <span className="min-w-0 break-words">{donation.qrDownload}</span>
              </a>
            </div>
            <p className="mx-auto mt-4 max-w-xs text-xs leading-5 text-(--muted)">
              {donation.mobileHint}
            </p>
          </aside>

          {/* Supporting details follow the QR on mobile and continue the right column. */}
          <div className="mx-auto w-full min-w-0 max-w-2xl lg:col-start-2 lg:row-start-2 lg:max-w-none">
            <h2 className="text-base font-semibold leading-6 text-(--foreground)">
              {donation.supportTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {donation.points.map((point) => (
                <li
                  key={point}
                  className="flex min-w-0 gap-3 text-sm leading-6 text-(--muted) sm:text-base sm:leading-7"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--primary)"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              to={`/${language}/our-work`}
              className={`mt-5 inline-flex min-h-12 max-w-full items-center gap-2 rounded-sm text-sm font-semibold text-(--primary) underline underline-offset-4 ${focusClass}`}
            >
              <span className="min-w-0">{donation.workCta}</span>
              <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
            </Link>

            <div className="mt-6 rounded-xl border border-(--border) bg-(--surface) p-4 sm:p-5">
              <p className="text-sm leading-6 text-(--muted)">
                {donation.question}
              </p>
              <a
                href={whatsappLink(donation.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${secondaryButtonClass} mt-4 w-full sm:w-auto`}
              >
                <MessageCircle size={18} className="shrink-0" aria-hidden="true" />
                <span className="min-w-0 break-words">{donation.cta}</span>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
