# Elsepin changelog

Updated through **27 October 2026** (America/Los_Angeles). Elsepin 2.6.0 (59)
is the official release. Earlier Shift entries retain their original names and release status.

[App introduction](README.md) · [Build history](docs/BUILD-HISTORY.md) · [Build results](docs/BUILD-HISTORY.md)

## 2.6.0 (59) — official — 27 October 2026

- Publish the exact IPA from successful Mac run `40460137350`, source `304756f035172d6e8e3406a451ee57c25cd07951`, after package inspection and matching the GitHub artifact digest. SHA-256: `c8cb9197d1b856bcd90a9de7d29311f82411eddd7b825a5d32a2080747156d22`. Earlier no-IPA statements below describe their original development checkpoints.

- Rebrand the regular app, setup/pairing prompts, notifications, Live Activities, helper downloads and backup filenames to Elsepin. Use Prism Jumpgate as the primary icon; retain all thirteen icon options and nine themes.
- Give Ion its dark olive canvas, solid panels and citron actions. Apply theme defaults for color mode, surfaces, font design and relative text size, with independent persistent overrides and a reset-to-theme control. Keep accessibility text sizes and Reduce Transparency respected.
- Replace translucent app-owned navigation/control surfaces when Solid is selected; keep one map and session alive during appearance changes. System-owned menus retain system behavior.
- Refresh Settings with an appearance card and clearer groups. Add Software updates and a manual stable-release check with progress, empty/error feedback, cancellation guards and server-requested cooldowns. Automatic checks remain foreground-only and once daily.
- Back up/review/import the new appearance settings individually, preserving older library files. Preserve existing bundle IDs, defaults, keychain services and widget links to protect upgrades.
- Add a responsive static website with nine interactive theme previews, thirteen icon choices, setup/privacy pages and no tracking or keep-alive requirement. Build assets from an explicit allowlist and reject stale unexpected output.
- Establish private Elsepin development and a public Elsepin-Releases download/help endpoint. Preserve inherited notices and accurately scope restrictions to identified new original files. Catalog dependencies and compatibility traps in the Product Atlas.
- Branding follow-up: remove the old product name from the incomplete-backup message and exported diagnostic-log description. Keep old backup formats, storage keys and notification IDs compatible. The public update endpoint returns no official release until one is published. Follow-up validation: 32 backup-import and diagnostic-log tests passed on WSL; no native rebuild or IPA. The first test invocation had a shell-quoting error; rerunning the existing compiled tests with direct argument passing passed.
- Validation: private Mac run 40442493014 (private CI record) passed 533 automated tests (404 shared Swift, 14 packaging/icon, 19 Windows-helper, 96 cloud-helper) and native app/extension compilation at b5f5b24. Website phone-frame checks at 320/375/430/768 pixels showed no horizontal overflow; all preview images loaded. The static website is live at https://elsepin.onrender.com. Device appearance, provider, battery and accessibility acceptance remain pending. No new IPA or GitHub release.


### Documentation, workflow and build-record follow-up — 26 October 2026

- Refine the public README to a visual route banner, short feature list and prominent website/release links. Remove the development notice and long explanations; preserve the full changelog, build records and guides. No release is created by this presentation change.

- Refresh the public README with the app introduction, Prism Jumpgate artwork, feature groups, all nine themes/thirteen icons, setup, honest release status, optional-provider limits and support links.
- Preserve the entire earlier changelog and publish a synchronized public copy plus a build register. Record the two failed Elsepin attempts and their fixes, rather than reporting only the successful run.
- Run `40441280998` (`a863660`) failed during appearance initialization; `ea91bd2` fixes initialization ordering. Run `40441622492` then failed the icon-resource check because XcodeGen uses grouped paths; `b5f5b24` fixes that validation. Run `40442493014` passed 533 tests and native app/extension compilation. No IPA was packaged by any of these three runs.
- Simplify the manual workflow to **Build Elsepin IPA**: remove the packaging checkbox and validation-only artifact; keep automatic tests, identity/resource checks and one downloadable IPA for future runs. Update the maintainer build guide.
- Retain private application development and public downloads/help. This documentation/workflow update creates no IPA, tag or release and does not change app behavior. Previous successful native validation applies to its recorded source, not to an unrun future workflow.


## 2.5.8 (58) — official — 26 October 2026

- Publish the exact release-candidate IPA after the maintainer's successful iPhone test and explicit approval; no application code or binary changes during promotion.
- Include all six additional themes, four icons, map/control-tray/joystick improvements, cloud helper UI and experimental Nearby alerts, scoped resets and Recently Deleted bulk selection. Preserve the full library, routes/driving, import/export, existing themes/icons and manual widget confirmation.
- Update the README, release/build guidance and Shift Change Ledger. Publish `v2.5.8` as official Latest with comprehensive notes and the verified IPA; merge the tested source into main.
- Validation: 526 automated tests, native app/extension build and package inspection passed. The released IPA is 2.5.8 (58), stable channel, SHA-256 `62e73269cccfcaf0da9bfa855768038f75145ae9b060ff9860ee58a916e62a08`. Find My People remains unsupported; provider/battery/accessibility coverage is not inferred from the maintainer's general acceptance.

## 2.5.8 (58) — release candidate — 26 October 2026

- Package the full 2.5.8 development work and the additional themes/icons for the requested iPhone test. Build both targets as 58 with stable update-channel metadata so the exact tested artifact can become official after acceptance.
- Include all six additional light/dark themes, four optional icons, the compact cloud/Nearby setup and website, opt-in place alerts, interruption-safe tray/joystick behavior, reset options and Recently Deleted bulk selection described below.
- Draft the complete release notes while native CI runs. Keep the public release unpublished until the maintainer reports successful device testing; no helper deployment is part of this build.
- Validation: Mac run 40414605689 (historical record) passed all 526 tests, native app/extension compilation and IPA packaging in 4m 9s. The downloaded build-58 IPA passed independent integrity/identity/resource checks and matches the Actions checksum. Exact evidence is in the Shift Change Ledger. Find My People remains unavailable; real provider and physical-device acceptance are pending.

