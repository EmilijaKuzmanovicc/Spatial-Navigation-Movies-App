import styled from "styled-components";

export const MediaListContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

export const MediaListWraper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MediaListScroll = styled.div`
  overflow-y: hidden;
  flex-shrink: 1;
  -ms-overflow-style: none;
  scrollbar-width: none;
  animation: fadeIn 0.5s ease;
  overflow-x: auto;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
