import { createContext, useContext, useState } from "react";
import { Button, Modal, StyleSheet, Text } from "react-native";

type CustomModalContextType = {
  showModal: (title: string, description: string) => void;
  hideModal: () => void;
};

export const CustomModalContext = createContext<CustomModalContextType>(
  {} as CustomModalContextType
);

const useModal = () => useContext(CustomModalContext);

export const CustomModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visible, setVisible] = useState(false);

  const showModal = (title: string, description: string) => {
    setTitle(title);
    setDescription(description);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <CustomModalContext.Provider
      value={{
        showModal,
        hideModal,
      }}
    >
      <Modal visible={visible} animationType="slide" style={styles.modal}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Button title="Close" onPress={hideModal} />
      </Modal>
      {children}
    </CustomModalContext.Provider>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default useModal;
