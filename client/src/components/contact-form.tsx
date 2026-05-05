import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const questions = [
  {
    label: "Question 1 of 3",
    text: "What is the biggest thing slowing your business down right now?",
    options: [
      "We are losing leads before they convert",
      "Our tools and systems don't talk to each other",
      "We have a strategy but nothing is shipping",
      "We need more visibility into what's actually working",
      "Something else",
    ],
  },
  {
    label: "Question 2 of 3",
    text: "Have you already invested time or budget trying to solve this?",
    options: [
      "Not yet — we're just starting to look at it",
      "We've tried a few things but nothing has stuck",
      "Yes, and it's been frustrating",
    ],
  },
  {
    label: "Question 3 of 3",
    text: "If the right solution were in front of you, how quickly would you move?",
    options: [
      "Immediately — this is urgent",
      "Within 30 days",
      "Within 60 to 90 days",
      "Just exploring for now",
    ],
  },
];

const answerLabels = ["Biggest challenge", "Prior investment", "Readiness to move"];
const dmSans = { fontFamily: "'DM Sans', sans-serif" };

export function ContactForm() {
  const [state, handleSubmit] = useForm("mgorozzg");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(["", "", ""]);
  const [selecting, setSelecting] = useState(false);
  const [somethingElseText, setSomethingElseText] = useState("");
  const [showSomethingElse, setShowSomethingElse] = useState(false);

  const selectOption = (optionText: string, questionIdx: number) => {
    if (questionIdx === 0 && optionText === "Something else") {
      const updated = [...answers];
      updated[0] = "Something else";
      setAnswers(updated);
      setShowSomethingElse(true);
      return;
    }

    setSelecting(true);
    setShowSomethingElse(false);
    const updated = [...answers];
    updated[questionIdx] = optionText;
    setAnswers(updated);
    setTimeout(() => {
      setSelecting(false);
      setStep(questionIdx + 1);
    }, 320);
  };

  const handleSomethingElseNext = () => {
    if (!somethingElseText.trim()) return;
    const updated = [...answers];
    updated[0] = somethingElseText.trim();
    setAnswers(updated);
    setShowSomethingElse(false);
    setStep(1);
  };

  const progressDots = [0, 1, 2, 3];

  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "#E6FFFA" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#00B09B" strokeWidth="1.5" />
            <path d="M8 12l3 3 5-5" stroke="#00B09B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-[20px] font-semibold text-[#1A2233] mb-2" style={dmSans}>
          You're all set.
        </h3>
        <p className="text-[14px] text-gray-500 font-light leading-relaxed">
          Stephen will review your answers and be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <div style={dmSans}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1.5 flex-1">
          {progressDots.map((i) => (
            <div
              key={i}
              className="h-1 rounded-full flex-1 transition-all duration-300"
              style={{
                background: i <= step ? "#00B09B" : "#E4E8EE",
                opacity: i === step ? 0.5 : 1,
              }}
            />
          ))}
        </div>
        {step > 0 && step < 4 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="text-[13px] text-gray-400 hover:text-[#1A2233] transition-colors ml-4 flex items-center gap-1"
            style={dmSans}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
        )}
      </div>

      {step < 3 && (
        <div>
          <p className="text-[11px] font-medium tracking-[0.06em] uppercase text-gray-400 mb-2">
            {questions[step].label}
          </p>
          <h3 className="text-[18px] font-semibold text-[#1A2233] mb-5 leading-snug">
            {questions[step].text}
          </h3>
          <div className="flex flex-col gap-2">
            {questions[step].options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => selectOption(opt, step)}
                className="text-left px-4 py-3.5 rounded-xl text-[14px] transition-all duration-150 leading-snug"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  border: answers[step] === opt || (opt === "Something else" && showSomethingElse)
                    ? "1.5px solid #00B09B"
                    : "0.5px solid #E4E8EE",
                  background: answers[step] === opt || (opt === "Something else" && showSomethingElse)
                    ? "#E6FFFA"
                    : "#fff",
                  color: answers[step] === opt || (opt === "Something else" && showSomethingElse)
                    ? "#1A2233"
                    : "#4A5568",
                  fontWeight: answers[step] === opt || (opt === "Something else" && showSomethingElse)
                    ? 500
                    : 400,
                }}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Something else text input */}
          {showSomethingElse && (
            <div className="mt-3">
              <input
                type="text"
                autoFocus
                value={somethingElseText}
                onChange={(e) => setSomethingElseText(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleSomethingElseNext(); }}
                placeholder="Tell us what's on your mind..."
                className="w-full px-4 py-3 rounded-xl text-[14px] outline-none transition-colors"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  border: "1.5px solid #00B09B",
                  color: "#1A2233",
                }}
              />
              <button
                type="button"
                onClick={handleSomethingElseNext}
                disabled={!somethingElseText.trim()}
                className="mt-2 w-full py-3 rounded-xl text-[14px] font-medium text-white transition-colors duration-150"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: somethingElseText.trim() ? "#1A2233" : "#CBD5E0",
                  cursor: somethingElseText.trim() ? "pointer" : "not-allowed",
                }}
                onMouseEnter={(e) => { if (somethingElseText.trim()) (e.currentTarget.style.background = "#00B09B"); }}
                onMouseLeave={(e) => { if (somethingElseText.trim()) (e.currentTarget.style.background = "#1A2233"); }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h3 className="text-[17px] font-semibold text-[#1A2233] mb-1 leading-snug">
            One last thing — how do we reach you?
          </h3>
          <p className="text-[13px] text-gray-400 font-light mb-4 leading-relaxed">
            Here is what you told us. Add your details and we will be in touch.
          </p>

          <div className="rounded-xl p-4 mb-5 text-[13px] leading-[1.8]" style={{ background: "#F5F7FA" }}>
            {answers.map((a, i) => (
              <div key={i} className={i < 2 ? "mb-2" : ""}>
                <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400 block">
                  {answerLabels[i]}
                </span>
                <span className="text-[#1A2233] font-medium">{a}</span>
              </div>
            ))}
          </div>

          <input type="hidden" name="Biggest challenge" value={answers[0]} />
          <input type="hidden" name="Prior investment" value={answers[1]} />
          <input type="hidden" name="Readiness to move" value={answers[2]} />

          <div className="flex flex-col gap-3">
            <div>
              <label className="block text-[13px] font-medium text-gray-500 mb-1.5">Your name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Jane Smith"
                className="w-full px-4 py-3 rounded-xl text-[14px] outline-none transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", border: "0.5px solid #E4E8EE" }}
                onFocus={(e) => (e.target.style.borderColor = "#00B09B")}
                onBlur={(e) => (e.target.style.borderColor = "#E4E8EE")}
              />
              <ValidationError field="name" prefix="Name" errors={state.errors} className="text-[12px] text-red-500 mt-1" />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-gray-500 mb-1.5">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Acme Inc."
                className="w-full px-4 py-3 rounded-xl text-[14px] outline-none transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", border: "0.5px solid #E4E8EE" }}
                onFocus={(e) => (e.target.style.borderColor = "#00B09B")}
                onBlur={(e) => (e.target.style.borderColor = "#E4E8EE")}
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-gray-500 mb-1.5">Work email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="jane@company.com"
                className="w-full px-4 py-3 rounded-xl text-[14px] outline-none transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", border: "0.5px solid #E4E8EE" }}
                onFocus={(e) => (e.target.style.borderColor = "#00B09B")}
                onBlur={(e) => (e.target.style.borderColor = "#E4E8EE")}
              />
              <ValidationError field="email" prefix="Email" errors={state.errors} className="text-[12px] text-red-500 mt-1" />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-gray-500 mb-1.5">
                Phone <span className="font-light text-gray-300">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="(123) 456-7890"
                className="w-full px-4 py-3 rounded-xl text-[14px] outline-none transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", border: "0.5px solid #E4E8EE" }}
                onFocus={(e) => (e.target.style.borderColor = "#00B09B")}
                onBlur={(e) => (e.target.style.borderColor = "#E4E8EE")}
              />
            </div>

            <ValidationError errors={state.errors} className="text-[13px] text-red-500" />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3.5 rounded-xl text-[15px] font-medium text-white transition-colors duration-150 mt-1"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: state.submitting ? "#718096" : "#1A2233",
                cursor: state.submitting ? "not-allowed" : "pointer",
              }}
              onMouseEnter={(e) => { if (!state.submitting) (e.currentTarget.style.background = "#00B09B"); }}
              onMouseLeave={(e) => { if (!state.submitting) (e.currentTarget.style.background = "#1A2233"); }}
            >
              {state.submitting ? "Sending..." : "Let's talk"}
            </button>

            <p className="text-[12px] text-gray-300 text-center">
              We'll be in touch within one business day.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
