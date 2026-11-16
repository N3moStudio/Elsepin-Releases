# Elsepin build history

**Public release:** [2.6.0 (59)](https://github.com/N3moStudio/Elsepin-Releases/releases/tag/v2.6.0). **In final testing:** 2.6.1 through build 86. No 2.6.1 release is published.

[Feature-by-feature changes](CHANGES-SINCE-2.6.0.md) · [Complete chronological update log](../CHANGELOG.md)

## 2.6.1 development builds

All entries below are development/test builds, not public releases. A passing build does not prove physical pairing, signing, location clearing or battery behavior.

| Build | Date | Changes and result |
| --- | --- | --- |
| 86 | 15 Nov 2026 | Live pin visibility during pinch, consistent rotated-map scale. 724 checks; verified test IPA. |
| 85 | 15 Nov 2026 | Pairing cancel/retry and import race fixes; approved recovery wording; separate website rewrite. 718 checks; test IPA. |
| 84 | 14 Nov 2026 | Corrected idle/route tray spacing; focused simulator layout checks. 711 checks; test IPA. |
| 83 | 14 Nov 2026 | Wrapped map controls, reachable route commands, search retry and accessibility refinements. 711 checks; interim test IPA. Spacing corrected in 84. |
| 82 | 13 Nov 2026 | Pin visibility range from 0.5 to 20 miles across; native map scale; backup support. 697 checks; test IPA. |
| 81 | 13 Nov 2026 | Steady pin editor, explicit custom emoji, zoom filtering, clearer pin/route search and Cancel next route. 692 checks; test IPA. |
| 80 | 12 Nov 2026 | Always-visible planner map, city/area search, cycling fallback, preserved paths and pin-edit fixes. 686 checks; test IPA. |
| 79 | 12 Nov 2026 | Save/favorite system, larger maps, Redo corners, next-route handoff, emoji and accurate selection sweep. 665 checks; test IPA. |
| 78 | 12 Nov 2026 | Pin names during routes, destination/Add stop fixes, simpler trays and explicit path-recalculation choices. 653 checks; test IPA. |
| 77 | 8 Nov 2026 | Fixed the saved-pin annotation environment lookup identified in a build-76 device crash. 652 checks; test IPA. |
| 76 | 8 Nov 2026 | Isolated Dev Mode, Recently Deleted sweep selection, map input hardening and memory diagnostics. 652 checks; test IPA. |
| 75 | 7 Nov 2026 | Route-label/search-overlay fixes, retained failed-start previews, route smoothing, swipe actions and grouped import review. 640 checks; test IPA. |
| 74 | 6 Nov 2026 | Keep path/Recalculate choice, leg controls, destination options, endpoint naming, back swipes and expanded Add stop map. 634 checks; test IPA. |
| 73 | 6 Nov 2026 | Individual-leg mode/speed editing, protected route previews, planned-route recents and a smaller map panel. 631 checks; test IPA. |
| 72 | 5 Nov 2026 | Fresh service connections for movement/Stop, search-transition fixes, bounded directions and richer incident diagnostics. 620 checks; test IPA. |
| 71 | 5 Nov 2026 | Endpoint checks, readable Stop/icon text, selectable larger pins, compact selection controls and resource diagnostics. 615 checks; test IPA. |
| 70 | 5 Nov 2026 | Saved area outlines, pin/area layer switches, persisted map options and reduced repeated map work. 611 checks; test IPA. |
| 69 | 4 Nov 2026 | Separate pins/favorites, saved-route favorites, area search, recent routes and bounded category/along-route searches. 609 distinct checks across hosts; test IPA. |
| 68 | 2 Nov 2026 | Compact route card, bounded automatic recovery and honest interrupted-session state. 600 checks; test IPA. |
| 67 | 2 Nov 2026 | Native request-progress indicators with static accessibility/low-power fallback; focused unused-code cleanup. 586 checks; test IPA. |
| 66 | 1 Nov 2026 | Bounded incident exports, session breadcrumbs, independent provider errors and shared helper polling. 582 checks; test IPA. |
| 65 | 31 Oct 2026 | Native certificate/delegate warning cleanup. 565 checks and native validation; the existing build-64 phone copy was retained. |
| 64 | 30 Oct 2026 | Native map route-touch handling and along-route stop search. Native test IPA delivered; further device feedback followed. |
| 63 | 30 Oct 2026 | Search submission/cancellation, simulated ETA, paced writes and route-search follow-up. Native test IPA delivered. |
| 62 | 30 Oct 2026 | Theme, setup and compact route/Island UI follow-up. Native test IPA delivered; known warnings were later fixed in 65. |
| 61 | 30 Oct 2026 | Pairing code in Live Activities/notifications and native setup flow. Native test IPA delivered. |
| 60 | 28 Oct 2026 | Bloom default, eight themes, simpler typography/surfaces and old-backup compatibility. Native test IPA delivered. |

### Current validation

Build 86 passed 724 checks: 580 Swift, 104 cloud-helper, 18 Windows-helper and 22 resource checks. One Windows-only case was skipped on the Mac. The production app and extension compiled without compiler warnings/errors. Package inspection verified both bundle versions, device executables, icons/resources and absence of simulator fixtures.

Fourteen distinct simulator UI cases passed across focused runs, including narrow/large-text layouts, search cancellation/retry, connecting/paused/failed presentations, bottom spacing and continuous pinch/rotation visibility. Their connection and movement states were test fixtures. Final physical-iPhone testing is still in progress.

<details>
<summary>Intermediate failures and corrections</summary>

- Build 69's GitHub attempts were blocked by account access; the private Mac build later succeeded. A build-75 GitHub attempt was blocked before execution by account billing/spending restrictions; its existing successful package was retained.
- Build 76 first failed on native type-check complexity and defaults-capture warnings. Both were corrected before the successful package.
- Build 78 first caught a route-planner scope error; the final run compiled successfully.
- Build 79 first failed because a row hit-test helper lacked its required import. The final run passed after correction and integration checks.
- Build 83 was an interim IPA. Phone feedback exposed the bottom-spacing regression corrected in 84.
- Pin-visibility simulator attempts initially hit an overlapping route-menu control rather than the intended test input. Fixture placement was corrected; the final actual pinch/rotation case passed. These were not recorded as production app crashes.

</details>

## 2.6.0 (59), public release

Published 27 October 2026 after native compilation and package verification. Introduced the Elsepin identity, Prism Jumpgate, expanded appearance choices, refreshed Settings, manual update checks and the public website. The original release includes nine themes; the next 2.6.1 update retains eight.

## Earlier Shift builds

Elsepin continues Shift. These are **historical Shift records**, not Elsepin
downloads or renamed releases. The original repository is no longer accessible
through its former URL at this review; the records below come from the preserved
Change Ledger and artifact verification notes. Missing dates or runs are not invented.

| Version / build | Date | Recorded run(s) | Changes and outcome |
| --- | --- | --- | --- |
| 2.5.8 / 58 | 26 Oct 2026 | `40414605689` | Six additional themes, four icons and the complete route/cloud/motion update. 526 tests, app/extension build and IPA checks passed. Maintainer tested it on iPhone; the exact candidate IPA was promoted to official `v2.5.8` without rebuilding. |
| 2.5.8 / 57, main consolidation | 26 Oct 2026 | `40398031406` | Consolidated full development work and current setup links. 524 tests and native compilation passed. Packaging was off; no new IPA or release. |
| 2.5.8 / 57, test IPA | 25 Oct 2026 | `40259930059` | Compact cloud UI, helper website, experimental Nearby alerts, safer tray/joystick handling and reset controls. 524 tests, native build and IPA checks passed. Test artifact only. |
| Reset/recovery development | 25 Oct 2026 | `40222489196` | Scoped resets and Recently Deleted bulk selection. 474 tests and app/extension compilation passed. No IPA. |
| 2.5.7 / 56 | 25 Oct 2026 | `40215371297` | Selective import refinements, nearby area outlines/overlap checks and configurable location widgets with mandatory manual confirmation. 455 tests and IPA checks passed. Official release. |
| 2.5.6 / 55 | 25 Oct 2026 | `40211268590` | Per-setting before/after review; individual routes, places and areas; separate exports. 442 tests and IPA checks passed. Test artifact only. |
| 2.5.5 / 54 | 25 Oct 2026 | `40208929771` | File/pasted-JSON import repair, bounded reads and detailed test data. 431 tests and IPA checks passed. Test artifact only. |
| Backup-import development | 24 Oct 2026 | `40167635354` | File/paste import groundwork. 430 tests and native compilation passed; no IPA. A local fixture error was repaired before this successful run. |
| 2.5.4 / 53 | 24 Oct 2026 | `40153593002` | Official promotion with stable update metadata. 420 tests and native/package checks passed. Official `v2.5.4`. |
| 2.5.4 / 52 | 24 Oct 2026 | `40152801782` | Daily, official-only update checks; dismissible cards, caching and release links. 420 tests and IPA checks passed. Prerelease `v2.5.4-beta.1`. |
| 2.5.3 / 51 | 23 Oct 2026 | `40066022555`, `40066390461` | Cloud Life360, shared Live Activity provider rows and clearer helper errors. Both attempts passed 402 tests and built IPAs; the second refined the Island layout and became `v2.5.3-beta.1`. |
| 2.5.2 / 50 | 23 Oct 2026 | `40052908812` | Hours/minutes/seconds stop editor, up to 24 hours per stop, with persistence/countdown coverage. 384 tests and IPA checks passed. Prerelease `v2.5.2-beta.1`. |
| 2.5.1 / 49 | 23 Oct 2026 | `39986065262`, `39986538008` | Compact route controls, timeline, wait presets, scrubbable preview and icon-switch handling. Both builds succeeded; the delivered second build passed 377 tests and included accessibility/help refinements. |
| 2.5.0 / 48 | 22 Oct 2026 | `39913718958` | Seconds-based stops, mph/km/h, independent install identity, notification routing and pairing validation. 373 tests and IPA checks passed. Test artifact only. |
| 2.4.4 / 47 | 15 Oct 2026 | Preserved release notes; no run ID recorded here | Icon/packaging follow-up and native notifications. A successful GitHub build and maintainer iPhone smoke test were recorded. |

Earlier feature milestones, including diagnostic builds 42–43 and versions before
2.4.4, remain in the [complete changelog](../CHANGELOG.md). Some were internal
iterations; their entries do not imply a public release or a separately verified
build. Dates are omitted when no reliable release record exists.


## Earlier Locus/Shift milestones

The [complete changelog](../CHANGELOG.md) retains each recorded milestone from the upstream Locus starting point through builds 9–46, including paired build entries 11–12 and diagnostic builds 42–43. Early versions without a recorded build number remain named by version; no missing number or release date is invented.

The source repository is private. This public register summarizes preserved build evidence without exposing local files, credentials or private CI links. Historical releases keep their original names; they are not newly published Elsepin downloads.
