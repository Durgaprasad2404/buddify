import React from "react";

function Safety() {
  return (
    <div className="py-3 bg-secondary" id="safetyPrivacy">
      <h1 className="heading-main my-3">Safety & Privacy</h1>
      <section className="safety-container">
        <div className="safety-con1">
          <h1 className="whyus-heading">WHY US?</h1>
          <p className="whyus-para">
            The Supports You All The Time,No Matter By The{" "}
            <span className="whyus-span">Friends</span>
          </p>
          <button type="button" className="whyus-button">
            READ MORE
          </button>
        </div>
        <div className="safety-con2">
          <q>
            Your trust is our foundation. With encrypted conversations and a
            strict privacy policy, your thoughts and feelings stay between you
            and your Bud. In this space, you're safe to share, safe to feel, and
            safe to heal.
          </q>
        </div>
      </section>
    </div>
  );
}

export default Safety;
