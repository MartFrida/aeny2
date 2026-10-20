import { useTranslation } from "react-i18next";
import { Container } from "../../components/common/Container";
import { PageMetadata } from "../../components/common/PageMetadata";
import { Section } from "../../components/common/Section";
import { contactInfo } from "../../data/contact";

export function ContactPage() {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage === "es" ? "es" : "en";

  return (
    <>
      <PageMetadata
        language={language}
        title={t("contact.seoTitle")}
        description={t("contact.seoDescription")}
        canonicalPath={`/${language}/contact`}
        alternateLanguagePaths={{ en: "/en/contact", es: "/es/contact" }}
      />
      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-(--border) bg-(--surface) p-6">
            <h2 className="text-2xl font-semibold text-(--foreground)">
              {t("contact.generalInquiries")}
            </h2>
            <div className="mt-4 space-y-3 text-(--muted)">
              <p>
                {contactInfo.addressLine1}
                <br />
                {contactInfo.addressLine2}
              </p>
              <p>
                <a
                  href={contactInfo.phoneHref}
                  className="hover:text-(--foreground)"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a
                  href={contactInfo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-(--foreground)"
                >
                  {t("contact.whatsapp")}: {contactInfo.whatsapp}
                </a>
              </p>
              <p>
                <a
                  href={contactInfo.emailHref}
                  className="hover:text-(--foreground)"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p>
                <a
                  href={contactInfo.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-(--foreground)"
                >
                  {t("contact.followOnTikTok")}
                </a>
              </p>
            </div>
          </article>
          <article className="rounded-2xl border border-(--border) bg-(--surface) p-6">
            <h2 className="text-2xl font-semibold text-(--foreground)">
              {t("contact.partnerships")}
            </h2>
            <p className="mt-3 text-(--muted)">
              {t("contact.partnershipsCopy")}
            </p>
          </article>
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold text-(--foreground)">
              {t("contact.findUs")}
            </h2>
            <a
              href={contactInfo.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-md bg-(--primary) px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4d4d3d]"
            >
              {t("contact.getDirections")}
            </a>
          </div>
          <div className="mt-6 h-80 overflow-hidden rounded-2xl border border-(--border) shadow-sm md:h-110">
            <iframe
              title={t("contact.findUs")}
              src={`https://www.google.com/maps?q=${encodeURIComponent(contactInfo.mapAddress)}&output=embed`}
              loading="lazy"
              className="h-full w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
