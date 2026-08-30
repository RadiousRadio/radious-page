/**
 * Single source of truth for the off-site destinations the landing page
 * links to. They appear in the nav, the hero, the beta section, the
 * pricing cards, the closer and the footer — one constant each means a
 * changed invite link is a one-line edit, not a grep.
 */

/** The web app. Every link to it should go through `appUrl()` below so
 *  the visitor's attribution survives the hop. */
export const APP = "https://app.radious.ai";

/**
 * Where "Join the waitlist" goes.
 *
 * radious-web's own page — Radious's headline, reasons, Discord link and
 * its own email form, rather than Clerk's Account Portal on
 * accounts.radious.ai. This was the switch the previous note here asked
 * for, and it is the whole point: while the product is gated this page is
 * the last thing most visitors ever see, and a generic auth card on a
 * *.accounts subdomain spends the only impression they get.
 *
 * The list itself is unchanged — the form posts to Clerk, so entries land
 * in the same dashboard invitations are sent from.
 *
 * Goes through appUrl() at every call site, same as APP, so the visitor's
 * ?src= attribution survives the hop. That now works better than it did:
 * the waitlist is on app.radious.ai, so there is one origin change on the
 * way in rather than two.
 */
export const WAITLIST_URL = `${APP}/waitlist`;

/**
 * The Discord invite.
 *
 * Must stay NON-EXPIRING (Server Settings → Invites → Edit → Expire
 * After: Never, Max Uses: No limit). A default invite dies after 7 days,
 * which is exactly long enough to look alive in a Reddit thread and be
 * dead by the time the thread ranks.
 */
export const DISCORD = "https://discord.gg/TTvtbrJNP";

/** The Facebook page. Listed in the footer and in the site's `sameAs`
 *  structured data, which is what search engines read to tie the official
 *  profiles to the organisation. */
export const FACEBOOK = "https://www.facebook.com/radiousradio";

/**
 * The one public contact address.
 *
 * There used to be a second, personal one on the theory that
 * a named human is the strongest trust signal at twenty users. The
 * trust signal is real; the personal name is not what carries it. What
 * converts is the PROMISE — that a person reads the message and
 * replies — and a role address keeps that promise while leaving the
 * founder's name a choice rather than a default on every page.
 *
 * If you later want a distinct founder inbox that still isn't your
 * name, `founder@` or `hello@` is one alias and one line here.
 */
export const SUPPORT_EMAIL = "support@radious.ai";

