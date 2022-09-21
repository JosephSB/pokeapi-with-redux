import { css, keyframes } from "styled-components";

const LoadKeyFrame = keyframes`
    0% {
        background-color: #ccc;
    }

    50% {
        background-color: #eee;
    }

    100% {
        background-color: #ccc;
    }
`;
const AppearKeyFrame = keyframes`
  from {
      opacity: 0;
    transform: translateY(30px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
`;
export const Load = ({ time = "5s", type = "infinite" } = {}) => {
  return css`
    background-color: #ccc;
    animation: ${time} ${LoadKeyFrame} ${type};
  `;
};
export const Appear = ({ time = "1s", type = "ease" } = {}) => {
  return css`
    animation: ${time} ${AppearKeyFrame} ${type};
  `;
};
