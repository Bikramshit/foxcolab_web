"use client"

import Footer from "@/app/components/LandingPage/Footer"
import Header from "@/app/components/LandingPage/Header"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <>
      <Header />

      <div className="relative min-h-screen bg-gradient-to-b from-background via-background/90 to-muted/40 dark:from-slate-950 dark:to-slate-900 text-foreground">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-r from-primary/25 to-secondary/25 blur-3xl opacity-25 rounded-full -translate-x-1/2 -translate-y-1/2" />
       
        <div className="relative max-w-5xl mx-auto px-6 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Privacy Policy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-10"
          >
            {/* --- Basic Info --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 backdrop-blur-sm border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">General Information</h2>
              <div className="text-muted-foreground text-sm sm:text-base space-y-2">
                <p><strong>Effective Date:</strong> November 6, 2025</p>
                <p><strong>Developer:</strong> Foxcolab Technologies</p>
                <p><strong>Website:</strong> <a href="https://foxcolab.com" className="text-primary hover:underline">https://foxcolab.com</a></p>
                <p><strong>Contact Email:</strong> <a href="mailto:contact@foxcolab.com" className="text-primary hover:underline">contact@foxcolab.com</a></p>
              </div>
            </div>

            {/* --- Introduction --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Foxcolab (“we”, “our”, “us”) is a secure, end-to-end encrypted communication platform built for individuals and teams.
                Your privacy and trust are our highest priorities. This Privacy Policy outlines how Foxcolab Technologies collects,
                uses, discloses, and protects the personal data of our users (“you”, “your”) when using the Foxcolab mobile and web applications.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                By using Foxcolab, you acknowledge and agree to the terms of this Privacy Policy. If you do not agree, please discontinue
                using our app and services immediately.
              </p>
            </div>

            {/* --- Data We Collect --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">2. Data We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect only the information necessary to provide and enhance our services while maintaining the highest level of privacy.
              </p>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground">a. Account Information</h3>
                  <p>
                    When you register, we collect your <strong>phone number or email address</strong> to create and verify your account.
                    You may optionally add a display name and profile picture, which are visible to your contacts.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">b. Contacts</h3>
                  <p>
                    With your explicit consent, we access your phone’s contact list to identify which of your contacts are already on Foxcolab.
                    All contact information is processed locally and securely hashed — it is not stored on our servers in plain text.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">c. Communication Data</h3>
                  <p>
                    All one-to-one and group messages, files, photos, videos, and documents are <strong>end-to-end encrypted using the Signal Protocol</strong>.
                    We do not have access to your message content. Messages are stored on our servers only in encrypted form until they are delivered.
                    Once delivered, they are deleted immediately. Undelivered messages are automatically deleted after 30 days.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">d. Calls, Media & Screen Sharing</h3>
                  <p>
                    Audio and video calls, including screen sharing sessions, are end-to-end encrypted and not recorded.
                    Call metadata (e.g., call start time, duration) is minimally retained for performance monitoring only.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">e. Analytics & Crash Data</h3>
                  <p>
                    We collect anonymous analytics data such as app version, device model, crash logs, and performance statistics using privacy-compliant
                    tools to improve app quality and stability. No chat or media content is included in analytics reports.
                  </p>
                </div>
              </div>
            </div>

            {/* --- Permissions --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-6 text-primary">3. App Permissions and Their Purpose</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm sm:text-base rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted dark:bg-slate-800/70">
                      <th className="p-3 font-semibold text-left">Permission</th>
                      <th className="p-3 font-semibold text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border"><td className="p-3 font-semibold">Contacts</td><td className="p-3">To identify friends on Foxcolab and allow encrypted contact sharing.</td></tr>
                    <tr className="border-t border-border"><td className="p-3 font-semibold">Microphone</td><td className="p-3">For audio calls, video calls, and recording voice notes.</td></tr>
                    <tr className="border-t border-border"><td className="p-3 font-semibold">Camera</td><td className="p-3">For taking photos, sending images, and using video during calls.</td></tr>
                    <tr className="border-t border-border"><td className="p-3 font-semibold">Media/Storage</td><td className="p-3">For sharing and viewing media, documents, and files.</td></tr>
                    <tr className="border-t border-border"><td className="p-3 font-semibold">Screen Recording</td><td className="p-3">To share your screen securely during calls.</td></tr>
                    <tr className="border-t border-border"><td className="p-3 font-semibold">Notifications</td><td className="p-3">To alert users for incoming calls and new messages.</td></tr>
                    <tr className="border-t border-border"><td className="p-3 font-semibold">Location</td><td className="p-3">To share live or current location securely with friends (optional).</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* --- Encryption --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">4. End-to-End Encryption</h2>
              <p className="text-muted-foreground leading-relaxed">
                Foxcolab’s encryption is built on the industry-standard <strong>Signal Protocol</strong>, ensuring that only you and your
                intended recipients can read or listen to your messages and calls. Encryption keys are generated and stored only on your devices —
                not on our servers. This means <strong>Foxcolab Technologies cannot decrypt or access your content</strong>.
              </p>
              <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-1">
                <li>All one-to-one and group chats are end-to-end encrypted.</li>
                <li>Voice and video calls are fully encrypted with ephemeral keys.</li>
                <li>Screen sharing is encrypted and not recorded.</li>
                <li>Media is transmitted securely and deleted after delivery.</li>
              </ul>
            </div>




            {/* --- Data Retention --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">5. Data Retention & Deletion</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain data only for as long as necessary to provide you with reliable and secure communication.
              </p>
              <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-1">
                <li><strong>Messages & Media:</strong> Deleted immediately after successful delivery. Undelivered items are erased after 30 days.</li>
                <li><strong>Account Data:</strong> Retained until you delete your account or request erasure.</li>
                <li><strong>Analytics Logs:</strong> Retained briefly for crash diagnosis, then anonymized.</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Once deleted, your data cannot be recovered. Backups, if any, are encrypted and automatically purged within 7 days.
              </p>
            </div>

            {/* --- Third-Party Services --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">6. Third-Party Services We Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                Foxcolab integrates limited third-party tools solely to deliver essential functionality:
              </p>
              <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-1">
                <li><strong>Firebase ( Google LLC )</strong> – Used for push notifications and waking the app when it’s closed or backgrounded. No message content passes through Firebase.</li>
                <li><strong>Crashlytics / Analytics</strong> – Anonymous crash and performance data to improve reliability.</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                These providers are GDPR / CCPA / DPDP compliant and process data under strict confidentiality agreements.
              </p>
            </div>

            {/* --- Legal Compliance --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">7. Legal Basis for Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We process your personal data under the following lawful bases:
              </p>
              <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-1">
                <li><strong>Contractual Necessity:</strong> To provide messaging and calling services.</li>
                <li><strong>Consent:</strong> For permissions such as contacts, camera, microphone, and location sharing.</li>
                <li><strong>Legitimate Interests:</strong> For app analytics and crash recovery.</li>
                <li><strong>Legal Obligation:</strong> When required by law enforcement or regulatory authorities.</li>
              </ul>
            </div>

            {/* --- GDPR / CCPA / DPDP Rights --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">8. Your Data Protection Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your jurisdiction (EU GDPR, CCPA USA, India DPDP Act 2023), you have the following rights:
              </p>
              <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-1">
                <li>Right to Access – Request a copy of your personal data.</li>
                <li>Right to Rectification – Correct inaccurate or incomplete information.</li>
                <li>Right to Erasure – Delete your account and all associated data.</li>
                <li>Right to Restrict Processing – Limit use of your data under certain conditions.</li>
                <li>Right to Portability – Obtain your data in a machine-readable format.</li>
                <li>Right to Withdraw Consent – Revoke previously granted permissions.</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                To exercise these rights, contact us at 
                <a href="mailto:contact@foxcolab.com" className="text-primary hover:underline">
                  contact@foxcolab.com
                </a>.
              </p>
            </div>

            {/* --- International Transfers --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">9. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Foxcolab operates globally. Your encrypted data may be processed on secure servers located in multiple
                regions. Whenever data is transferred outside your country, we implement Standard Contractual Clauses and
                equivalent safeguards to ensure compliance with GDPR and other privacy laws.
              </p>
            </div>

            {/* --- Data Security --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">10. Data Security Measures</h2>
              <p className="text-muted-foreground leading-relaxed">
                We employ robust organizational and technical measures to protect your information:
              </p>
              <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-1">
                <li>End-to-end Signal Protocol encryption for all communications.</li>
                <li>Transport Layer Security (TLS) for data in transit.</li>
                <li>Regular security audits and penetration testing.</li>
                <li>Zero access to message content by Foxcolab employees.</li>
                <li>Strict access controls and data minimization principles.</li>
              </ul>
            </div>

            {/* --- Children’s Privacy --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">11. Children’s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Foxcolab is not intended for users under 13 years of age (or the digital consent age in your region).
                We do not knowingly collect personal information from children. If we discover a minor’s data has been collected,
                we will delete it immediately. Parents or guardians can contact us for assistance at 
                <a href="mailto:contact@foxcolab.com" className="text-primary hover:underline">
                  contact@foxcolab.com
                </a>.
              </p>
            </div>

            {/* --- Policy Updates --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">12. Policy Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
                Any updates will be posted on this page and notified in-app or by email when appropriate.
                The latest version will always be available at 
                <a href="https://foxcolab.com/privacy-policy" className="text-primary hover:underline">
                  https://foxcolab.com/privacy-policy
                </a>.
              </p>
            </div>

            {/* --- Contact --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-primary">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions, concerns, or requests about this Privacy Policy or your data, please reach out to us:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p><strong>Foxcolab Technologies</strong></p>
                <p><a href="https://foxcolab.com" className="text-primary hover:underline">https://foxcolab.com</a></p>
                <p><a href="mailto:contact@foxcolab.com" className="text-primary hover:underline">contact@foxcolab.com</a></p>
              </div>
            </div>

            {/* --- Summary --- */}
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-md p-8 border border-border text-center">
              <h2 className="text-xl font-semibold mb-4 text-primary">14. Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Foxcolab is built on privacy, security, and user trust. We do not sell data, read messages, or track you.  
                Every message, call, and file shared through Foxcolab is protected by industry-leading Signal Protocol encryption, ensuring your conversations stay private — always.
              </p>
            </div>











          </motion.div>
        </div>
      </div>
    </>
  )
}





