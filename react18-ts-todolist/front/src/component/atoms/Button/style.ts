import styled, { css } from 'styled-components';

export const BasicButton = styled.button`
  /* font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; */
  font-weight: 700;
  border: 2px solid #31d4d5;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  background-color: #ffffff;
  box-sizing: border-box;

  font-size: 12px;
  padding: 10px 16px;

  &:hover {
    border: 2px solid linear-gradient(to right,#d0de31 0%,#31d4d5 99%);
    color: #ffffff;
    background-image: linear-gradient(to right,#d0de31 0%,#31d4d5 99%);
  }
`;