import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { CONTACT_EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      effectiveDate="[Insert launch date]"
      sections={[
        {
          heading: "Information we collect",
          body: (
            <p>
              When you contact us through this site, we collect the
              information you provide directly — name, email address,
              project details, and anything else included in your message.
              We also collect standard technical data such as browser type
              and general location through analytics, if analytics is
              enabled on this site.
            </p>
          ),
        },
        {
          heading: "How we use information",
          body: (
            <p>
              We use the information you provide to respond to inquiries,
              scope potential projects, and, for active clients, to deliver
              agreed-upon work. We do not sell personal information to
              third parties.
            </p>
          ),
        },
        {
          heading: "Cookies and analytics",
          body: (
            <p>
              This site may use analytics tools to understand how visitors
              use it. [Specify the actual analytics provider in use, if
              any, and link to its own privacy policy here.]
            </p>
          ),
        },
        {
          heading: "Data retention",
          body: (
            <p>
              We retain inquiry and project information for as long as
              reasonably necessary to maintain client records and meet
              legal or contractual obligations, after which it is deleted
              or anonymized.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              Depending on your location, you may have rights to access,
              correct, or request deletion of your personal information.
              Contact us using the details below to make a request.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: <p>Questions about this policy can be sent to {CONTACT_EMAIL}.</p>,
        },
      ]}
    />
  );
}
