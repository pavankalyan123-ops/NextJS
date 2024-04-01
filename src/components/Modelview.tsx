import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  modelBody: React.JSX.Element;
  modelHeaderName: string;
  modelSubmitName: string;
}

const Modelview: React.FC<Props> = ({
  isOpen,
  onOpenChange,
  modelBody,
  modelHeaderName,
  modelSubmitName,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>{(onClose) => <></>}</ModalContent>
      </Modal>
    </>
  );
};

export default Modelview;
