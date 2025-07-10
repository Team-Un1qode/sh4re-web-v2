import * as S from "./style";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonBox = styled.div`
  background: linear-gradient(
    90deg,
    rgba(182, 182, 182, 0.19) 25%,
    rgba(182, 182, 182, 0.3) 50%,
    rgba(182, 182, 182, 0.19) 75%
  );
  background-size: 200px 100%;
  animation: ${shimmer} 15s infinite;
  border-radius: 4px;
`;

const SkeletonProfileIcon = styled(SkeletonBox)`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
`;

const SkeletonName = styled(SkeletonBox)`
  width: 4rem;
  height: 1.5rem;
  border-radius: 4px;
`;

const SkeletonToggle = styled(SkeletonBox)`
  width: 44px;
  height: 24px;
  border-radius: 12px;
`;

const AccountSkeleton = () => {
  return (
    <S.Profile>
      <SkeletonProfileIcon />
      <SkeletonName />
      <SkeletonToggle />
    </S.Profile>
  );
};

export default AccountSkeleton;
