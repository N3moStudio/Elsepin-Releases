# Elsepin cloud setup and Nearby alerts

Elsepin 2.6.0 development guide · 26 October 2026 · no new release.

## What is available

| Feature | Current scope |
| --- | --- |
| Find My Devices checks | Compare your selected iPhone with Elsepin's sent locations during a spoofing session. Real account acceptance must be tested. |
| Life360 checks | Compare your selected own profile using an authorized observer account. Unofficial access can fail. |
| Nearby alerts (new, experimental) | Fixed circular places, enter/leave rules, selected Find My device or an authorized member of the connected Life360 Circle. Independent of the phone's spoof-check lease. |
| Find My People | Not connected. The research code is separate and is not included in the helper. |
| Moving “near me”, drawn polygons, dwell alerts | Not included in this first Nearby version. Phone-reported coordinates may be spoofed. |

Do not treat synthetic tests as proof of Apple/Life360 acceptance, iPhone push
receipt, continuous free hosting, or physical-device behavior.

## 1. Host your private helper

Use the matching **Elsepin-FindMy-Cloud.zip** exported from the app. Unzip it and upload its contents to your own private repository for hosting. The helper is independent of the private app source; include both CloudFindMy and Companion folders.
This test build does not create or update a hosted service automatically.
In Render create a **Web Service** with:

| Field | Value |
| --- | --- |
| Runtime | Python 3 |
| Repository | Your private repository containing the exported helper |
| Branch | `main`, or an explicitly selected fixed commit for reproducible testing |
| Root Directory | Leave blank |
| Build Command | `pip install -r CloudFindMy/requirements.txt` |
| Start Command | `python CloudFindMy/render_server.py` |
| Health Check | `/healthz` |
| Instance | Free for testing; confirm the price before creating anything |
| Environment | Generate `SHIFT_ADMIN_KEY`, at least 32 characters. Keep it private. |

Render provides `RENDER_EXTERNAL_URL`. The helper requires its exact HTTPS
`onrender.com` address. Do not enter Apple passwords or verification codes in
Render environment variables, GitHub files, URLs, logs, or screenshots.

The repository's `.python-version` pins Python. The helper requires the bundled
`Companion/reports.py` as well as `CloudFindMy`; do not set Root Directory to
`CloudFindMy` alone. No database is required to test the helper.

## 2. Connect the services

Open your helper's HTTPS address and unlock it with your helper key.

**Apple:** sign in on your own private helper, complete verification, and select
your own iPhone. This is an unofficial sign-in on your server, not Apple's
website. Accounts using unsupported security-key flows must keep that protection
enabled. This connects **Devices**, not people sharing through Find My People.

**Life360:** use an authorized observer account that already sees your profile.
Using the account signed into a phone may sign it out elsewhere. Choose the
Circle, then your own profile for Elsepin's spoof-check comparison. Nearby can
separately select another member of that same Circle who shares their location
with you and permits this use. It does not request device pings, change sharing,
invite people, or silently replace your own comparison profile.

Each service signs in independently. Restarting the helper loses these sign-ins.
Apple/Life360 may decline unofficial access; reconnect through their official apps
as needed, and do not disable account security to make the helper work.

## 3. Connect Elsepin

In Elsepin open **Settings → Find My & Life360 → Cloud helper → Advanced → Connect
your helper**. Enter the helper HTTPS address and helper key, or use **Import
setup file instead** with `ElsepinFindMyPairing.json` downloaded from the website.
The app derives a separate phone token; it does not store the admin key.

Tap **Test connection** in Advanced. This also discovers whether this helper
supports Nearby. Older helpers remain compatible and do not show a broken Nearby
link. The test confirms connectivity, not that a location matched.

Enable **Check while spoofing**, choose the services, then manually start a location
session on the Map. Wait for a fresh report and compare it with iCloud Find Devices
or the authorized Life360 account. Old reports must not appear as a current match.
The Dynamic Island switches show/hide status inside Elsepin's existing activity.
They do not turn off checks. The 3–15 second connection setting does not speed up
Apple or Life360's own location updates.

## 4. Set up Nearby notifications

Open **Nearby alerts** on the helper website, or use its link in Cloud helper
once Test connection has confirmed support.

On iPhone, use Safari's **Add to Home Screen**, open that web app, unlock your
helper, and tap **Enable notifications**. Allow the system prompt, then use
**Send test**. A successful server response is not proof you saw the notification:
verify it actually appears on the phone, including with the web app closed.
Notifications belong to **Elsepin Nearby**, the web app, not the sideloaded IPA.
Native IPA push requires compatible signing; this setup uses Apple's Web Push.

No paid Apple developer membership is required for Web Push. iOS notification
permissions, Focus, connectivity and delivery policy still apply. This is not a
critical alarm and cannot force sound or volume. Use **Turn off here** to remove
this device's subscription. At most five devices can subscribe per helper.

## 5. Add a place rule