## Unreleased — additional themes and icons — 26 October 2026

- Add Ion, Ember, Abyss, Bloom, Blueprint and Titanium to Settings → Appearance, each with light and dark palettes. Keep Glacier, Afterhours, Porcelain, the existing selection and independent icon preferences.
- Add Ion Jumpgate, Titanium Jumpgate, Prism Jumpgate and Ember Switchpath under Choose App Icon → New Icons. Keep all nine original choices and the primary icon; there are now nine themes and thirteen icon choices.
- Carry the new colors and monochrome marks through shared app/widget/Live Activity presentation. Preserve the icon-change lifecycle guard and disable repeated choices while iOS handles a change.
- Add opaque, color-profiled icon exports, Settings thumbnails, approved source/provenance records and matching Xcode/XcodeGen registrations. The four additions use iOS automatic dark/tinted treatment; existing icons retain their supplied variants. Update appearance search terms and compatibility/package checks.
- Validation: 397 Swift logic tests and 14 packaging tests pass locally; palette contrast and all four static icon preflights pass. Native iOS build, Home Screen treatment, icon-switching and device accessibility checks remain pending. No rename, version bump, push, IPA, release or deployment.

## Unreleased — consolidate development on main — 26 October 2026

- Bring the full 2.5.8 development source into `main`: compact cloud/Nearby setup and helper website, opt-in place alerts, map press feedback, interruption-safe tray/joystick controls, reset options and Recently Deleted bulk selection.
- Keep the app as the full Shift edition with its existing names, identity, routes, driving, saved library, import/export and widgets. No branding changes or plan restrictions are part of this merge.
- Point current app/website setup links and hosting instructions to `main`, and regenerate the matching source-only helper archive so deleting the old branches does not break the guide.
- Preserve unfinished Find My People protocol research and unrelated prototypes in verified local recovery snapshots; they are not included in the app or public merge.
- Validation: Mac run 40398031406 (historical record) passed all 524 tests and native app/extension compilation on source `6e0244a`; packaging and upload were disabled. Device/provider and battery acceptance remain separate.
- Retire the old development/test branches after verification. Keep version 2.5.8 (57) and the prerelease channel in source; no release, tag, IPA distribution or hosted deployment is created. Published v2.5.7 remains unchanged.

## 2.5.8 (57) — requested test build — 25 October 2026

- Prepare the approved `codex/shift-2.5.8-test` branch and an Actions IPA; no main update, tag, GitHub release or hosted deployment. Both targets use build 57 and the app uses the prerelease channel.
- Add compact cloud settings with connection testing, capability-aware Nearby access and the full setup guide under Advanced. Refresh the helper website with simpler connection cards, a separate place editor, responsive layouts, dark mode and Reduce Motion.
- Add experimental fixed-place enter/leave rules for selected Find My Devices or authorized Life360 Circle members, optional repeated/escalating reminders, explicit Stop this alert, pause/resume, duration limits, encrypted state and opt-in Home Screen Web Push. Find My People remains unavailable. Free hosting can sleep or lose state; real provider/push acceptance remains unverified.
- Include map-button press feedback, interruption-safe tray dragging and joystick release/cancellation, plus the previously validated reset scopes and Recently Deleted bulk selection. Widgets still only prepare a pin and always require manual Start/Teleport.
- Package the matching source-only cloud helper and guide. Mac run 40259930059 passed all 524 tests, compiled the app and extension with Xcode 27.1, and produced the test IPA in 5m 42s. Independently verify build 57, the prerelease channel, icons, helper contents and the downloaded checksum against GitHub. Save the IPA, helper and setup/test checklist to Downloads; exact evidence and remaining device/provider checks are in the Change Ledger.


Dates below use America/Los_Angeles. The [Elsepin Change Ledger](docs/BUILD-HISTORY.md)
maps each build to its changes, source owners, validation and distribution status.

## Unreleased — lightweight cloud setup and Nearby alerts — 25 October 2026

- Simplify cloud settings to checks, notifications and Advanced; move long setup/troubleshooting explanations to the new GitHub guide. Discover Nearby support before exposing its website link, preserving older helper compatibility.
- Refresh the private helper website with compact connection cards, a separate place editor, contextual notification controls, dark mode, scalable text, immediate press feedback and Reduce Motion support. No frontend framework, animation loop or automatic location permission prompt.
- Add opt-in independent place monitoring for the selected Find My device and authorized members of the connected Life360 Circle. Support circular fixed places, enter/leave events, bounded or until-paused sessions, fresh-report validation, uncertainty margins, two-report crossing confirmation and cancellation guards. Find My People remains unavailable; no research connector is shipped.
- Add once, 5/2/1-minute and escalating Web Push reminders, explicit Stop this alert, Pause rule/all, and separate acknowledgement from opening/dismissing a notification. Add private encrypted rules/subscriptions and restart-paused recovery. Free Render storage/uptime remain limited.
- Add 34 tests (96 cloud tests total). Record Windows/Linux, browser, packaging and source-validation evidence in the Shift Change Ledger. Real provider acceptance, iPhone push receipt and native SwiftUI compilation remain pending. No version bump, deployment, commit, push, release or IPA.

## Unreleased — tray and joystick interruption fixes — 25 October 2026

- Reset a canceled tray drag to its existing open/compact position. Ignore old touch updates after backgrounding, covering the map, or changing layout until that gesture ends. Lock swipe direction at the handle and choose the release position from projected travel, including a last-moment reversal.
- Make the existing 44-point tray handle a button in both positions: tap or use accessibility activation to expand/collapse. Preserve the map viewport and current tray animation timing.
- Stop joystick movement immediately on release or cancellation, before its thumb returns. Disable input when hidden, covered, resized, or inactive; require a fresh touch after an interruption. Prevent an old accessibility nudge or the hidden expanded joystick from stopping newer input. Keep short accessible directional moves and manual Start/Teleport confirmation.
- Follow the finger without inherited animations; return the joystick thumb with no bounce. Reduce Motion snaps the return, and live preference changes safely end held input. Add no polling, display link, background work, or dependencies.
- Validate 395 Swift reliability tests (16 new), Swift syntax parsing, 14 packaging/appearance tests, app identities and icon resources locally. Native iOS compilation, touch event ordering, accessibility and motion feel remain unverified. Update the Shift Change Ledger, source map and motion audit. No version bump, IPA, commit, push or release.

