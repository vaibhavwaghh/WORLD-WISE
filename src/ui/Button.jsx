import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    background: #4c00b4;
    color: #fff;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    background: #4c00b4;
    color: #fff;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.7rem;
    padding: 1.2rem 4rem;
    background: #4c00b4;
    color: #fff;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);

    &:hover {
    }
  `,
  secondary: css`
    color: var(--color-grey-600);

    border: 1px solid var(--color-grey-200);

    &:hover {
    }
  `,
  danger: css`
    color: var(--color-red-100);

    &:hover {
    }
  `,
};

const Button = styled.button`
  background-color: #4c00b4;
  cursor: pointer;
  color: #fff;
  border: none;
  margin-right: 4rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]};
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
