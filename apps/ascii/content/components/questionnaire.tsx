import { QuestionnaireDemo } from "./demos/questionnaire-demo";
import type { ComponentDoc } from "./types";

export const doc: ComponentDoc = {
  title: "Questionnaire",
  description: "Multi-step form with progress and conditional questions.",
  sections: [
    {
      title: "default",
      code: `<Questionnaire>
  <QuestionnaireProgress step={1} total={3} />
  <QuestionnaireStep>
    <QuestionnaireQuestion>What are you deploying?</QuestionnaireQuestion>
    <QuestionnaireOptions>
      <QuestionnaireOption selected>A web app</QuestionnaireOption>
      <QuestionnaireOption>An API service</QuestionnaireOption>
    </QuestionnaireOptions>
  </QuestionnaireStep>
  <QuestionnaireFooter>
    <Button variant="ghost">Back</Button>
    <Button>Next</Button>
  </QuestionnaireFooter>
</Questionnaire>`,
      preview: <QuestionnaireDemo />,
    },
  ],
};