## Unreleased — map button motion pilot — 25 October 2026

- Apply the supplied fluid-motion guide to a focused map-control pilot: immediate touch-down feedback and a short critically damped release on Pause/Resume, interrupted-trip recovery, Teleport/Start, Stop, Start route and Review route. Scope animation to opacity/scale so action execution and label changes do not wait for it.
- Add an opt-in to the existing button style; other screens retain their previous behavior. Keep native Button tracking/cancellation, existing layouts and manual Start/Teleport confirmation. Reduce Motion omits the scale/spring; disabled feedback is immediate. Add no timer, custom gesture, dependency or background work.
- Catalog tray cancellation/reversal, joystick interruptions, native stop sheets, route previews and icon lifecycle in `docs/MOTION-AUDIT.md`, with a before/after recording plan and rollback. Pass 14 existing packaging/appearance tests plus identity/icon-source checks. SwiftUI compilation, real-device feel, live accessibility and frame/battery measurements are NOT RUN on this Windows host. No build/version bump, IPA, remote CI, commit, push or release.

## Unreleased — reset controls and bulk deletion — 25 October 2026

- Add Restore default settings under Settings → Advanced & experimental, keeping saved routes, places, areas, history, pairing and setup.
- Add two reviewed Wipe everything choices: remove local settings/data while keeping device pairing/setup, or also remove the local pairing file and restart setup. Explain what each removes, what stays, and the limits of resetting iOS trust, permissions, external exports and helper-server accounts.
- Require a completely stopped session, no unfinished pairing/check work, and device authentication when app lock is enabled. Block interaction/imports during reset, drain pending recovery/log writes, stop on the first failure, report completed/failed steps, and remove pairing/setup last.
- Add Select, Select All and Deselect All to Recently Deleted across saved places, routes and areas. Confirm the selected count and type before one atomic permanent-deletion save. Reject changed/expired selections, preserve unselected/new records, and keep all selected items on write failure.
- Keep mandatory manual Start/Teleport confirmation for widgets. This batch is development work; the official 2.5.7 release and its IPA are unchanged.
- Validation-only Mac run 40222489196 passed 474 tests and compiled the app/widget extension with Xcode 27.1. IPA packaging/upload was skipped. Reset/authentication/icon behavior still needs physical-iPhone acceptance; exact source and checks are recorded in the Change Ledger.

## 2.5.7 (56) — official release — 25 October 2026

- Add configurable Location shortcut widgets: choose a different saved place or route start for each small/medium widget. Tapping only prepares a preview pin, including while another spoofing session is active. Users must manually tap Teleport/Start in Shift; widget links cannot start, stop or move a session. Keep existing Favorite/Saved shortcuts compatible and remove their unnecessary timed refreshes.
- Show existing named areas as gray outlines and labels while drawing/editing. Reject new or reshaped overlapping interiors with the conflicting area's name; shared edges/corners and multiple separate areas with the same name are allowed. Enforce the same rule for imports/restores while preserving readable legacy geometry and harmless renames.
- Rename the review heading to Settings & Library Import Overview (or the matching single-content heading). Count new library items and changed settings compared with current device data, independent of checkboxes. Put changed settings before identical values.
- Simplify Import & export: Everything is the export default, followed by Settings and Saved routes & areas (including saved places). Remove the long input explanation, LiveContainer-specific settings help and redundant Other files footer. Add a small json.site link beside Paste instructions.
- Allow file/Paste analysis and review during a session, and allow library-only imports while spoofing. Applying selected changed settings still requires a stopped session because those settings can alter movement and session controls.
- First official distribution of builds 54–55's backup recovery work: file-data picker, native Paste, 32 MiB validation, cancel/late-result protection, per-item review, all 25 portable settings with current/imported values, separate/combined exports, duplicate prevention and selected-subset capacity checks. Include the separate JSON fixtures, combined test file and exact-value checklist.
- Add regressions for overview ordering/counts, session gates, area containment/crossings/boundary contact/date-line geometry, configurable widget selection, deleted targets and the manual-start rule. Mac run 40215371297 passed 455 tests and compiled both targets with Xcode 27.1 in 5m 14s. Downloaded IPA integrity, stable 2.5.7 (56) metadata and the matching Actions checksum were verified; exact source and package evidence are in the Change Ledger. Physical-iPhone acceptance remains a device check.

## 2.5.6 (55) — test build — 25 October 2026

- Rename the backup destination to Import & export. One file/Paste entry point detects settings-only, library-only and combined backups, then opens a dedicated review screen before saving anything.
- Review all 25 supported settings individually with current/imported values; settings start unchecked and identical values are labeled Already the same. Each selected setting merges into current preferences, preserving every unchecked field and internal MPH speed storage.
- Select routes, saved places and named areas independently, including individual items and select-all/none controls. Existing identities keep local edits and cannot be imported twice. Capacity applies only to the selected subset; confirmation is rejected if the current library/settings changed since its preview.
- Export Settings only, Routes/places/areas, or Everything. Keep the existing Shift/Locus v1/v2 formats, file/Paste reader protections and LiveContainer Fix File Picker guidance.
- Add separate settings and routes/areas sample JSONs, a detailed expected-values checklist and selection/legacy/capacity regressions. The library sample includes two drawn routes, two saved places, two named areas and 15/90/30/7200-second stops.
- Requested test build 55 uses the prerelease channel and an Actions artifact. Official v2.5.4/main remain unchanged; no new GitHub release is published. Run 40211268590 passed 442 tests, native app/extension compilation and IPA inspection (3m 31s). The downloaded checksum matches the GitHub artifact; the Change Ledger records source and package evidence. Signed iPhone/LiveContainer acceptance remains pending.

## 2.5.5 (54) — test build — 25 October 2026

