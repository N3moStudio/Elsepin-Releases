# Location widgets and named areas — 2.5.7

## One saved location per widget

1. Save a place or route in Elsepin and open Elsepin at least once after installing
   the update. The signed app and widget extension must share their app group.
2. Hold an empty spot on the Home Screen → Edit → Add Widget → Elsepin →
   **Location shortcut**. Choose small or medium.
3. Hold the added widget → **Edit Widget** → **Saved place or route start**.
   Search for a saved place or route. Routes use their first saved point.
4. Add more widgets and choose a different target for each. These individual
   widgets are independent of the four shared shortcuts in Elsepin's widget settings.
5. Tap a widget: Elsepin opens and selects a preview pin. **You must manually tap
   Teleport to pin in Elsepin.** Setup, pairing and connection requirements still
   apply. Unlock Elsepin first if app lock is enabled.

This manual step is mandatory even if another spoofing session is active. A
widget tap does not teleport, start, stop or pause that session. The current
route/joystick keeps running until you use an in-app control. An open route
editor must be closed before a widget preview can replace its draft.

Existing **Favorite shortcut** and **Saved shortcuts** widgets still work.
Their shared selections stay in **Settings → Home Screen widgets**. A configured
location that has been deleted shows **Location unavailable** instead of silently
selecting another place. Edit the widget to choose a replacement.

Widgets read only saved names and IDs from the app group, with bounded file reads.
They do not query the network or run periodic location checks. Content refreshes
when the app publishes library/appearance changes; iOS controls display timing.
Keep the extension when signing. If the signed app cannot access its app group,
Elsepin's Home Screen widgets settings explain the storage problem.

## Drawing separate pieces of an area

Open **Library → Areas → Draw a named area** (or edit an existing area). Saved
outlines and their names appear in gray on both the drawing and corner-edit maps.
Your draft retains its accent color. Pan or zoom to see nearby outlines.

Save rejects overlapping interiors and identifies the conflicting area. Move
the draft corners outside that area, then save again. Shared borders and corners
are allowed. Multiple separate outlines may have exactly the same name, so a
place can be represented by several easier pieces.

New/restored/imported areas use the same rule. An import that introduces overlap
fails before selected routes/settings are written; uncheck the conflicting area
and retry. Existing legacy overlaps remain readable, and unchanged boundaries
can still be renamed/deleted. Elsepin's smallest-area label rule remains a fallback
for that legacy data.

## Phone acceptance checklist

- Configure two widgets for different places and a third for a route start.
- With spoofing stopped, each tap selects the correct pin and sends no location.
- Repeat during a held location, moving route and joystick session. The existing
  session must continue; only a separate manual Teleport tap can replace it.
- Test a cold start, app lock, missing pairing, a deleted saved target and an open
  route editor. No path may start spoofing automatically.
- Check widget names/tints, larger text, VoiceOver, app-group access and refreshes
  after renaming/deleting a location.
- Draw overlapping, contained, adjacent and disjoint areas; try equal names.
  Confirm gray reference boundaries stay visible while panning and editing.
- Import overlapping areas and confirm other selected items remain unchanged.

Model/source regressions and a native build verify the rules and compilation.
Actual Home Screen configuration, map rendering, gestures and active-session
behavior need physical iPhone testing.
