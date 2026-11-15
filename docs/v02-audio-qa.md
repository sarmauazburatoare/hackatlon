All 42 final MP3 narrations pass technical QA. They total 13 min 40.6 s and 6,594,210 bytes.

- Each file fully decodes as 24 kHz mono MP3; all 42 SHA256 values are unique and match the generated manifest.
- Duration range: 12.80–26.20 s. Maximum container/manifest difference: 0.0006 s. No empty/silent clips; longest detected quiet interval: 1.86 s.
- Every WebVTT has the authored text, matching cue count/timestamps, and bounded monotonic timings. Chinese whitespace is normalized for comparison.
- Local Whisper base/small supplied 39 current ASR passes across 33 unique clips. Every pass detects the intended language. Coverage includes all six wolf languages and all seven Chinese characters; nine other clips have technical checks only.
- Rechecks support the corrected Romanian lantern numbers, Italian wolf date/onset, Italian umbrella opening, and replacement Chinese fountain voice. No gross omission, unwanted sentence repetition or wrong language was found in the final ASR samples.

Native-human listening and pronunciation signoff remain outstanding. In particular, Chinese readings of Alba Iulia, Timișoreana and Fabric remain ASR-ambiguous. ASR may return homophones, Traditional Chinese, altered names and number formatting; it cannot certify naturalness or exact pronunciation. Base and small are two sizes of the same recognizer family.

The detailed JSON records every final file hash, signal measurements, cue checks and current ASR transcripts. Pre-correction/stale evidence remains under work and is excluded from final coverage counts.