- Requested device-test IPA for the backup import changes developed on 24 October. Set both targets to 2.5.5 (54) and the app channel to prerelease; distribute as an Actions artifact, with official v2.5.4 unchanged. Add a small sample JSON with two test places, one drawn route and 15/90-second stops; full settings are included after the maintainer requested a detailed import check.
- Add a native Paste action in Files & backups for complete backup JSON, avoiding the hosted file picker. Both text and file input use the existing validated Shift/Locus backup format and require the same preview/category selection/confirmation before merging. Existing routes, geometry, waits and local edits are preserved; settings remain opt-in.
- Replace JSON-only SwiftUI file selection with an import-as-copy UIKit picker accepting file data. Keep presentation on the persistent screen, ignore obsolete/duplicate callbacks, and never turn controller teardown into cancellation. Explain early picker dismissal.
- Coordinate file-provider reads, hold temporary access through the read, enforce the 32 MiB cap during reading and before text copying, and check/decode on a worker. Reject folders, links, unrelated/truncated JSON and invalid backup contents. Cancel/failure leaves an existing valid preview intact; canceled late results cannot replace it.
- Add visible LiveContainer guidance: long-press Shift → Settings → Fix File Picker, then relaunch. If that does not help, use Paste backup text. Add backup recovery instructions and regression coverage.
- Add a validation-only workflow mode (default): run tests and compile the native app/extension without packaging or uploading an IPA. Explicitly enable packaging for a requested build. The initial validation run created no IPA. Packaging is now explicitly requested for build 54; no GitHub release is published.

- Earlier source validation: Mac run 40167635354 passed 430 tests and compiled the app/extension with Xcode 27.1 (4m 56s total). IPA packaging/upload were skipped; no artifact or release was created. Exact tested commit, existing warnings and remaining iPhone/LiveContainer checks are recorded in the Shift Change Ledger.

- Build 54 passed 431 Mac tests, app/extension compilation and IPA inspection in run 40208929771 (2m 36s). Both targets are 2.5.5 (54) with prerelease channel. The revised full-settings sample passed all 11 backup-reader tests locally after the build; only sample/test/docs changed. See the Change Ledger for tested source, matching artifact checksum and remaining device checks.

## 2.5.4 (53) — official — 24 October 2026

- Promote the tested 2.5.4 feature set to official release `v2.5.4`. This includes the 2.5.x route preview and controls, 0–24-hour waits, mph/km/h, independent install identity, cloud Life360/Find My status, and daily official-update notice described below.
- Set the app's embedded update channel to `stable` and increment both app and extension to build 53. Beta build 52 can discover this official version; stable installs do not offer themselves again. No feature logic changed from build 52.
- Update the public README, source map and release instructions for official distribution. Small fixes will be collected on the development branch; prerelease IPA builds/publication are no longer automatic for each fix.
- Official validation: run 40153593002 passed all 420 tests and built the app/extension with Xcode 27.1 in 2m 51s (job 2m 47s). The downloaded IPA passed ZIP/digest checks; both targets are 2.5.4 (53), and the app embeds the stable channel. Exact source, checksum and distribution evidence are in the Shift Change Ledger. Device/provider acceptance limits still apply.

## 2.5.4 (52) — prerelease — 24 October 2026

- Check the repository's latest official GitHub release when Shift becomes active or Settings opens, at most once every rolling 24 hours. Persist the attempt before networking, including offline/failure/cancellation, so reopening never creates a retry loop. No timer, background task, push subscription or automatic IPA download is added.
- Show a small native card at the top of Settings only for a newer official version. More info opens that exact release on GitHub; X remembers dismissal for that tag across launches. A later official version can show a new notice. Release details remain under About Shift → Software updates.
- Exclude drafts, prereleases, unpublished releases and nonnumeric/prerelease tags; compare version components numerically and reject links outside this repository's exact release page. Explicit build-channel metadata also permits a beta to discover the same version's later official release.
- Use an anonymous HTTPS request with a short timeout, conditional ETag responses, one request in flight, no cookies or credentials, and persisted rate-limit delays. Keep errors quiet and never report "up to date" on failure. Cached notices expire after seven days without a successful check.
- Add regression tests for daily/relaunch limits, concurrency, cancellation, conditional responses, offline/rate-limit failures, dismissal, stable/beta version rules, unsafe links, removed releases, malformed data, stale cache and Settings search.
- Update source ownership, release instructions and the Shift Change Ledger. Validation: 420 tests passed (325 Swift, 14 packaging/icon, 19 Windows, 62 cloud); Xcode 27.1 built the app and extension and packaged the IPA. Run 40152801782 completed in 2m 51s (build job 2m 45s). Download integrity, app/extension 2.5.4 build 52 and prerelease channel verified. Prerelease `v2.5.4-beta.1`; physical-iPhone layout, VoiceOver and energy measurement remain pending.

## 2.5.3 (51) — prerelease — 23 October 2026

- Add optional Life360 support to the Render helper: protected observer sign-in, Circle/profile selection, read-only requests and disconnect. Apple and Life360 have independent sign-in, polling, errors and freshness. Either can be used alone.
- Extend the existing Shift Live Activity with separate Find My iPhone and Life360 status/age rows and compact icons. One activity, no duplicate checker. Expanded Island uses one compact status/age row per service and shows the command timer once. Each visibility switch hides only its status, without stopping checks. Display choices persist and are included in library settings backups.
- Add per-service cloud checking switches (Life360 defaults off). Older pairings/helpers remain compatible; outdated helpers explain the Life360 upgrade. Windows Life360 reports can also appear in the same activity.
- Distinguish offline, server wake/timeout, bad address, certificate failure, wrong key, replaced session, rate limit, invalid clock/request and unsupported responses. Connection tests show each provider's readiness without fetching locations.
- Add a shareable /healthz URL and free cron-job.org guidance. Health pings never poll providers, extend the phone lease or prove a match. No paid hosting or push service was added.
- Add twelve cloud and six Swift regression tests covering isolation, protected setup, actual report age, stop/lease handling, backward compatibility, local evidence and activity payload size. Refresh the bundled source-only helper.
- Update the Change Ledger, source map, setup and device checklist. Battery proposals remain separate and await user approval; none are implemented here.
- Validation: both build-51 attempts passed 402 tests (307 Swift, 14 packaging/icon, 19 Windows, 62 cloud). Final Mac run 40066390461 built the app and extension and packaged the IPA in 2m 33s. Exact commits, checksums and layout follow-up are in the Change Ledger. Prerelease `v2.5.3-beta.1`; real provider sign-in and physical-iPhone acceptance remain pending.

