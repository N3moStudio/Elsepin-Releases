<p align="center">
  <img src="website/assets/ElsepinIcon-PrismJumpgate-Default.png" alt="Elsepin's Prism Jumpgate app icon" width="112" height="112">
</p>

<h1 align="center">Elsepin</h1>
<p align="center"><strong>Make your next move.</strong><br>Location simulation for iPhone. Your map, your pace, your style.</p>

<p align="center">
  <a href="https://elsepin.onrender.com/">Explore Elsepin</a> &nbsp;·&nbsp;
  <a href="SETUP.md">Setup guide</a> &nbsp;·&nbsp;
  <a href="https://github.com/N3moStudio/Elsepin-Releases/releases">Downloads</a> &nbsp;·&nbsp;
  <a href="CHANGELOG.md">Changelog</a>
</p>

Elsepin brings location controls, route planning and your saved places into one
native iPhone app. Preview a pin before teleporting, build a journey at your own
pace, and keep the places you want to return to close at hand.

> [!NOTE]
> **Elsepin 2.6.0 (59) is in development. No Elsepin IPA has been published here yet.**
> The app and extension have passed native compilation. Approved downloads will
> appear in **Releases** with a version, changes and installation notes. A source
> update or successful build is not automatically a published release.

## A place for every move

| Make it yours | What you can do |
| --- | --- |
| **Choose a location** | Search, place and fine-tune a pin, then confirm Teleport yourself. Save favorites for next time. |
| **Build a journey** | Use directions, tap points, draw a route or import GPX. Preview the journey before starting. |
| **Set the pace** | Walk, run, cycle, e-bike or drive. Choose mph or km/h, adjust route sections, pause and resume. |
| **Take a stop** | Set any whole-second wait from no wait to 24 hours. Use the route timeline to review stops and progress. |
| **Keep your places** | Organize saved routes, places and named areas. Use folders, edit history and Recently Deleted. |
| **Bring your library along** | Import a file or paste JSON, review what changes, and select what to keep. Export everything, settings, or routes and areas. |
| **Stay in control** | See session status in Live Activities and Dynamic Island. Configure multiple location widgets; each prepares a pin and waits for your confirmation. |

**A widget never starts or moves a location session by itself.** Even if a session
is already running, you must confirm the next move inside Elsepin.

[Routes, areas and widgets](docs/WIDGETS-AND-AREAS.md) · [Backups and importing](docs/BACKUPS.md)

## Choose your atmosphere

<p align="center">
  <img src="website/assets/ElsepinIcon-IonJumpgate-Default.png" alt="Ion Jumpgate icon option" width="88" height="88"> &nbsp;
  <img src="website/assets/ElsepinIcon-PrismJumpgate-Default.png" alt="Prism Jumpgate, the default Elsepin icon" width="88" height="88"> &nbsp;
  <img src="website/assets/ElsepinIcon-EmberSwitchpath-Default.png" alt="Ember Switchpath icon option" width="88" height="88">
</p>

**Nine themes. Thirteen icon choices.** Glacier, Afterhours and Porcelain are joined
by Ion, Ember, Abyss, Bloom, Blueprint and Titanium. Prism Jumpgate is the new
default icon; the earlier options remain available.

Ion now starts with dark olive surfaces, solid panels and bright citron actions.
Each theme brings its own appearance defaults. You can override the color mode,
glass or solid surfaces, font style and relative text size independently—or reset
them to the theme's choices. Accessibility text sizes remain respected.

[Try the interactive theme previews →](https://elsepin.onrender.com/)

The website previews illustrate the design; they are not screenshots of a running iPhone.

## Get started

1. **Check Releases.** Once an approved Elsepin IPA is available, download it here
   and read its installation notes. There is no public download yet.
2. **Sign and install.** The setup guide uses SideStore. Keep the bundled app
   extension for widgets and Live Activities.
3. **Connect your iPhone.** Follow the in-app checklist for Wi-Fi, LocalDevVPN,
   pairing and the connection check.
4. **Preview your first pin.** Choose a location, review it and tap Teleport.

The app targets **iOS 18 or later**. Actual compatibility depends on your iOS
version, device, pairing and signing setup. Back up your library before updating;
the [setup guide](SETUP.md) covers installation and earlier-version migration.

## Clear status, useful updates

Elsepin distinguishes commands it sent from location reports a provider returned.
Missing or old evidence is shown as such: a successful command does not prove
what another app sees. Stopping a session also needs a working connection to clear
the simulated location.

Official-release checks run at most once every 24 hours while Elsepin is open.
Use **Settings → Software updates → Check for updates now** whenever you want to
check manually. Update cards can be dismissed; **More info** opens the actual
release. Prereleases are excluded, with no background update polling or automatic
downloads.

## Optional cloud features

Find My **Devices** and Life360 comparisons, plus fixed-place Nearby alerts, are
**experimental** and require your own helper and authorized accounts. Their
status can appear inside Elsepin's existing Live Activity. No shared account or
hosted monitoring service is included.

**Find My People is not supported.** Provider access, fresh reports, background
operation and notification delivery are not guaranteed. Free hosting can sleep
or lose stored state. Nearby web notifications are separate from the IPA.

[Cloud setup and its limits](docs/CLOUD-GUIDE.md) · [Privacy](https://elsepin.onrender.com/privacy.html)

## Follow the work

- **[Full changelog](CHANGELOG.md):** the current redesign and the complete recorded
  feature history, including earlier Shift versions.
- **[Build history](docs/BUILD-HISTORY.md):** successful and failed validation
  attempts, published versus test builds, and what still needs device testing.
- **[Report an issue](https://github.com/N3moStudio/Elsepin-Releases/issues):** include
  the app/build number, iOS version, installation method and steps to reproduce.
  Remove location details, pairing files, passwords and tokens before posting.

Elsepin continues the Shift app. This repository is its public home for downloads,
help and release history; application development is private. Earlier versions
keep their original names and dates in the history. Inherited license permissions
and required acknowledgments remain intact.

[Licenses and acknowledgments](LICENSES.txt)
