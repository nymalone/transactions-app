import styled from "styled-components";

export const Header = styled.div`
  background: #f2f2f3;
  padding: 20px 16px 0;
  font-weight: 700;
`;

export const Label = styled.p`
  font-size: 14px;
  color: #070817;
`;

export const Value = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: #65a300;
  padding-bottom: 24px;

  &:nth-child(4) {
    letter-spacing: -0.04em;
  }
`;

export const Body = styled.div`

  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #f2f2f3;
  color: #454550;
`;

export const LeftContent = styled.div``;
export const RightContent = styled.div``;

export const User = styled.p`
  font-weight: 700;
  margin-bottom: 8px;
`;

export const TransactionDate = styled.p`
  font-weight: 400;
`;

export const Status = styled.p`
  font-weight: 400;
  margin-bottom: 8px;
`;

export const Amount = styled.p`
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-bottom: 32px;
  background-color: #fff;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

export const Error = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #bf0000;
`;
