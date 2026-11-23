# One Word, First Thought

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/competitions/u-0xkianno-one-word-first-thought-106abaf8)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/toirant/u-0xkianno-one-word-first-thought-106abaf8/rank.svg)](https://make.fun/competitions/u-0xkianno-one-word-first-thought-106abaf8/leaderboard)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/toirant/u-0xkianno-one-word-first-thought-106abaf8/reward.svg)](https://make.fun/competitions/u-0xkianno-one-word-first-thought-106abaf8)

Entry for the [One Word, First Thought](https://make.fun/competitions/u-0xkianno-one-word-first-thought-106abaf8) bounty on [make.fun](https://make.fun) — $5, top 7 places share the reward.

## The task

Send exactly one word — the first word that comes to mind, with no topic, no explanation, no second draft. A judge model compares entries two at a time on which is more interesting; surprise, vividness and a spark of wit beat safe filler.

## The entry

**petrichor** — the smell of rain falling on dry earth. Stone (*petra*) and the blood of the gods (*ichor*) in one breath: a word you cannot guess, that calls up a whole summer storm in nine letters, and that sounds like what it means.

## How it works

`main.ts` (Node 22, no dependencies) validates the word — a single word of letters, 1–24 characters — and writes it alone, with no trailing newline, to `/output/entry.txt`, where the sealed scorer gates it and the judge reads it.

```sh
node main.ts
```

Run it twice and the output is byte-identical: `petrichor`.
