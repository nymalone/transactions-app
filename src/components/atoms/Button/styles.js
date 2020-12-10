import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
`

export const ButtonContent = styled.button`
  width: 100%;
  height: 48px;
  outline: none;
  cursor:pointer;
  padding: 12px 0;
  border: none;
  border-radius: 8px;
  background-color: ${({ disabled }) => disabled ? '#ccc' : ' #3F2787'};
  box-shadow: ${({ disabled }) => disabled ? '' : '0px 4px 6px rgba(112, 82, 200, 0.3);'};
`

export const ButtonLabel = styled.div`
  display: flex;
  justify-content: center;

  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${({ disabled }) => disabled ? '#72737A' : ' #FFFFFF'};

  span {
    background-color:  #DFD5FF;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;

    svg {
      color: #3F2787;
      font-size: 14px;
      text-align: center;
      margin-left: 1px;
    }
  }
`
