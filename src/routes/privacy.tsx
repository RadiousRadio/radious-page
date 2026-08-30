import { LegalShell } from "~/components/LegalShell";

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="July 12, 2026"
      updatedIso="2026-07-12"
      slug="privacy"
      description="What data Radious collects, why, and what control you have over it. Calendar access is read-only, we do not sell your data, and deleting your account removes it."
    >
        <p>
          This policy explains what data Radious collects, why, and what control you
          have over it. It applies to radious.ai and the app at app.radious.ai. We
          follow the EU General Data Protection Regulation (GDPR).
        </p>

        <h2>1. Data we collect</h2>
        <ul>
          <li>
            <strong>Account data:</strong> your name (what the hosts call you), email
            address and authentication details, managed through our sign-in provider.
          </li>
          <li>
            <strong>Station preferences:</strong> hosts you create, voices and show
            style, language, news feeds and keyword filters, interests, radio vibe
            and music source settings.
          </li>
          <li>
            <strong>Location (optional):</strong> a city you type, or precise browser
            location if you allow it, used only for weather reports. If left blank,
            we approximate a location from your timezone or IP address.
          </li>
          <li>
            <strong>Calendar (optional):</strong> read-only access to your Google
            Calendar so hosts can mention upcoming events. We never modify events.
          </li>
          <li>
            <strong>On-air messages and calls:</strong> texts you send to the hosts,
            and, during a studio call, your voice audio, which is transcribed so the
            host can answer you.
          </li>
          <li>
            <strong>Usage data:</strong> shows generated, listening activity and
            technical logs used for limits, billing and reliability.
          </li>
        </ul>

        <h2>2. How we use it</h2>
        <p>
          We use your data solely to run your station: generating show scripts,
          selecting news, reading weather and calendar items, synthesizing host
          voices, answering your messages and calls, enforcing plan limits and
          billing. We do not sell your personal data and we do not use it for
          third-party advertising.
        </p>

        <h2>3. Processors we rely on</h2>
        <p>
          Parts of the Service run on trusted processors under data processing
          agreements: authentication, AI language models for script generation, voice
          synthesis and call transcription providers, music catalogs (Audius,
          Jamendo), Google Calendar (read-only, per Google&rsquo;s API Services User
          Data Policy), weather data, and cloud hosting. Each receives only what it
          needs to perform its function.
        </p>

        <h2>4. Voice audio</h2>
        <p>
          Call audio is processed to produce a transcript and a host reply, then
          deleted from our systems shortly after the call ends. We do not use your
          voice to train models and we do not build voice profiles of you.
        </p>

        <h2>5. Retention and deletion</h2>
        <p>
          Preferences and history are kept while your account exists. Deleting your
          account in the app (Settings, Danger zone) removes your hosts, feeds,
          interests, saved playlists and radio history. Billing records are retained
          as required by accounting law.
        </p>

        <h2>6. Cookies and local storage</h2>
        <p>
          We use essential cookies and local storage for sign-in sessions and
          preferences such as your accent theme. We do not use advertising or
          cross-site tracking cookies on radious.ai.
        </p>

        <h2>7. Your rights</h2>
        <p>
          Under the GDPR you can request access, correction, export or deletion of
          your personal data, object to processing, and withdraw consent for optional
          integrations (location, calendar) at any time in the app. You can also
          lodge a complaint with the Estonian Data Protection Inspectorate
          (Andmekaitse Inspektsioon) or your local supervisory authority.
        </p>

        <h2>8. Security</h2>
        <p>
          Data is encrypted in transit, access is restricted to what operating the
          Service requires, and integrations use scoped, revocable tokens rather than
          passwords.
        </p>

        <h2>9. Children</h2>
        <p>
          The Service is not directed at children under 16, and we do not knowingly
          collect their data.
        </p>

        <h2>10. Changes and contact</h2>
        <p>
          We will announce material changes to this policy in the app before they
          take effect. Data controller: Radious, Estonia. Contact:{" "}
          <a href="mailto:support@radious.ai">support@radious.ai</a>.
        </p>
    </LegalShell>
  );
}
