import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border-radius: 4px;
  overflow: hidden;
  background: white;
  flex: 1 1 0%;
`;

export const Title = styled.h4`
  font-size: 1.2rem;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  color: rgb(33, 37, 41);
  margin: 0px 0px 0.25rem;
`;

export const Contents = styled.p`
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 1rem;
  line-height: 1.45;
  height: 4rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: rgb(73, 80, 87);
  margin: 0px 0px 1.5rem;
  overflow: hidden;
`;

export const Date = styled.p`
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgb(134, 142, 150);
  margin: 0;
`;

export const Author = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
`;
