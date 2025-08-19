import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `count ${count}`;
  }, [count]);
  return <div> </div>;
}

export default useDocumentTitle;
