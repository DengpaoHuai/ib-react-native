import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { StyleSheet, Text, TextInput } from "react-native";

type RulesType<T extends FieldValues> = Omit<
  RegisterOptions<T, "name">,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

type CustomTextInputProps<T extends FieldValues> = {
  control: Control<T> | undefined;
  rules: RulesType<T> | undefined;
  name: string;
  placeholder: string;
  error: string | undefined;
};

function CustomTextInput<T extends FieldValues>({
  control,
  error,
  name,
  placeholder,
  rules,
}: CustomTextInputProps<T>) {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
        name={name}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "white",
  },
  error: {
    color: "red",
  },
});

export default CustomTextInput;