## 2.5.2 (50) — prerelease — 23 October 2026

- Replace raw stop-seconds entry with labeled Hours / Minutes / Seconds wheels. Every whole second from no wait to 24 hours is selectable; 24 hours resets the smaller units to zero. Large accessibility text uses labeled menus.
- Offer No wait, 15 sec, 1 min, 5 min, 1 hr and 24 hr shortcuts. Keep Cancel/Done and explicit Apply to all stops. The shared editor appears in the timeline, Edit place and Add stop screens.
- Remove the old one-hour cap from route planning, path stops, live stop insertion, saved-trip validation and backup imports. Existing durations keep their meaning; older builds may reject backups with waits over one hour.
- Display hours/minutes/seconds in route wait totals, rehearsal countdowns and active-stop countdowns. Totals can exceed 24 hours across multiple stops.
- Add regression coverage for all 86,401 selectable durations, component edits, 24-hour countdown/recovery, preview waits, save/backup round trips and invalid inputs. Pauses and suspension still do not silently consume a wait.
- Add a maintained Change Ledger, app source map, verification/setup recommendations and device checklist. Document that Find My Devices reaches Dynamic Island; Life360 currently stays in the in-app Windows-helper reports. No new monitoring service or verification guarantee is introduced.
- Validated by Mac run 40052908812: 384 tests passed, app and Live Activity extension built, and packaged IPA checks passed. Prerelease tag: `v2.5.2-beta.1`. The new controls and a full-day session still need physical-iPhone acceptance testing.

## 2.5.1 (49) — test build — 23 October 2026

- Keep active route controls compact: target speed, distance, progress, Pause/Resume and Stop spoofing. Route details, movement tools and End route remain in the menu; connection warnings and stop countdowns stay visible.
- Show starts, stops and destinations in a numbered route timeline. Open wait editing only when needed and keep optional movement settings collapsed.
- Add 0/5/15/30/60-second stop presets and an explicit Apply to all stops action. Cancel leaves the draft unchanged.
- Scrub the isolated route preview or jump directly to a stop; seeking pauses the preview and restores waits when moving backwards.
- Defer icon preference updates until iOS returns the app to the active state, keep selection feedback local, and preserve the selected tab across scene restoration. Physical-device confirmation of the reported flicker is still required.
- Build 49 was built twice successfully: the 09:21 PDT attempt, then the delivered 09:24 PDT attempt after correcting preview accessibility text, route-reordering help and saved-path section guidance. Both runs and their exact commits are recorded in the Change Ledger.

## 2.5.0 (48) — test build — 22 October 2026

- Enter route-stop waits in seconds (0–3,600), including stops under a minute.
- Choose mph or km/h throughout planning, movement controls, saved trips and history. Conversion uses exact factors; stored trip speeds keep full precision and remain backward compatible.
- Give Shift an independent app/extension bundle ID and app group, and stop claiming Locus's URL scheme. See [migration notes](SETUP.md) before installing.
- Open session details from notification taps, suppress duplicate foreground connection banners, and offer connection details from session alerts.
- Validate pairing candidates with the engine decoder before replacing the installed file.
- Default detailed logging to off on fresh installs and scale the About title with Dynamic Type.
- Add Find a place and Create a route actions to empty Library categories.


The recorded evolution from the original Locus snapshot to **Shift 2.4.4 (47)**.
This history was reconstructed from saved source archives and update notes,
including changes made between Git pushes. These are this fork’s milestones,
not upstream Locus release numbers. Some builds were internal or diagnostic;
not every version was publicly released. Dates are omitted where no reliable
release record exists. Related edits made under the same version are grouped.

Historical entries describe what changed **then**. They do not mean removed
features—such as tutorials, app-specific Battery Saver or the notification
preview—are present now. Current features are in the [README](README.md).

## What changed from the starting app

| Area | Shift’s cumulative additions and revisions |
| --- | --- |
| Identity & interface | Shift / N3mo Studio branding; Map, Library and Settings; Glacier, Afterhours and Porcelain; nine independent icons |
| Movement | Preview-first teleport, refined joystick, directions and route alternatives, drawing/editing, stops, waits, per-section speeds and route jumps |
| Library | Named places/areas, folders/search, saved trips, duplication, three-version edit history, Recently Deleted and export/import |
| Status | Timestamped command evidence, unverified/stale states, Live Activities, Dynamic Island, widgets and recovery |
| Optional checks | Self-hosted cloud/Windows helpers, Find My Devices comparisons, readiness tests and configurable Shift connection checks |
| Privacy & efficiency | Device-authentication lock, display privacy, reviewed local exports, bounded logs, quieter timers and comparable reliability runs |

## 2.4.4 · build 47 — Public build follow-up · 15 October 2026

- Fixed the final IPA appearance check to accept Xcode asset-catalog icon declarations while still checking the expected icon names. Portable system-size PNG validation remains in place.
- Corrected the default app icon's dark/tinted filename capitalization and added exact-name source checks so Windows cannot hide a mismatch from the build runner.
- Added 12 packaging regression tests to GitHub Actions. The local regression suite passed; earlier build logs recorded 279 Swift model tests and 69 helper tests passing.
- Confirmed a successful GitHub Actions build after the validation fix. The maintainer reported that the IPA installs and works on their iPhone; this is a device smoke check, not verification of every feature or supported configuration.
- Configured direct IPA artifact downloads and automatic filenames from the built app version, currently `Shift 2.4.4.ipa`, without an outer artifact ZIP.

## Public repository preparation · 14 October 2026

