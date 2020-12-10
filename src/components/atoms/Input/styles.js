import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  ${({ space }) => space ? 'margin-left: 8px;' : ''};
  ${({ space }) => space ? 'width: 128px;' : ''};

`

export const InputContent = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid #8B8B92;
  background: transparent;
  outline: none;
  color: #8B8B92;
  font-size: 16px;
  line-height: 24px;
  padding: 12px;
  z-index: 1;

  :focus ~ label {
    transform: translateY(-22px);
    margin-left: 10px; // ???
    padding: 0 4px;
    background: #fff;
    z-index: 3;
  }

  :focus {
    border-color: #595A63;
  }
`

const up = css`
  transform: translateY(-22px);
  margin-left: 10px;
  padding: 0 4px;
  background: #FFFFFF;
  z-index: 2;
`;

export const Label = styled.label`
  position: absolute;
  font-size: 16px;
  font-weight: 400;
  text-align: right;
  flex-basis: 10%;
  padding: 12px;
  color: #8B8B92;

  border-radius: 20px;
  transition: .4s;

  background: transparent;

  ${({ value }) => value ? up : ''};
`