// "use client"

// import Header from "@/app/components/LandingPage/Header"
// import { motion } from "framer-motion"

// export default function Page() {
//   return (
//     <>
//       <Header />

//       {/* Background gradient */}
//       <div className="relative min-h-screen bg-gradient-to-b from-background via-background/90 to-muted/40 dark:from-slate-950 dark:to-slate-900 text-foreground">
//         {/* Subtle gradient blobs */}
//         <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2" />
//         <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-r from-secondary/20 to-primary/20 blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

//         <div className="relative max-w-5xl mx-auto px-6 py-20">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
//           >
//             Privacy Policy
//           </motion.h1>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="space-y-10"
//           >
//             {/* Section Card */}
//             <div className="rounded-2xl bg-white/60 dark:bg-slate-900/70 shadow-sm p-8 backdrop-blur-sm border border-border">
//               <h2 className="text-xl font-semibold mb-4 text-primary">Effective Information</h2>
//               <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
//                 <li><strong>Effective Date:</strong> November 6, 2025</li>
//                 <li><strong>Developer:</strong> Foxcolab Technologies</li>
//                 <li><strong>Website:</strong> <a href="https://foxcolab.com" className="text-primary hover:underline">https://foxcolab.com</a></li>
//                 <li><strong>Contact Email:</strong> <a href="mailto:contact@foxcolab.com" className="text-primary hover:underline">contact@foxcolab.com</a></li>
//               </ul>
//             </div>

