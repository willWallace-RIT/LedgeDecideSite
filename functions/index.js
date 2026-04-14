const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.validateEvent = functions.firestore
  .document("events/{eventId}")
  .onCreate((snap, context) => {
    const data = snap.data();

    if (!data.decision || !data.state_before) {
      return snap.ref.update({
        validity: "rejected_missing_fields"
      });
    }

    if (!data.decision.action) {
      return snap.ref.update({
        validity: "rejected_invalid_action"
      });
    }

    return snap.ref.update({
      validity: "accepted"
    });
  });
