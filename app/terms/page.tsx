import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { CONTACT_EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms of Use"
      effectiveDate="[Insert launch date]"
      sections={[
        {
          heading: "Use of this site",
          body: (
            <p>
              This website is provided for informational purposes —
              learning about Velvex Labs, our work, and how to get in touch.
              You agree not to misuse the site, including attempting to
              disrupt its normal operation or access it through automated
              means beyond standard web crawling.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              All content on this site — including case studies, written
              work, and visual design — is the property of Velvex Labs
              unless otherwise credited, and may not be reproduced without
              permission.
            </p>
          ),
        },
        {
          heading: "Client engagements",
          body: (
            <p>
              These terms govern use of this website only. Actual client
              projects are governed by a separate signed agreement covering
              scope, payment, and deliverables, which takes precedence over
              anything on this site.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              This site is provided as-is. Velvex Labs is not liable for
              any damages arising from use of this site to the fullest
              extent permitted by law. [This clause should be reviewed and
              finalized with a lawyer before publishing.]
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          body: (
            <p>
              We may update these terms from time to time. Continued use of
              the site after changes constitutes acceptance of the updated
              terms.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: <p>Questions about these terms can be sent to {CONTACT_EMAIL}.</p>,
        },
      ]}
    />
  );
}