//             {/* Introduction */}
//             <div className="rounded-2xl bg-white/60 dark:bg-slate-900/70 shadow-sm p-8 backdrop-blur-sm border border-border">
//               <h2 className="text-xl font-semibold mb-4 text-primary">1. Introduction</h2>
//               <p className="leading-relaxed text-muted-foreground">
//                 Welcome to <strong>Foxcolab</strong>. At <strong>Foxcolab Technologies</strong>, we value your privacy and are
//                 committed to providing a secure, encrypted, and reliable communication experience.
//                 This Privacy Policy explains how we collect, use, and protect your information across our chat, call, and collaboration services.
//               </p>
//               <p className="mt-3 leading-relaxed text-muted-foreground">
//                 By using Foxcolab, you agree to this Privacy Policy. If you do not agree, please discontinue using our app.
//               </p>
//             </div>

//             {/* Data We Collect */}
//             <div className="rounded-2xl bg-white/60 dark:bg-slate-900/70 shadow-sm p-8 backdrop-blur-sm border border-border">
//               <h2 className="text-xl font-semibold mb-4 text-primary">2. Data We Collect</h2>

//               <div className="space-y-4 text-muted-foreground leading-relaxed">
//                 <div>
//                   <h3 className="font-semibold text-foreground">a. Account Information</h3>
//                   <p>We collect your phone number or email address to register and authenticate your account. You can optionally add a display name and profile picture.</p>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-foreground">b. Contacts</h3>
//                   <p>With your permission, we securely access your contact list to help find friends using Foxcolab. Contacts are processed locally and never stored in plain text.</p>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-foreground">c. Communication Data</h3>
//                   <p>
//                     All messages, media, and documents are <strong>end-to-end encrypted using the Signal Protocol</strong>.
//                     Once delivered, messages are deleted permanently from our servers. Undelivered messages are encrypted and automatically deleted after 30 days.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-foreground">d. Calls & Media</h3>
//                   <p>Audio and video calls are end-to-end encrypted. Screen sharing is also encrypted and never recorded or stored.</p>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-foreground">e. Analytics</h3>
//                   <p>We collect minimal diagnostic and crash information to enhance app performance. No chat content or private data is included.</p>
//                 </div>
//               </div>
//             </div>

