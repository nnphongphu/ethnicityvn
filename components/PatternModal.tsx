import ReactModal from "react-modal";
import { useRouter } from "next/router";
import PatternDetails from "./PatternDetails";
import styled from "styled-components";

export const PatternModal = () => {
  const router = useRouter();

  return (
    <ReactModal
      isOpen={!!router.query.patternId}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => router.back()}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 99999,
        },
        content: {
          width: "min(1150px, 95vw)",
          height: "min(650px, 95vh, 100%)",
          padding: "30px",
          borderRadius: "30px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "none",
        },
      }}
    >
      <PatternDetails />
      <CloseButton src="/closeButton.svg" onClick={() => router.back()} />
    </ReactModal>
  );
};

export default PatternModal;

const CloseButton = styled.img`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;
