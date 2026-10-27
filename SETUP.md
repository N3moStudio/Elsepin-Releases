# Get started with Elsepin

## Install

1. This 2.6.0 guide describes an unreleased build. Approved downloads will appear in [Elsepin Releases](https://github.com/N3moStudio/Elsepin-Releases/releases). Do not install an unverified development artifact.
2. Add the IPA to **SideStore** and keep the bundled Live Activity extension. SideStore signs both for your device.
3. **For 2.4.x → 2.5.x, export your library first:** the new app identity creates a separate installation. Export settings and your library from the old app before replacing it. For later updates with the same identity, use the same signing setup and install over the current app.

Direct SideStore installation is the primary setup described here. Import a
library through **Settings → Import & export** using a file or pasted JSON.
Review individual changes before saving. See [backup import help](docs/BACKUPS.md)
and [location widgets and named areas](docs/WIDGETS-AND-AREAS.md).

## Connect

Open Elsepin’s setup checklist: **Wi-Fi → LocalDevVPN → Pairing → Check connection**.
Install and connect [LocalDevVPN](https://apps.apple.com/us/app/localdevvpn/id6755608044).
The default tunnel address is `10.7.0.1`.

**On-device pairing, where supported (iOS 27):**

1. Open **Settings → Connection → Pair on this iPhone**, then start pairing.
2. Allow the requested Local Network access. Follow Elsepin’s prompts into iPhone **Settings → Privacy & Security → Developer Mode → Pair with Host**.
3. Choose **Elsepin**. Enter your iPhone passcode when iOS requests it, then the separate six-digit pairing code shown by Elsepin.
4. Return to Elsepin and complete the connection check.

**Import an existing pairing:** generate an **RPPairing** file using
[idevice_pair](https://github.com/jkcoxson/idevice_pair/releases) on your computer,
then import, share, or paste it into Elsepin. A SideStore `.mobiledevicepairing`
file is a different format. Keep pairing files private.

## Move

Search or select a location, review the pin, then tap **Teleport**. For a journey,
choose **Show route**, review it, then **Start route**. The joystick becomes
available after a session is established.

- **Pause route** holds the current point.
- Set stop waits with Hours / Minutes / Seconds, from **0** (pass through) to **24 hours**. For example, choose **15 seconds** for a short stop.
- Choose **Settings → Usual speeds → Speed units** for mph or km/h. Changing units does not change a trip’s actual speed.
- **End route** stops travel while retaining the held point.
- **Stop spoofing** requests clearing the simulated location. A failed clear is not a successful reset; reconnect and retry.

Wi-Fi is required to establish a fresh developer connection. An already working
session can continue after leaving Wi-Fi, subject to iOS execution and the
connection staying usable. Force-closing Elsepin does not prove the simulated
location was cleared.

## Optional Find My checks

Use **Settings → Find My checks** to choose a [cloud helper](CloudFindMy/RENDER-SETUP.txt)
or [Windows helper](Companion/README.txt). Use your own service and account;
one helper is active at a time. The Windows computer must remain awake and
reachable on the same Wi-Fi. A cloud helper can work while that computer is off.

**Connection checks (3–15 seconds)** control Elsepin’s own connection evidence.
Find My reports are fetched separately, around once per minute; faster Elsepin
checks cannot make Apple produce a newer report. Devices is not Find My People.

Helper guides retain their minimum compatible version, 2.3.2; they also apply
to this 2.6.0 source; Life360 cloud support requires the updated helper. See [privacy and limits](docs/PRIVACY.md).
