import CustomTextInput from "@/components/form/CustomTextInput";
import { useForm } from "react-hook-form";
import { Button, KeyboardAvoidingView, ScrollView } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { countrySchema } from "@/schemas/country.schema";
import { createCountry } from "@/services/countries";
import { useDispatch } from "react-redux";
import { add } from "@/store/actions/countries.actions";
import { useRouter } from "expo-router";

type Country = z.infer<typeof countrySchema>;

const CreateCountryScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Country>({
    resolver: zodResolver(countrySchema),
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const submit = (data: Country) => {
    createCountry(data).then((country) => {
      dispatch(add(country));
      router.back();
    });
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
