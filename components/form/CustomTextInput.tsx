import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput } from "react-native";

type RulesType<T extends FieldValues> = Omit<
  RegisterOptions<T, "name">,
  "valueAsDate" | "disabled"
>;

type CustomTextInputProps<T extends FieldValues> = {
  control: Control<T> | undefined;
  rules: RulesType<T> | undefined;
  name: string;
  placeholder: string;
  error: string | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
};

function CustomTextInput<T extends FieldValues>({
  control,
  error,
  name,
  placeholder,
  rules,
  keyboardType,
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
            keyboardType={keyboardType}
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
