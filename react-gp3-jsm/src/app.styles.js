import styled, { keyframes } from 'styled-components';

const scaleUpCenter = keyframes`
0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
`;

export const Wrapper = styled.div``;

export const GradientBg = styled.div`
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );
`;

export const GradientText = styled.div`
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SectionPadding = styled.div`
  padding: 4rem 6rem;
  @media screen and (max-width: 700px) {
    padding: 4rem;
  }
  @media screen and (max-width: 550px) {
    padding: 4rem 2rem;
  }
`;

export const SectionMargin = styled.div`
  margin: 4rem 6rem;
  @media screen and (max-width: 700px) {
    margin: 4rem;
  }
  @media screen and (max-width: 550px) {
    margin: 4rem 2rem;
  }
`;

export const ScaleUpCenter = styled.div`
  ${(props) =>
    props.active &&
    `
    animation: ${scaleUpCenter} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  `}
`;
