# What's coming in Elsepin 2.6.1

Changes through test build 86, 15 November 2026. **2.6.0 remains the public release.** Final physical-iPhone testing is in progress; the 2.6.1 release is an unpublished draft.

## Routes that keep your choices

- Set walking, running, cycling, e-bike or driving movement and speed separately for each leg. Changing modes offers Keep current path or Recalculate when a different route network is needed.
- Keep the route preview visible while planning, including before endpoints are chosen or when directions fail. Reopen planned routes from Recents without replacing their saved geometry.
- Search along a route, in a chosen city or in a map area. Search supports addresses, businesses, categories, saved places and recent places. Cancelled or replaced requests cannot select a late result.
- Try cycling directions first for bikes and e-bikes. Where unavailable, use an explicitly labeled walking-path fallback at the selected playback speed. Walking paths may include steps or bike restrictions; an offline/error response is not a new route.
- Edit arrival behavior at Destination and stop waits at each stop. Name the start, stops or destination within that route without creating unrelated saved pins.
- Prepare a next route from the endpoint, optionally with a wait and a one-time automatic-start choice. Cancel next route leaves the current journey intact.
- Keep smoothing specific to a route. Route previews survive ordinary map taps and definite start failures where no point was sent. Pin names remain selectable during travel.
- Retain explicit Start, Pause/Resume, End route while holding position, and Stop/clear. Selecting a place or opening a widget does not silently start movement.

## A library you can organize

- Keep saved pins separate from Favorites; a favorite is a flag on the same saved item. Save to Library and Save & Favorite are separate choices. Unfavoriting does not delete a route.
- Routes created from Library save when their preview is accepted. The map star updates that same route, including routes reopened from Recents.
- Add native emoji or a preset pin symbol, plus a fixed color or Follow theme. Custom emoji accepts one valid emoji sequence rather than arbitrary text.
- Use larger pin/area maps and explicit full-screen controls with search. Editing a pin starts near that pin, and tapping moves it without forcing full screen.
- Keep Library pin creation steady by removing address lookup from that editor. A chosen search result can fill a blank name; a manually placed pin waits for a name. Save requires both a pin and a nonblank name.
- Undo and Redo area corners. New edits clear Redo, and reopening does not bring back an earlier draft's history.
- Swipe to favorite/unfavorite or delete saved pins and routes; restore or delete items in Recently Deleted. Sweep selection follows actual row positions.
- Review imports as selected additions and exact setting changes. Older backups remain compatible; re-importing does not duplicate existing items.

## Maps and controls

- Toggle saved pins and named area outlines independently. Active-route markers remain visible.
- Adjust pin size from 22 to 64 points and visibility from 0.5 to 20 miles across the map. The default visibility is 5 miles across, not distance from your current location.
- Read the native map scale below the controls. Saved-pin visibility updates during zoom gestures, in both directions, using horizontal ground scale that remains consistent when the map rotates.
- Use a smaller bottom panel with consistent navigation spacing. Active-route details can scroll while Pause/Stop stay reachable. Controls wrap on narrow screens and adapt to larger text.
- Distinguish saved routes from pins in search, and route labels from saved-place names. Fix lingering search bars and garbled Stop, icon and import text.
- Fix the saved-pin annotation environment lookup identified in a build-76 crash report. Other map-camera, input and route-marker checks were hardened; this is not a guarantee against every crash.

## Pairing, recovery and diagnostics

- Show pairing progress and the separate six-digit code in the app, Live Activity, Dynamic Island and notification fallbacks when allowed.
- Cancel pairing safely, reject callbacks from abandoned attempts and stage the output before installing it. A cancelled attempt cannot overwrite a pairing file imported later. Retry waits for bounded cleanup and gives actionable recovery text.
- Refresh connection evidence before explicit movement and Stop; invalidate stale connection evidence on returning to the app. A successful write is not proof of another app's location.
- Restore eligible interrupted routes with one foreground reconnect attempt. Resume only after the saved position is accepted; paused, old or uncertain sessions still need manual action. Downtime does not count as travel.
- Keep failure and uncertain-clear states visible. Reconnect Wi-Fi and LocalDevVPN before retrying; another device's Wi-Fi hotspot can also work. Force-quitting does not confirm that a simulated location cleared.
- Record opt-in, bounded developer logs with CPU, memory, thermal and work-state samples, incident notes and interrupted-session evidence. Logging is diagnostic, not a promise of zero heat or battery use.
- Reduce unnecessary polling, map work and stop-wait wakeups. Use static request feedback for Reduce Motion, Low Power Mode or inactive views.
- Try an isolated Dev Mode dataset of pins, routes, areas, recents and deleted items. Your real library returns when you turn it off; turning it on again starts fresh demo data.

## Appearance and system surfaces

- Use Bloom by default with eight themes and thirteen icons. Existing Abyss choices migrate to Bloom; other selections remain.
- Choose Solid or Liquid Glass. Use compact rounded typography while respecting accessibility text sizes. Retired font/color overrides remain compatible with older backups.
- Browse grouped settings with search and native back navigation. Route options use spacing and dividers instead of a separate card around every small control.
- Keep Live Activity information compact, with progress and update status separated from stale or disconnected states. Saved-location widgets explain missing App Group access when the signing setup does not provide it.
- The website has a new map-led layout, scroll transitions, a working interactive preview, theme/icon examples and revised setup/privacy pages. It is separate from the app binary.

## Existing experiments and future work

Build 86 still contains the earlier optional Find My Devices/Life360 helpers. Their polling, authentication handling and freshness checks received fixes during this cycle, but real account access and web push delivery are separate from automated tests. Find My People remains unsupported.

Retiring those experiments and starting a fresh Life360-only map feature is deferred. Official access will be investigated first, with a private helper only as a fallback. None of that proposed replacement is claimed as shipped in 2.6.1.

## Validation so far

Build 86 passed **724 automated checks**: 580 Swift, 104 cloud-helper, 18 Windows-helper and 22 resource checks. One Windows-only case was skipped on the Mac runner. The production app and extension compiled without compiler warnings or errors; the IPA's identities, versions, resources and device code were inspected.

Fourteen distinct simulator UI cases passed across the focused validation runs, including narrow/large-text controls, long names, search recovery, bottom spacing, and live pinch/rotation visibility. Connection and movement fixtures were explicitly simulated. They do not prove real pairing, spoofing, Stop/clear, signing compatibility or battery behavior.

Final iPhone acceptance and an official-channel package are still required before publication. The current test IPA is not a published release.

[Complete chronological changelog](../CHANGELOG.md) · [Build history](BUILD-HISTORY.md) · [Setup](../SETUP.md)