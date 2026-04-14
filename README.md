# Decision Ledger (Firebase)

An open-source causal decision dataset system.

## Concept

Each entry records:
- a state
- a decision
- the outcome
- causal links

Over time this forms a growing causal graph of human-like decisions.

## Structure

- Firestore stores events
- Cloud Functions validate entries
- Web UI allows contributors to submit decisions

## Data Format

Each event:

- state_before
- decision
- state_after
- causal_links
- tags

## Goal

Build a dataset for:
- causal reasoning models
- reinforcement learning agents
- short-memory "guppy" decision systems

## License

Open for research use.
