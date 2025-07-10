import { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";

// 지연시간 200ms을 기점으로 200미만 미노출 200이상 노출
// 스켈레톤 ux 연구 결과 1초 이상인 경우에만 스켈레톤 사용 -> 나중에 1000ms로 변경
const DeferredComponent = ({ children }: PropsWithChildren) => {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsDeferred(true);
    }, 200);
    return () => clearTimeout(timeOut);
  }, []);

  if (!isDeferred) return null;
  return <>{children}</>;
};

export default DeferredComponent;
