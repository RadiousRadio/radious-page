import { LegalShell } from "~/components/LegalShell";

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="September 14, 2026"
      updatedIso="2026-09-14"
      slug="privacy"
      description="What data Radious collects, why, and what control you have over it. Calendar access is read-only, we never sell your personal data or use it to target advertising, and deleting your account removes it."
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
            location if you allow it, used for weather reports. If left blank, we
            approximate a location from your timezone or IP address. Precise
            location is only ever used with your permission and only for weather.
          </li>
          <li>
            <strong>Country and language:</strong> we work out an approximate
            country from the network address of each request, and use it with your
            chosen language to pick regional defaults and to decide which
            sponsored segment is appropriate for a show. This is worked out at the
            time of the request, is not kept as a location history, and is not
            combined with your feeds, interests, calendar, messages or listening
            history for any advertising purpose.
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
            technical logs &mdash; including the network (IP) address your requests
            come from &mdash; used for limits, billing, security and reliability.
          </li>
        </ul>

        <h2>2. How we use it</h2>
        <p>
          We use your data to run your station: generating show scripts, selecting
          news, reading weather and calendar items, synthesizing host voices,
          answering your messages and calls, enforcing plan limits and billing.
        </p>
        <p>
          <strong>We do not sell your personal data.</strong> We do not share it
          with advertisers, ad networks or data brokers, we do not build
          advertising profiles of you, and we do not use your feeds, interests,
          calendar, messages, call audio or listening history to decide which
          advertising anyone sees &mdash; including you. This does not change if
          we introduce sponsorship or an advertising-supported free plan; see
          section 3.
        </p>

        <h2>3. Sponsorship and promotional segments</h2>
        <p>
          Radious may include sponsored audio segments between songs, in the same
          way ordinary radio carries advertising, and may in future offer a free
          plan supported by them. Where that happens:
        </p>
        <ul>
          <li>
            <strong>The sponsor is chosen by the show, not by the listener.</strong>
            Which sponsored segment plays is determined by what the show is about
            at that moment &mdash; its topic, language and country &mdash; and by
            nothing about you personally. Two people hearing the same show hear
            the same sponsor.
          </li>
          <li>
            <strong>Nothing about you reaches a sponsor.</strong> Sponsors receive
            aggregate, non-identifying statistics only, such as how many times a
            segment played across all listeners. They receive no names, contacts,
            identifiers, feeds, interests, locations, messages or audio, and no
            list from which an individual could be recognised.
          </li>
          <li>
            <strong>No profile is built.</strong> We do not create, store or
            share advertising segments, audience categories or interest profiles
            about you.
          </li>
          <li>
            <strong>Sponsored content is always identified as such</strong> on
            air, and is kept out of news readings, answers to your messages and
            live calls. Sponsors have no influence over editorial content and
            cannot pay to be mentioned inside it.
          </li>
        </ul>
        <p>
          Because no personal data is used to select or deliver a sponsored
          segment, this involves no advertising profiling and no sharing of your
          data with third parties.
        </p>

        <h2>4. Processors we rely on</h2>
        <p>
          Parts of the Service run on trusted processors under data processing
          agreements: authentication, AI language models for script generation, voice
          synthesis and call transcription providers, music catalogs (Audius,
          Jamendo), Google Calendar (read-only, per Google&rsquo;s API Services User
          Data Policy), weather data, and cloud hosting. Each receives only what it
          needs to perform its function. Sponsors and advertisers are not on this
          list and never will be: they are not processors of your personal data,
          because they receive none of it.
        </p>

        <h2>5. Voice audio</h2>
        <p>
          Call audio is processed to produce a transcript and a host reply, then
          deleted from our systems shortly after the call ends. We do not use your
          voice to train models and we do not build voice profiles of you.
        </p>

        <h2>6. Retention and deletion</h2>
        <p>
          Preferences and history are kept while your account exists. Deleting your
          account in the app (Settings, Danger zone) removes your hosts, feeds,
          interests, saved playlists and radio history. Technical logs containing
          network addresses are kept for up to 30 days for security and
          reliability, then deleted. Billing records are retained as required by
          accounting law.
        </p>

        <h2>7. Cookies and local storage</h2>
        <p>
          We use essential cookies and local storage for sign-in sessions and
          preferences such as your accent theme. We do not use advertising or
          cross-site tracking cookies on radious.ai, and sponsored segments do
          not set identifiers, cookies or tracking pixels of any kind &mdash;
          they are audio files served from our own systems.
        </p>

        <h2>8. Your rights</h2>
        <p>
          Under the GDPR you can request access, correction, export or deletion of
          your personal data, object to processing, and withdraw consent for optional
          integrations (location, calendar) at any time in the app. You can also
          lodge a complaint with the Estonian Data Protection Inspectorate
          (Andmekaitse Inspektsioon) or your local supervisory authority.
        </p>

        <h2>9. Security</h2>
        <p>
          Data is encrypted in transit, access is restricted to what operating the
          Service requires, and integrations use scoped, revocable tokens rather than
          passwords.
        </p>

        <h2>10. Children</h2>
        <p>
          The Service is not directed at children under 16, and we do not knowingly
          collect their data.
        </p>

        <h2>11. Changes and contact</h2>
        <p>
          We will announce material changes to this policy in the app before they
          take effect. Data controller: Radious, Estonia. Contact:{" "}
          <a href="mailto:support@radious.ai">support@radious.ai</a>.
        </p>
    </LegalShell>
  );
}
