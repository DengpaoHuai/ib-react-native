import CustomTextInput from "@/components/form/CustomTextInput";
import { useForm } from "react-hook-form";
import { Button, KeyboardAvoidingView, ScrollView } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { countrySchema } from "@/schemas/country.schema";
import { useRouter } from "expo-router";
import useCountries from "@/store/useCountriesStore";
import { Country } from "@/types/countries.type";

const CreateCountryScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Omit<Country, "_id">>({
    resolver: zodResolver(countrySchema),
  });
  const router = useRouter();
  const { addCountry } = useCountries();

  const submit = async (data: Omit<Country, "_id">) => {
    await addCountry(data);
    router.back();
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
          keyboardType="numeric"
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
