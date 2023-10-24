import { useState } from "react";

export default function App() {
  const [finalBill, setFinalBill] = useState(Number);
  const [selfReview, setSelfReview] = useState(0);
  const [friendReview, setFriendReview] = useState(0);

  function handleFinalBill(val) {
    setFinalBill(Number(val));
  }

  function handleSelfReview(val) {
    return setSelfReview(val);
  }

  function handleFriendReview(val) {
    return setFriendReview(val);
  }

  const onBill = handleFinalBill;
  const onSelfReview = handleSelfReview;
  const onFriendReview = handleFriendReview;

  return (
    <div className="Input app">
      <BillInput finalBill={finalBill} onBill={onBill} />
      <ServiceInput
        finalBill={finalBill}
        selfReview={selfReview}
        onSelfReview={onSelfReview}
      />
      <FriendInput
        finalBill={finalBill}
        friendReview={friendReview}
        onFriendReview={onFriendReview}
      />
      <Result
        finalBill={finalBill}
        selfReview={selfReview}
        friendReview={friendReview}
      />
      <Reset
        onBill={onBill}
        onSelfReview={onSelfReview}
        onFriendReview={onFriendReview}
      />
    </div>
  );
}

const options = [
  { label: 0, review: "Dissatisfied" },
  { label: 5, review: "It was okay" },
  { label: 10, review: "It was good" },
  { label: 20, review: "Absolutely amazing!" },
];

function BillInput({ finalBill, onBill }) {
  // The bill input
  return (
    <div className="Input">
      <h3>How much was the bill?</h3>
      <input
        value={finalBill}
        onChange={(e) => {
          onBill(e.target.value);
        }}
      ></input>
    </div>
  );
}

function ServiceInput({ finalBill, selfReview, onSelfReview }) {
  // My input

  const reviewsSelf = options.map((val) => (
    <option key={val.label} value={Number(val.label)}>
      {val.review} ({val.label}%)
    </option>
  ));

  return (
    <div className="Input">
      <h3>How did you like the service?</h3>
      <select value={selfReview} onChange={(e) => onSelfReview(e.target.value)}>
        {reviewsSelf}
      </select>
    </div>
  );
}
function FriendInput({ finalBill, friendReview, onFriendReview }) {
  // Friend input
  const reviewsFriend = options.map((val) => (
    <option key={val.label} value={Number(val.label)}>
      {val.review} ({val.label}%)
    </option>
  ));
  return (
    <div className="Input">
      <h3>How did your friend like the service?</h3>
      <select
        value={friendReview}
        onChange={(e) => onFriendReview(e.target.value)}
      >
        {reviewsFriend}
      </select>
    </div>
  );
}

function Result({ finalBill, selfReview, friendReview }) {
  // Result
  return (
    <div className="result">
      <h1>
        You pay{" "}
        {`$${
          Number(finalBill) +
          finalBill * (Number(selfReview) / 100) +
          finalBill * (Number(friendReview) / 100)
        }`}{" "}
      </h1>
    </div>
  );
}

function Reset({ onBill, onSelfReview, onFriendReview }) {
  function handleReset() {
    onBill(0);
    onSelfReview(0);
    onFriendReview(0);
  }

  return (
    <div className="reset">
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}