//             {/* Permissions */}
//             <div className="rounded-2xl bg-white/60 dark:bg-slate-900/70 shadow-sm p-8 backdrop-blur-sm border border-border">
//               <h2 className="text-xl font-semibold mb-6 text-primary">3. Permissions and Purpose</h2>

//               <div className="overflow-x-auto">
//                 <table className="w-full border-collapse text-sm sm:text-base">
//                   <thead>
//                     <tr className="bg-muted/70 dark:bg-slate-800/50 text-left">
//                       <th className="p-3 font-semibold">Permission</th>
//                       <th className="p-3 font-semibold">Purpose</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-muted-foreground">
//                     <tr className="border-t border-border"><td className="p-3">Contacts</td><td className="p-3">Find friends and share contacts securely.</td></tr>
//                     <tr className="border-t border-border"><td className="p-3">Microphone</td><td className="p-3">Enable audio calls and voice messages.</td></tr>
//                     <tr className="border-t border-border"><td className="p-3">Camera</td><td className="p-3">Capture and send photos, video calls.</td></tr>
//                     <tr className="border-t border-border"><td className="p-3">Media/Storage</td><td className="p-3">Share or view photos, videos, and files.</td></tr>
//                     <tr className="border-t border-border"><td className="p-3">Screen Sharing</td><td className="p-3">Share your screen securely during calls.</td></tr>
//                     <tr className="border-t border-border"><td className="p-3">Notifications</td><td className="p-3">Alert you for new messages or calls.</td></tr>
//                     <tr className="border-t border-border"><td className="p-3">Location</td><td className="p-3">Share live or current location (optional).</td></tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Encryption */}
//             <div className="rounded-2xl bg-white/60 dark:bg-slate-900/70 shadow-sm p-8 backdrop-blur-sm border border-border">
//               <h2 className="text-xl font-semibold mb-4 text-primary">4. End-to-End Encryption</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 Foxcolab uses <strong>Signal Protocol</strong> for complete end-to-end encryption.
//                 This ensures only you and your recipient can access communication content.
//                 Encryption keys are stored only on your device and never transmitted unencrypted.
//               </p>
//               <ul className="list-disc list-inside mt-4 text-muted-foreground">
//                 <li>Messages and calls cannot be accessed by Foxcolab.</li>
//                 <li>All communication travels over secure TLS channels.</li>
//                 <li>We do not store or index your conversations.</li>
//               </ul>
//             </div>

//             {/* Account Deletion */}
//             <div className="rounded-2xl bg-white/60 dark:bg-slate-900/70 shadow-sm p-8 backdrop-blur-sm border border-border">
//               <h2 className="text-xl font-semibold mb-4 text-primary">5. Account Deletion & Rights</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 You can delete your account at any time from the Foxcolab app. This will permanently erase all your messages, media, and user data.
//                 You can also request a data export or removal by contacting us at{" "}
//                 <a href="mailto:contact@foxcolab.com" className="text-primary hover:underline">contact@foxcolab.com</a>.
//               </p>
//             </div>

//             {/* Security */}
//             <div className="rounded-2xl bg-white/60 dark:bg-slate-900/70 shadow-sm p-8 backdrop-blur-sm border border-border">
//               <h2 className="text-xl font-semibold mb-4 text-primary">6. Data Security</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 We take extensive steps to protect your data:
//               </p>
//               <ul className="list-disc list-inside mt-4 text-muted-foreground">
//                 <li>End-to-end encryption using Signal Protocol.</li>
//                 <li>TLS for all network communications.</li>
//                 <li>Regular security audits and data access controls.</li>
//               </ul>
//             </div>

//             {/* Legal & Contact */}
//             <div className="rounded-2xl bg-white/60 dark:bg-slate-900/70 shadow-sm p-8 backdrop-blur-sm border border-border">
//               <h2 className="text-xl font-semibold mb-4 text-primary">7. Contact & Policy Updates</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 We may update this Privacy Policy periodically. Updates will appear here and be communicated in-app.
//                 For any privacy-related concerns:
//               </p>
//               <div className="mt-4">
//                 <p><strong>Foxcolab Technologies</strong></p>
//                 <p><a href="https://foxcolab.com" className="text-primary hover:underline">https://foxcolab.com</a></p>
//                 <p><a href="mailto:contact@foxcolab.com" className="text-primary hover:underline">contact@foxcolab.com</a></p>
//               </div>
//             </div>

//             <div className="text-center pt-8 text-muted-foreground border-t border-border">
//               <p>© {new Date().getFullYear()} Foxcolab Technologies. All Rights Reserved.</p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   )
// }