- Refreshed the README and brand presentation; consolidated private hand-off notes into this history and current guides.
- Added current release copy, upload instructions, contribution/issue templates and explicit MIT attribution for Shift alongside upstream notices.
- Retained the verified 2.4.4 runtime source. Removed personal compiler paths from the public IPA copy, preserving executable/data sections and entitlements, and recomputed its ad-hoc signature hashes. Packaging is not a new feature build or on-device validation.

## 2.4.4 · build 47 — Native notifications

- Removed the test-banner settings section, preview scheduler and preview messages introduced in 2.4.3.
- Retained native alternate-icon selection and existing pairing, reminder and connection notifications. No extra timer, polling or background activity was added.
- Preserved the 2.4.1 launch fix, native tab navigation, all icon choices, helper protocols and app identities. An iOS-cached notification icon is not claimed to be fixed.

## 2.4.3 · build 46 — Temporary notification preview — superseded

- Added a one-shot Send Test Banner action to App Icon settings, with permission/error handling and a five-second trigger.
- Used an ordinary system notification to inspect the current icon; it did not override the banner icon or clear iOS caches.
- This feature was removed in 2.4.4 and is not part of the current interface.

## 2.4.2 · build 45 — Native glass navigation and complete icon sizes

- Moved Map, Library and Settings to the current native Tab API with filled symbols and the selected style’s accent. Kept the bar expanded during map navigation and intentionally hidden in drawing editors.
- Renamed the map-panel switch to Liquid Glass Map Controls; system navigation remains governed by iOS appearance and accessibility.
- Corrected portable-build linked-SDK metadata to the actual iOS 27.1 SDK instead of the iOS 18 deployment target.
- Bundled notification/settings/search/Home Screen sizes for all nine portable icon choices and added a package validator for icon resources and linked SDK metadata.
- Kept regular notification badges system-controlled; the Live Activity’s own mark follows the selected icon design.

## 2.4.1 · build 44 — First-launch crash repair

- Fixed an appearance-anchor exception caused by reading a custom trait override before one existed. The anchor now reads the resolved trait collection before updating overrides.
- Removed the diagnostic launch screen/handlers. Preserved appearance choices, app data and bundle IDs.

## 2.4.0 · diagnostic builds 42–43 — Launch investigation

- Temporary launch-check builds recorded startup stages and captured the appearance-trait exception after the main screen opened.
- These were diagnostic iterations of 2.4.0, not separate feature releases. Their launch gate is absent from the normal 2.4.1+ builds.

## 2.4.0 · build 41 — Three styles, nine icons

- Added Glacier (ice blue/silver), Afterhours (ink/violet) and Porcelain (chalk/graphite), each with light/dark palettes, setup treatment, control shapes, settings surfaces and widget/activity colors.
- Added Default, Dark and Tinted icon choices for each family, independent of interface style. Saved selection only after iOS confirmed the icon change.
- Included native appearance asset catalogs and portable manual icon choices. Appearance changes add no network, location or polling work.
- This initial appearance build had a first-launch crash, repaired in 2.4.1; do not use it in preference to the current release.

## 2.3.2 · build 40 — Stable area drafts and simpler helpers

- Moved named-area presentation out of reusable list sections, retained one draft identity/camera/corner list, and separated it from recurring session-status updates. Added discard confirmation.
- Added a 3–15 second Connection checks setting (default 10) for held-session evidence and Live Activity freshness. Route/joystick movement and Apple helper polling remain separate.
- Unified Find My checks around Cloud helper and Windows helper. Added direct Render URL/key connection, compatible setup-file import and an authenticated readiness test that does not start monitoring.
- Added Windows local-address detection and protected persistent pairing identity. Restarts on the same address retain pairing; changed addresses or renewed credentials require re-import.
- Added Windows session evidence to Live Activities, one-active-helper selection and specific connection errors.
- Changed generated pairing/export/helper branding to Shift while retaining legacy imports, storage IDs and deep links.
- Prepared reusable public source without a built-in personal Render URL, helper key, account or deployed service.

## 2.3.1 · build 39 — Touch capture, map-relative joystick and quieter idle work

- Moved route/area input onto a fixed surface above MapKit so taps and freehand input do not compete with native map recognizers. Coordinated second-finger cancellation, pan, pinch and parent scrolling.
- Made joystick movement follow the visible map heading on each tick, using the fixed pad rather than the moving thumb as its coordinate space.
- Reduced initial setup to a Wi-Fi / LocalDevVPN / pairing checklist with one readiness-driven primary action and expandable pairing options.
- In a follow-up under the same version, limited idle foreground location demand to visible map use and made the device-origin picker one bounded, cancellable request.
- Added eight saved battery/reliability results and two-run comparisons with foreground/away time, Low Power Mode, charging, interruption and configuration context. Observes battery notifications only during a test; does not claim app-only energy measurement.

## 2.3.0 · build 38 — Map, library and setup redesign

- Introduced the Map / Library / Settings navigation structure, refreshed setup/settings/editor surfaces, and a new default/dark/tinted icon direction.
- Reworked map drawing navigation to address vertical drift and parent-sheet scrolling during two-finger pan/zoom, including projection and anchoring checks.
- Expanded accessible point editing and directional movement controls, with reduced-motion/transparency support.
- Restyled helper pages and setup directions while preserving existing URLs, authentication and setup-file formats. Follow-up input corrections shipped in 2.3.1.

## 2.2.6 · build 37 — Paused routes and buffered logs

- Changed paused-route work from frequent wake-ups to control/connection signals. Resume, seek and cancellation wake it; paused time is not added to the next movement step.
- Grouped routine command and activity log writes into 32 KiB batches or five-second flushes. Failures, user actions, exports and lifecycle changes flush promptly.
- Kept held-location refresh and clear-command ordering. A sudden exit can lose the last buffered routine log entries; battery savings were not measured.

## 2.2.5 · build 36 — Less unnecessary background work

