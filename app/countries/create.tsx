import CustomTextInput from "@/components/form/CustomTextInput";
import { useForm } from "react-hook-form";
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { countrySchema } from "@/schemas/country.schema";
import { createCountry } from "@/services/countries";

type Country = z.infer<typeof countrySchema>;

const CreateCountryScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Country>({
    resolver: zodResolver(countrySchema),
  });

  const submit = (data: Country) => {
    createCountry(data);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      behavior="padding"
      enabled
      keyboardVerticalOffset={80}
    >
      <ScrollView>
        <CustomTextInput<Country>
          control={control}
          error={errors.name ? errors.name.message : ""}
          name="name"
          placeholder="name"
          rules={{
            required: true,
          }}
        ></CustomTextInput>
        <CustomTextInput
          control={control}
          error={errors.population ? errors.population.message : ""}
          name="population"
          placeholder="population"
          rules={{
            required: true,
          }}
        ></CustomTextInput>
        <CustomTextInput
          control={control}
          error={errors.region ? errors.region.message : ""}
          name="region"
          placeholder="region"
          rules={{
            required: true,
          }}
        ></CustomTextInput>
        <Button
          onPress={handleSubmit(submit)}
          title="Create"
          disabled={isSubmitting}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateCountryScreen;
