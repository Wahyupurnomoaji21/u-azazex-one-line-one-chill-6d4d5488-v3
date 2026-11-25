# One Line, One Chill — v3

[![make.fun](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Wahyupurnomoaji21/u-azazex-one-line-one-chill-6d4d5488-v3/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Wahyupurnomoaji21/u-azazex-one-line-one-chill-6d4d5488-v3/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)

Entry for the [One Line, One Chill](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488) bounty on make.fun.

## The entry

A single original horror sentence, under 200 characters, written deterministically by `main.ts` to `entry.txt`:

> I counted my pills twice a day for a year, and this morning there were exactly the right number — I had skipped yesterday.

v1 was a horror line about a voicemail from my own number (rank 1201/2004 in round 1, 47.44%). v2 was built off-brief — a warm, funny plant line, not horror — and is never submitted: the judge brief ranks "reads as a horror story" first, so a non-horror line loses to any on-subject horror line. v3 returns to the brief. Deadline 27 Nov 2026 00:15 WIB; v3 is judged from round 2 (cutoff 26 Nov 08:14 WIB).

## Why this line

The dread is earned, not announced: no monster is named and nothing jumps out. A year of pill-counting, an exact count, a skipped dose — the arithmetic proves someone has been inside the house, quietly tending the medication. Concrete specifics (twice a day, a year, exactly the right number), no mirror/doll/basement cliché, and the last clause reframes the whole sentence.

## How it works

`main.ts` (Node 22) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(or `<repo>/output/entry.txt` when the variable is unset), validating first
that it is one line of 1–200 characters, then reading the file back to confirm
it matches byte for byte.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/one-line-one-chill-v3-out node main.ts
```
