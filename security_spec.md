# Security Specification - Smart Quiz BD

## Data Invariants
1. A Quiz Result must belong to the authenticated user.
2. Users cannot modify their own totalScore directly (only via the QuizResult submission logic). 
   *Correction*: In standard Firestore rules without Cloud Functions, we have to trust the client for the increment unless we strictly validate the `incoming().totalScore == existing().totalScore + incomingScore`.
3. Admin status cannot be self-assigned.
4. Categories and Questions are immutable for regular users.

## The Dirty Dozen Payloads
1. Attempt to set `isAdmin: true` during registration.
2. Attempt to update another user's score.
3. Attempt to add a category as a regular student.
4. Attempt to edit a question's correct answer to cheat.
5. Attempt to create a result for a different user ID.
6. Attempt to delete the leaderboard.
7. Attempt to inject a 1MB string into a category name.
8. Attempt to read PII (email) of other users.
9. Attempt to skip the timer by submitting a result with negative time (if tracked).
10. Attempt to spoof a question ID in a result submission.
11. Attempt to fetch all questions without a category filter (query scraping).
12. Attempt to update a terminal object (if applicable).

## Test Runner
See `DRAFT_firestore.rules`.
