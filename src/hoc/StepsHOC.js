import Vue from "Vue";
import Steps from "../components/Steps.vue";

const withSteps = WrappedComponent => {
  const originalProps = WrappedComponent.props || [];
  
  return Vue.component("withStepsItem", {
    render(createElement) {
      return createElement(WrappedComponent, {
        props: {
          ...originalProps,
          isFirstStep: this.isFirstStep,
          isLastStep: this.isLastStep,
          isSelected: this.isSelected,
          count: this.count,
          text: this.text,
          onClickSteps: this.onClickSteps
        }
      });
    },
    props: [...originalProps]
  });
};

export const StepsWithItem = withSteps(Steps);
