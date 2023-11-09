import {
  Container,
  Header,
  Bar,
  Bread,
  Cheese,
  Meat,
  Dressing,
  Vegetables,
  PaniniName,
  RandomizedButton,
} from "./BaseForm.styles";
import CheeseSelect, { cheeseSchema } from "../CheeseSelect";
import BreadCarouseSelect, { breadSchema } from "../BreadCarouseSelect";
import MeatSelect from "../MeatSelect";
import DressingCarousel, { dressingSchema } from "../DressingCarousel";
import VegetablesOptions, { vegetablesSchema } from "../VegetablesOptions";
import styled from "styled-components";
import Dices from "../../arrows/Dices.svg";
import ConfigureExtras from "../ConfigureExtras/ConfigureExtras";
import FinalizeOrder from "../FinalizeOrder/FinalizeOrder";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { paniniNameSchema } from "../FinalizeOrder/PaniniName";
import { cuterlySchema } from "../FinalizeOrder/Cutlery";
import { napkinsSchema } from "../FinalizeOrder/Napkins";
import { toppingSchema } from "../ConfigureExtras/Topping";
import { servingSchema } from "../ConfigureExtras/Serving";
import { spreadsSchema } from "../ConfigureExtras/Spreads";
import { useNavigate } from "react-router-dom";

interface SandwichPayload {
  sandwichName: string; // Max. 35 characters
  cutlery: boolean;
  napkins: boolean;
  base: {
    bread: "FULL GRAIN" | "WHEAT";
    cheese: Array<"MOZZARELLA" | "STRACIATELLA" | "EDAM" | "GOUDA">;
    dressing: Array<"OLIVE OIL" | "HONEY_MUSTARD" | "RANCH" | "MAYO">;
    vegetables: Array<
      | "SALAD"
      | "TOMATO"
      | "OBERGINE"
      | "BEETROOT"
      | "PICKLES"
      | "ONION"
      | "PEPPER"
      | "ASPARAGUS"
      | "CUCUMBER"
    >;
  };

  //   meat: Array<"SALAMI" | "HAM" | "BACON" | "CHICKEN">;
  //   dressing: Array<"OLIVE OIL" | "HONEY_MUSTARD" | "RANCH" | "MAYO">;
  //   vegetables: Array<
  //     | "SALAD"
  //     | "TOMATO"
  //     | "OBERGINE"
  //     | "BEETROOT"
  //     | "PICKLES"
  //     | "ONION"
  //     | "PEPPER"
  //     | "ASPARAGUS"
  //     | "CUCUMBER"
  //   >;
  // };
  extras: {
    //   egg: Array<"FRIED EGG" | "OMELET" | "SCRAMBLED EGG">;
    spreads: Array<"BUTTER" | "HUMMUS" | "GUACAMOLE">;
    serving: "COLD" | "WARM" | "GRILLED";
    topping: "SESAME" | null;
  };
}

const MainHeader = styled.div`
  width: calc(630px + 2px);
  margin-left: -1px;
  margin-right: -1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

////

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 468px;
  height: 69px;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 468px;
  height: 46px;
  background: black;
  border: none;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const sandwichSchema = z.object({
  sandwichName: paniniNameSchema,
  cutlery: cuterlySchema,
  napkins: napkinsSchema,
  base: z.object({
    bread: breadSchema,
    cheese: cheeseSchema,
    vegetables: vegetablesSchema,
    dressing: dressingSchema,
  }),
  extras: z.object({
    topping: toppingSchema,
    serving: servingSchema,
    spreads: spreadsSchema,
  }),
});

const BaseForm = () => {
  const navigate = useNavigate();
  const methods = useForm<SandwichPayload>({
    resolver: zodResolver(sandwichSchema),
    defaultValues: {
      base: {
        cheese: ["EDAM"],
      },
      extras: {
        topping: null,
      },
    },
  });

  const onSubmit = (data: SandwichPayload) => {
    console.log(data);
    navigate("/success");
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <MainHeader>
            <PaniniName>Panini Creator</PaniniName>
            <RandomizedButton>
              <img src={Dices} alt="randomize panii" />
              <p>RANDOMIZED PANINI</p>
            </RandomizedButton>
          </MainHeader>
          <Container>
            <Header>CONFIGURE BASE</Header>
            <Bar />
            <Bread>
              <BreadCarouseSelect />
            </Bread>
            <Bar />
            <Cheese>
              <CheeseSelect />
            </Cheese>
            <Bar />
            <Meat>
              <MeatSelect />
            </Meat>
            <Bar />
            <Dressing>
              <DressingCarousel />
            </Dressing>
            <Bar />
            <Vegetables>
              <VegetablesOptions />
            </Vegetables>
            <Bar />
          </Container>
          <ConfigureExtras />
          <FinalizeOrder />
          {/* <button type="submit">testing</button> */}
          <ButtonContainer>
            <Button type="submit">PLACE ORDER</Button>
          </ButtonContainer>
        </form>
      </FormProvider>
    </>
  );
};

export default BaseForm;
