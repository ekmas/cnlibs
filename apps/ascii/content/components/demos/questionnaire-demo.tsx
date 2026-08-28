"use client";

import * as React from "react";

import { AsciiBox } from "@/components/ascii/ascii-box";
import { Button } from "@/components/ui/button";
import {
  Questionnaire,
  QuestionnaireFooter,
  QuestionnaireOption,
  QuestionnaireOptions,
  QuestionnaireProgress,
  QuestionnaireQuestion,
  QuestionnaireStep,
} from "@/components/ui/questionnaire";

const steps = [
  {
    question: "What are you deploying?",
    options: ["A web app", "An API service", "A background worker"],
  },
  {
    question: "Which environment first?",
    options: ["Staging", "Production", "Both"],
  },
  {
    question: "Notify the team on completion?",
    options: ["Yes, post to #deploys", "No, keep it quiet"],
  },
];

export function QuestionnaireDemo() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<number, string>>({});

  const current = steps[step];
  const isLast = step === steps.length - 1;
  const isFirst = step === 0;
  // Also how TS knows `current` is defined in the not-done branch below.
  const done = current === undefined;

  return (
    <AsciiBox padY={0} title="Deploy setup" tone="primary" width={44}>
      {done ? (
        <div className="flex flex-col gap-2">
          <p className="text-primary">Setup complete.</p>
          <ul className="flex flex-col gap-0.5 text-ascii-soft">
            {steps.map((s, i) => (
              <li key={s.question}>
                <span className="text-ascii-comment">{s.question} </span>
                {answers[i]}
              </li>
            ))}
          </ul>
          <div>
            <Button
              onClick={() => {
                setStep(0);
                setAnswers({});
              }}
              variant="outline"
            >
              Restart
            </Button>
          </div>
        </div>
      ) : (
        <Questionnaire>
          <QuestionnaireProgress step={step + 1} total={steps.length} />
          <QuestionnaireStep>
            <QuestionnaireQuestion>{current.question}</QuestionnaireQuestion>
            <QuestionnaireOptions>
              {current.options.map((option) => (
                <QuestionnaireOption
                  key={option}
                  onClick={() =>
                    setAnswers((prev) => ({ ...prev, [step]: option }))
                  }
                  selected={answers[step] === option}
                >
                  {option}
                </QuestionnaireOption>
              ))}
            </QuestionnaireOptions>
          </QuestionnaireStep>
          <QuestionnaireFooter>
            <Button
              disabled={isFirst}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              variant="ghost"
            >
              Back
            </Button>
            <Button
              disabled={!answers[step]}
              onClick={() => setStep((s) => s + 1)}
            >
              {isLast ? "Finish" : "Next"}
            </Button>
          </QuestionnaireFooter>
        </Questionnaire>
      )}
    </AsciiBox>
  );
}
