import CustomTextInput from "@/components/form/CustomTextInput";
import { useForm } from "react-hook-form";
import { Button, KeyboardAvoidingView, ScrollView } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { countrySchema } from "@/schemas/country.schema";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import useCountries from "@/store/useCountriesStore";
import { Country } from "@/types/countries.type";
import { useEffect } from "react";
import { getCountriesById } from "@/services/countries";

const UpdateCountryScreen = () => {
  const { updateCountryById } = useCountries();
  const { id } = useLocalSearchParams();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Omit<Country, "_id">>({
    resolver: zodResolver(countrySchema),
  });
  const router = useRouter();

  useEffect(() => {
    getCountriesById(id as string).then((country) => {
      setValue("name", country.name);
      setValue("population", country.population.toString());
      setValue("region", country.region);
    });
  }, []);

  const submit = async (data: Omit<Country, "_id">) => {
    await updateCountryById({
      ...data,
      _id: id as string,
    });
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
          title="Update"
          disabled={isSubmitting}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UpdateCountryScreen;