- Shared the session monitor with remote Find My, reused its network session, and added bounded failure backoff with manual retry.
- Let the held-location monitor sleep until relevant deadlines; stopped movement timers for an untouched joystick.
- Paused status timers and automatic camera following where their views are inactive or hidden. Skipped unchanged Live Activity evidence and helper-only recovery writes.
- Preserved location-command timing, evidence expiry and helper credentials. No fixed battery-saving percentage was claimed.

## 2.2.4 · build 35 — Find My freshness and activity evidence

- Displayed remote Find My evidence separately from successful spoofing commands in Live Activities and Dynamic Island; distinguished Apple report age from helper reply age.
- Corrected a helper cache path that returned before a due refresh. Concurrent checks share one refresh and wait briefly for a fresh snapshot without duplicate Apple requests.
- Preserved Apple timestamps, freshness limits and rate limiting. Old reports remain old; the change cannot force Apple to update.

## 2.2.3 · build 34 — Render browser setup

- Added private browser-based helper setup: unlock, Apple sign-in/verification, choose a device, download pairing and reconnect from the phone.
- Added HTTPS Render pairing alongside the existing pinned-certificate and Windows formats, plus a public health endpoint without private data.
- Stable helper keys preserve phone pairing across server restarts; the Apple login must be renewed. Health pings do not extend an inactive monitoring session.

## 2.2.2 · build 33 — Native recognizer attachment repair

- Corrected two map gesture attachment sites to use the supported native recognizer modifier instead of SwiftUI simultaneousGesture.
- Preserved callbacks, coordinate conversions, simultaneous map navigation and the smaller view components from 2.2.1.

## 2.2.1 · build 32 — Map expression build repair

- Split the oversized map expression into smaller content, gesture and overlay functions after a Swift type-check timeout.
- Kept pin adjustment, magnifier, saved-place appearance, search and duplication behavior. A further native modifier correction followed in 2.2.2.

## 2.2.0 · build 31 — Precise pins and personal places

- Added hold-and-drag pin adjustment with a magnifier; release remains a preview until Teleport is tapped.
- Added saved-place names, ten icons and six colors, preserving them through backups and Recently Deleted.
- Added local Settings search with everyday aliases and visible trip duplication actions. Copies retain route settings and do not start movement.

## 2.1.5 · build 30 — Map input and route-planner cleanup

- Captured map touches at first contact in map coordinates and removed pin insertion animation; restricted route-hold recognition to existing routes.
- Grouped route endpoints, compacted mode/speed controls, and reorganized optional stops, arrival and movement settings.
- Smoothed drawing presentation and batched coalesced touch samples with a stable overlay and cached distance, reducing repeated work.

## 2.1.4 · build 29 — Glass settings

- Added grouped glass settings surfaces, featured Appearance/Live Activities choices, clearer icons and full-width rows.
- Added accessible large-text layouts and solid contrast/transparency fallbacks. Kept all settings destinations and existing engine behavior.

## 2.1.3 · build 28 — Settings build fixes

- Corrected the Experimental Features section declaration and moved battery conversion into the session-test model after Battery Saver removal.
- Added battery-reading validation tests; retained the simplified settings from 2.1.2.

## 2.1.2 · build 27 — Calmer settings

- Shortened rows and repeated explanations; moved experimental service checks and reliability tools into their own area.
- Reduced helper setup to small steps with direct import for existing setup files. Kept export/privacy warnings and current errors visible.

## 2.1.1 · build 26 — Removed the app-specific Battery Saver

- Removed the separate Shift Battery Saver, exception controls, confirmation prompts and activity battery cutoff.
- Returned glass and Live Activities to their own switches. iPhone Low Power Mode and accessibility remain system controls.
- Kept old backups compatible while ignoring retired Saver fields and removing the retired shortcut.

## 2.1.0 · build 25 — Remote Find My prototype

- Added opt-in cloud helper checks during active sessions, timestamp-based report comparisons and expiring match evidence.
- Added helper/sign-in/mismatch warnings and a no-recent-confirmation reminder, without claiming force-close detection.
- Introduced bounded server-memory monitoring leases and scoped device helper-key storage. No Find My People integration or independent push service.

## 2.0.1 · build 24 — Simpler setup and helper onboarding

- Refreshed first-use cards, shortened connection instructions and tucked optional import controls away.
- Moved timeline/problem markers into Export or import; added dedicated Windows helper setup and shareable helper downloads.
- Clarified recovery requirements, compacted joystick/naming controls, and added Battery Saver exceptions that were later removed in 2.1.1.

## 2.0.0 · build 23 — Locus becomes Shift

- Introduced Shift by N3mo Studio, the original ribbon mark, sea-glass/ink palette and a full-screen map with capsule search and a glass dock.
- Redesigned the planner, saved library, search, setup, settings, editors, widgets and Live Activities while keeping explicit preview/start controls.
- Added bundled source credits and license notices with packaging checks.
- Preserved the Locus app/group/storage identities, pairing and library formats for in-place upgrades. The original engine was not replaced.

## 1.12.0 · build 22 — Timeline, saved search and edit history

- Added a local session timeline and explicit problem markers tied to the developer log, without automatic uploads.
- Added saved place/trip name search alongside Apple results.
- Kept up to three distinct earlier saved-trip versions with preview, restore/undo, stale-edit protection and atomic persistence. Current-trip export excludes historical versions.

## 1.11.1 · build 21 — Alert logging build fix

- Added the missing alert-helper overload used by trip rename, preserving popup behavior and presentation logging.

## 1.11.0 · build 20 — Recovery and developer logs

- Clarified unfinished-session recovery and failed clear operations instead of reporting success without evidence.
- Improved continuous hold-to-drag route marker interaction and coordinate alignment.
- Added a local, exportable 48-hour developer log with bounded storage, explicit event markers, credential exclusions and honest gaps after suspension/termination.

## 1.10.0 · build 19 — Editing, widgets and optional computer checks

- Added explicit Map / Draw / Pan tools, a below-finger drawing cursor, and point/corner editing with insertion, movement, deletion and undo/redo.
- Added 30-day Recently Deleted for saved places, trips and areas, with safe persistence and restore behavior.
- Added Home Screen shortcuts/widgets, connection details and optional iPhone readback evidence.
- Added the Windows Find My Devices/Life360 helper prototype and compatible backup settings.
- Added an app-specific Battery Saver; it was subsequently removed in Shift 2.1.1.

