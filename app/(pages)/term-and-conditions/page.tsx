"use client"

import Header from "@/app/components/LandingPage/Header"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <>
      <Header />

      <div className="relative min-h-screen bg-gradient-to-b from-background via-background/90 to-muted/40 dark:from-slate-950 dark:to-slate-900 text-foreground mt-[4rem]">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-r from-primary/25 to-secondary/25 blur-3xl opacity-25 rounded-full -translate-x-1/2 -translate-y-1/2" />
       
        <div className="relative max-w-5xl mx-auto px-6 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Terms & Conditions
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-10"
          >

            {/* --- Introduction --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 backdrop-blur-sm border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to <strong>Foxcolab</strong>, developed by <strong>Foxcolab Technologies</strong> (“we”, “our”, “us”).
                These Terms and Conditions (“Terms”) govern your access to and use of the Foxcolab mobile and web applications
                (the “App”) and related services including messaging, calls, teams, spaces, and collaboration tools.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                By installing, registering, or using Foxcolab, you agree to be bound by these Terms. If you do not agree,
                please uninstall the app and discontinue its use.
              </p>
            </div>

            {/* --- Eligibility --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">2. Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must be at least 13 years old (or the minimum legal age in your region) to use Foxcolab.  
                By using the app, you confirm that:
              </p>
              <ul className="list-disc list-inside mt-3 text-muted-foreground space-y-1">
                <li>You have the legal capacity to enter into these Terms.</li>
                <li>You provide accurate and current information during registration.</li>
                <li>You will use Foxcolab in compliance with all applicable laws and regulations.</li>
              </ul>
            </div>

            {/* --- Account Responsibilities --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">3. User Accounts & Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the confidentiality of your Foxcolab account and for all activities
                that occur under it. We strongly recommend enabling device-level security and keeping your authentication
                credentials private.
              </p>
              <ul className="list-disc list-inside mt-3 text-muted-foreground space-y-1">
                <li>You agree not to share your account with others or impersonate another person.</li>
                <li>You must immediately notify us at <a href="mailto:contact@foxcolab.com" className="text-primary hover:underline">contact@foxcolab.com</a> if you suspect unauthorized access.</li>
                <li>Foxcolab Technologies will not be liable for any loss arising from unauthorized account use.</li>
              </ul>
            </div>

            {/* --- License --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">4. License to Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                We grant you a limited, revocable, non-exclusive, non-transferable license to download, install, and use
                Foxcolab for personal or organizational communication in accordance with these Terms.  
                You agree not to:
              </p>
              <ul className="list-disc list-inside mt-3 text-muted-foreground space-y-1">
                <li>Copy, modify, reverse-engineer, or distribute the app.</li>
                <li>Use Foxcolab for commercial resale, spamming, or any illegal activity.</li>
                <li>Attempt to bypass encryption or security mechanisms.</li>
              </ul>
            </div>

            {/* --- User Conduct --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">5. Acceptable Use Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use Foxcolab responsibly and lawfully. Prohibited behavior includes, but is not limited to:
              </p>
              <ul className="list-disc list-inside mt-3 text-muted-foreground space-y-1">
                <li>Sending spam, threats, harassment, or illegal content.</li>
                <li>Sharing content that violates intellectual property rights or privacy of others.</li>
                <li>Using the app to distribute malware, phishing, or fraudulent schemes.</li>
                <li>Attempting to access data or servers without authorization.</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Violation of these rules may result in suspension or termination of your account without notice.
              </p>
            </div>

            {/* --- Content Ownership --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">6. User Content & Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                You retain full ownership of the messages, media, and content you share on Foxcolab. We do not claim rights
                over your communications. However, by using the app, you grant us a limited license to transmit encrypted
                data solely for service delivery.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                All intellectual property rights in Foxcolab — including software, branding, and user interface — remain the
                exclusive property of <strong>Foxcolab Technologies</strong>. Unauthorized reproduction or redistribution is prohibited.
              </p>
            </div>

            {/* --- Termination --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">7. Account Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may delete your account at any time via the app’s settings. Upon deletion, your messages, media, and account
                data are permanently erased in accordance with our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate accounts that violate these Terms, engage in illegal activity,
                or pose security threats to other users or systems.
              </p>
            </div>

            {/* --- Continue Below --- */}
            {/* --- Limitation of Liability --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, <strong>Foxcolab Technologies</strong> shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages, including loss of data, profits,
                or goodwill arising out of your use or inability to use the App.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                While we strive to ensure continuous availability and security, Foxcolab is provided “as is” and “as available.”
                We make no warranties or representations regarding the app’s uninterrupted operation or error-free performance.
              </p>
            </div>

            {/* --- Disclaimer of Warranties --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">9. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Foxcolab and all related services are provided without warranties of any kind, express or implied, including
                warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We do not guarantee that the app will meet your expectations or that any errors or defects will be corrected
                immediately. All communications are encrypted, but users are responsible for maintaining secure device
                configurations and up-to-date software.
              </p>
            </div>

            {/* --- Indemnification --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">10. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless <strong>Foxcolab Technologies</strong>, its affiliates,
                employees, and partners from any claim, demand, loss, or damages, including legal fees, arising from your
                violation of these Terms, misuse of the App, or infringement of another party’s rights.
              </p>
            </div>

            {/* --- Service Availability & Updates --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">11. Service Availability & Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update, modify, suspend, or discontinue any aspect of Foxcolab without prior notice. Major updates or
                feature changes will be communicated in-app or on our website. We may also release patches or security
                enhancements periodically, which you agree to install promptly.
              </p>
            </div>

            {/* --- Third-Party Links --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">12. Third-Party Links & Integrations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Foxcolab may contain links or integrations to third-party services (e.g., file previews, websites, or APIs).
                We are not responsible for the content, policies, or security of these external services. You access such
                services at your own risk and should review their respective terms and privacy policies.
              </p>
            </div>

            {/* --- Governing Law --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">13. Governing Law & Jurisdiction</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India and, where applicable,
                international privacy and data protection standards such as GDPR.  
                Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, India.
              </p>
            </div>

            {/* --- Dispute Resolution --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">14. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                We aim to resolve disputes amicably. In case of disagreement, you agree to first contact us at{" "}
                <a href="mailto:contact@foxcolab.com" className="text-primary hover:underline">contact@foxcolab.com</a>.
                If not resolved within 30 days, disputes may be referred to confidential arbitration under the
                Arbitration and Conciliation Act of 1996 (India) before a single arbitrator appointed by Foxcolab Technologies.
              </p>
            </div>

            {/* --- Modifications to Terms --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">15. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify these Terms periodically to reflect new features, regulations, or business needs. Updated
                versions will be published at{" "}
                <a href="https://foxcolab.com/terms" className="text-primary hover:underline">
                  https://foxcolab.com/terms
                </a>{" "}
                and notified in-app or by email. Continued use after an update constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* --- Severability --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">16. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found invalid or unenforceable, the remaining provisions shall remain in
                full force and effect, and an enforceable term closest to the original intent will replace the invalid portion.
              </p>
            </div>

            {/* --- Entire Agreement --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">17. Entire Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms, together with the{" "}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>, constitute the entire
                agreement between you and Foxcolab Technologies regarding the App and supersede all prior understandings
                or agreements, written or oral.
              </p>
            </div>

            {/* --- Contact --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">18. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any legal, technical, or support-related queries about these Terms, please reach out to us:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p><strong>Foxcolab Technologies</strong></p>
                <p><a href="https://foxcolab.com" className="text-primary hover:underline">https://foxcolab.com</a></p>
                <p><a href="mailto:contact@foxcolab.com" className="text-primary hover:underline">contact@foxcolab.com</a></p>
              </div>
            </div>

            {/* --- Closing Summary --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border text-center">
              <h2 className="text-xl font-semibold mb-4 text-primary">19. Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Foxcolab exists to make secure communication effortless.  
                By using our platform, you agree to respect others, protect your own privacy, and comply with applicable laws.  
                We promise transparency, end-to-end encryption, and continuous improvement in keeping your data safe.
              </p>
            </div>

            <div className="text-center pt-8 text-muted-foreground border-t border-border">
              <p>© {new Date().getFullYear()} Foxcolab Technologies. All Rights Reserved.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