Choose a name and an available shared location. Enter the fixed place's latitude
and longitude, radius (100–50,000 metres), enter/leave event, reminder pattern,
and monitoring duration (1, 4, 8 or 24 hours, or Until I pause). Confirm authorized sharing, then
press **Start monitoring**. Up to 20 rules and five distinct locations are allowed.
This version uses fixed coordinates; it does not follow a claimed “real me” while
Elsepin may be spoofing the phone location. It does not import library areas yet.

A first location establishes a baseline. Two distinct, fresh and sufficiently
accurate reports must confirm the other side before a crossing triggers. An
uncertain boundary, repeated report, old report or long gap does not create an
arrival. Polls run about once a minute while an active rule and authenticated
source remain available; provider latency and hosting downtime can delay them.
Opening a page or pinging `/healthz` never creates a monitoring rule.

### Reminders and stopping

- **Once:** send once when the push service accepts a delivery.
- **Every 5 / 2 / 1 minute:** repeat at that interval after the first delivery.
- **Gradually more often:** first reminder after five minutes, next after two,
  then every minute. Failed delivery backs off to at least five minutes.
- **Stop this alert:** acknowledges that crossing. The rule still watches for a
  later exit and re-entry (or entry and exit for leave rules).
- **Pause rule / Pause all alerts:** stops polling and reminders for those rules.
- **Resume rule:** starts a new duration and baseline; never replays an old alert.
- Opening the website/app or dismissing a notification does **not** acknowledge it.

Reminders refer to the original event time, not a claim the person remains there.
No new delivery is attempted when its source is unavailable. Monitoring expiry
also stops reminders. A push already accepted by Apple cannot be recalled; its
short expiry limits delayed delivery. Stopping spoofing or disconnecting the IPA
pairing does **not** pause separately enabled website rules. Use Pause all alerts.

## Reliability, storage and privacy

Rules, acknowledgements, push subscriptions and the Web Push signing key are
stored in encrypted `CloudFindMy/data/nearby.enc`, using a key derived separately
from `SHIFT_ADMIN_KEY`. Atomic replacement prevents partial writes. No provider
passwords or raw location histories are stored in that file. Rule coordinates,
target identifiers/names and event times are sensitive, even when encrypted.
No account, private URL, key or user-specific configuration is bundled in source.

Every process restart pauses restored rules. Reconnect the service and explicitly
resume them. Acknowledged events stay acknowledged while storage survives.
Changing the admin key makes old encrypted storage unreadable; preserve the key
or reset your own private state deliberately. Corrupt/unreadable storage stops
startup instead of discarding your settings silently.

Render Free has ephemeral storage. Sleep, restart or redeploy may erase saved
rules, subscriptions and keys; you would need to set them up again. A durable
host/volume is necessary for persistence guarantees. `SHIFT_DATA_DIR` can point
to a private persistent directory on a host you control. No paid resource is
created automatically, and the free setup is not promised to be reliable 24/7.

The provider libraries retain sign-in state only in memory/temporary session
files. The browser receives provider names and rule summaries after unlock;
location histories are not cached by the service worker. Push traffic goes only
to supported Apple, Google or Mozilla push services. Push bodies include the
selected person's label, place label and crossing time; consider lock-screen
preview privacy. Monitoring does not grant access beyond existing sharing.

## Optional uptime pings

A cron-job.org GET to `https://YOUR-SERVICE.onrender.com/healthz` every five minutes
may reduce inactivity sleep. Send no body, headers, passwords or tokens.
Pings do not fetch locations, sign into Apple, renew Elsepin's 150-second check
lease, create Nearby rules, or prove an alert reached your phone. They consume
free instance hours. Maintenance, restarts and quotas can still interrupt service.

## If something fails

- **Sign-in needed:** open the helper website and reconnect that service.
- **Old / unavailable location:** check the report in the provider's official app;
  repeatedly pressing Check now cannot force a fresh location.
- **No Nearby link in Elsepin:** update the helper, then use Test connection.
- **No browser notifications:** open the Home Screen web app, enable notifications,
  reconnect the subscription and send one test. Check Focus and system permissions.
- **Rules disappeared after sleep/redeploy:** free ephemeral storage was lost;
  reconnect and recreate them. Durable hosting is needed to avoid this.
- **No arrival on first sample:** this is intentional. A confirmed crossing after
  the initial baseline is required.
- **Apple Find My People:** still unavailable; Devices sharing does not substitute
  for the unfinished People connector.

## Sources

- [Render Free limits](https://render.com/docs/free)
- [Render web services](https://render.com/docs/web-services)
- [Apple Web Push for Home Screen apps](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/)
- [Apple native push entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/aps-environment)
- [Web Push Python library](https://github.com/web-push-libs/pywebpush)

## Before shipping

Test real provider sign-in and authorized location feeds, actual iPhone Web Push
in foreground/background/Focus, loss of sharing, stale reports, crossing jitter,
stop during a pending send, expiry, server restarts and a native SwiftUI build.
This guide is published with the test branch. Consult the Change Ledger for
exact build evidence; real provider and iPhone notification acceptance remains a device test.