## 1.9.1 · build 18 — Removed tutorials and simplified drawing

- Removed tutorials, quizzes and tutorial menus while retaining connection setup.
- Kept Export or import at the bottom of Settings; made the compact map panel default to clear glass without resizing the map.
- Simplified tap/freehand drawing and two-finger navigation, and changed new-install location-name privacy defaults. The explicit Pan tool returned in 1.10.0.

## 1.9.0 · build 17 — Named areas and better library organization

- Treated VPN-interface detection as a hint rather than a connection gate; setup checks the actual developer connection.
- Added named areas with polygon containment/overlap rules, persistent place names, rename controls and labels throughout routes and activities.
- Added route place/stop names and waits, selective export/import for places/areas, trips and settings, and compatibility with 1.8 backups.
- Refined panel collapse and app-switcher privacy explanations. An intermediate build correction was issued under the same version.

## 1.8.0 · build 16 — Recovery, reliability and library backups

- Added recoverable trip checkpoints and explicit Resume; reopening alone never starts travel.
- Added a session reliability test, arrival choices, configurable panel shortcuts, folders and saved-library search.
- Added duplicate-and-edit trips and previewed library backup import/merge, excluding pairing, app-lock and other private connection state.

## 1.7.0 · build 15 — Preview-first journeys and compact controls

- Separated Show route from Start route, isolated planner drafts from running sessions, and introduced per-mode usual-speed presets.
- Added future stops during playback, improved route-jump selection and changed Undo jump to ten seconds.
- Refined activity wording, compact controls and temporary place naming; added an activity battery cutoff that was later removed.
- Added optional tutorials and settings grouping. Tutorials were removed in 1.9.1.

## 1.6.0 · build 14 — Setup, practice and privacy tools

- Added guided Wi-Fi/tunnel/pairing/connection verification with cancellation and expiring setup evidence.
- Added per-section route modes, draggable stops/endpoint editing and route practice without location commands.
- Added optional device-authentication app lock, app-switcher protection and recent-location retention controls.
- Added explicit, previewed problem-report sharing with an allowlisted set of diagnostic fields.

## 1.5.3 · build 13 — Touch targets and readable places

- Removed irrelevant idle speed controls and expanded button hit areas.
- Changed smooth movement’s default to off, retaining later explicit choices and per-trip settings.
- Added temporary session/place labels governed by activity privacy choices and optional clear glass controls.
- Clarified the distinction between an airplane-mode/network change, an active developer connection and successfully clearing a simulated location.

## 1.5.2 · builds 11–12 — Precise map coordinates and route timing

- Changed search teleport selection to pin preview before an explicit location command.
- Unified touch/map coordinate spaces, refined freehand sampling and route-marker snapping, and used flat map geometry.
- Made route pacing account for command duration while bounding catch-up after long execution gaps.
- Added honest device-origin selection without treating a simulated fix as fresh physical GPS, plus separate activity-surface privacy/progress preferences.
- Included a compiler correction in build 12 under the same version.

## 1.5.1 · build 10 — Stable viewport and cancellable actions

- Kept the map viewport fixed under an overlay tray and removed competing whole-map gestures.
- Improved route-marker hit targets, explicit Teleport/Plan search choices and cancellation of stale search results.
- Preserved paused route state during retry, queued explicit teleport behind in-flight writes and reduced redundant state/geometry updates.

## 1.5.0 · build 9 — Saved trips and stops

- Added saved trips with atomic persistence, rename/delete and full route/settings restoration into a preview.
- Added stops and waiting times, route pauses, reorder controls and continued wait-state handling.
- Added optional gradual acceleration/braking/turn slowing and Undo jump with stop-history restoration.
- Changed status wording to distinguish the last accepted command from independent proof of another app’s location.

## 1.4.0 — Flexible movement and route drawing

- Added explicit walking-path fallback/preference for cycling, live mode/speed changes and confirmed reroute choices.
- Added per-mode saved speed controls, a collapsible map panel and route-jump preview/confirmation.
- Added tap-point/freehand/pan drawing with bounded undo/redo and explicit review before movement.

## 1.3.1 — Simpler route and joystick controls

- Restricted joystick opening to an established session and separated Pause, Continue, End route and Stop spoofing.
- Added a fixed Start route action, isolated search/planner drafts from teleport pins, and prevented cancelled/late route writes from resuming travel.

## 1.3.0 — Directions and live journeys

- Added editable route endpoints, available route alternatives, source/distance/advisory information and separate simulation-time estimates.
- Added confirmed progress, pause/resume, map following/recenter/overview and journey details in Live Activities.

## 1.2.0 — Cycling and e-bike controls

- Added cycling/e-bike routing requests and persisted e-bike speeds for routes and joystick.
- Added route provenance and estimated travel time, with stale route-request rejection and explicit coverage/error handling.

## 1.1.0 — First custom session experience

- Introduced the custom map/session panel, appearance choices, accessible labeled controls and local Live Activity/WidgetKit extension.
- Added Lock Screen/Dynamic Island privacy, reminders and deduplicated warnings with timestamped command evidence and expiry.
- Serialized connection work, guarded cancellation/late completions, and made Stop wait for in-flight writes without inventing successful cleanup.
- Added honest relaunch/unverified states and Low Power Mode presentation adjustments. An early compiler correction was incorporated into the saved source.

## Starting point — upstream Locus

The first custom archive records
[`ChrisMack32/Locus@83c8fb324983728e8f44759cfd834dc637ee38b5`](https://github.com/ChrisMack32/Locus/tree/83c8fb324983728e8f44759cfd834dc637ee38b5)
as its base. Locus and the idevice engine provided the underlying application,
pairing and location-simulation foundation. Their copyright/license notices
remain intact. This changelog does not claim those foundations were created by
N3mo Studio or invent a release number for that starting snapshot.

The original binary dependency remains bundled; no new vendor-engine rewrite
is part of this history. See [credits and scope](LICENSES.txt).
