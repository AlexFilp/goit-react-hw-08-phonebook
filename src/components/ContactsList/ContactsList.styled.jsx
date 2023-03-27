import styled from 'styled-components';

export const ListContainer = styled.div`
  position: relative;
  padding-top: 40px;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
