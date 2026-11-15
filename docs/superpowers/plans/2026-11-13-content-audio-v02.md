# Timișoara v0.2 — content and local narration

**Goal:** Complete the next editorial pass, generate seven narrations in all six languages, update the locally served production build and shareable archives.
**Authorization:** User explicitly requested continuing missing photos/destinations/audio and refreshing the local release. Public deployment remains deferred.
**Architecture:** Keep the existing catalog and inventory IDs. Integrate independent research patches after evidence review. Generate audio once locally from licensed preset neural voices; distribute only audio/cue files and license/provenance notices, not models. No voice cloning, runtime TTS API or recurring cost.

## Tasks

- [x] Research all remaining destination identities/branches using official sources and current status. Preserve ambiguity rather than silently renaming inventory. Review existing seasonal destinations.
- [x] Research each missing exact-place photo, starting with operators, then compatible open archives. Integrate only identity-verified, licensed/permission-cleared images; retain evidence for unresolved permissions.
- [x] Verify model/voice licenses; generate seven characters × ro/en/it/fr/es/zh-Hans. Use distinct preset voice/timing per character and calm maternal direction for the wolf. Record model revisions, prompt text, voice choices and file hashes.
- [x] Add local audio controls, pause/resume/restart/mute/volume, cue-synchronized captions, single-active-audio cleanup and narrative-position retention across language changes. Keep written transcript and missing/error fallback.
- [x] Test caption timing/position mapping first; add production media integrity checks and browser playback tests for every language, language switching, closing and external-request independence.
- [x] Integrate reviewed destination/photo patches; update editorial coverage, current release notes, credits and README.
- [x] Build and test; refresh outputs/Timisoara and local server; create versioned ready-to-share and source archives, CRC/hash-check and test a clean extraction. Preserve v0.1 as rollback.

## Review focus

Audio must come from redistributed local files and remain muted/stopped until a user gesture. Voices are synthetic presets, not impersonations. Photo source provenance alone is not a license; operator images with no reuse grant stay pending. `closed` currently includes seasonal unavailability because the original schema has no finer status enum; document that distinction and exclude from recommendations. No unresolved label receives an unrelated operator URL. No visitor location leaves the browser except an external directions link they choose to open.
