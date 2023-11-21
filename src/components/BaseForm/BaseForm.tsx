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
} from "./BaseForm.styles";
import CheeseSelect, { cheeseSchema } from "../ConfigureBase/CheeseSelect";
import BreadCarouseSelect, {
  breadSchema,
} from "../ConfigureBase/BreadCarouseSelect";
import MeatSelect, { meatSchema } from "../ConfigureBase/MeatSelect";
import DressingCarousel, {
  dressingSchema,
} from "../ConfigureBase/DressingCarousel";
import VegetablesOptions, {
  vegetablesSchema,
} from "../ConfigureBase/VegetablesOptions";
import styled from "styled-components";
import Dices from "../../arrows/Dices.svg";
import ConfigureExtras from "../ConfigureExtras/ConfigureExtras";
import FinalizeOrder from "../FinalizeOrder/FinalizeOrder";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { paniniNameSchema } from "../FinalizeOrder/PaniniName";
import { cuterlySchema } from "../FinalizeOrder/Cutlery";
import { napkinsSchema } from "../FinalizeOrder/Napkins";
import { toppingSchema } from "../ConfigureExtras/Topping";
import { servingSchema } from "../ConfigureExtras/Serving";
import { spreadsSchema } from "../ConfigureExtras/Spreads";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { eggSchema } from "../ConfigureExtras/EggSelect";
import RandomizedButton from "./RandomizedButton";
import VegeOptions from "./VegeOptions";
import { device } from "../../GlobalStyle";
import SuccesAnimationScreen from "../../pages/SuccesAnimationScreen";

interface SandwichPayload {
  sandwichName: string;
  cutlery: boolean;
  napkins: boolean;
  base: {
    bread: "FULL GRAIN" | "WHEAT";
    cheese: Array<"MOZZARELLA" | "STRACIATELLA" | "EDAM" | "GOUDA">;
    meat: Array<"SALAMI" | "HAM" | "BACON" | "CHICKEN">;
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
  extras: {
    egg: Array<"FRIED EGG" | "OMELET" | "SCRAMBLED EGG">;
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

  @media ${device.mobile} {
    /* left: 0;
    transform: translateX(0); */
    flex-direction: column;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    meat: meatSchema,
  }),
  extras: z.object({
    topping: toppingSchema,
    serving: servingSchema,
    spreads: spreadsSchema,
    egg: eggSchema,
  }),
});

const BaseForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const methods = useForm<SandwichPayload>({
    resolver: zodResolver(sandwichSchema),
    defaultValues: {
      base: {
        cheese: ["EDAM"],
        meat: ["HAM"],
        vegetables: [],
      },
      extras: {
        topping: null,
        egg: ["FRIED EGG"],
        spreads: [],
      },
    },
  });

  const onSubmit = methods.handleSubmit((data: SandwichPayload) => {
    console.log(data);

    fetch("https://training.nerdbord.io/api/v1/panini-creator/order", {
      method: "POST",
      headers: {
        Authorization: "secret_token",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        if (data.imageUrl) {
          window.open(data.imageUrl, "_blank");
        }
        navigate("/success");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <MainHeader>
            <PaniniName>Panini Creator</PaniniName>
            {/* <RandomizedButton>
              <img src={Dices} alt="randomize panii" />
              <p>RANDOMIZED PANINI</p>
            </RandomizedButton> */}
            <RandomizedButton />
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
        </form>
      </FormProvider>
    </>
  );
};

export default BaseForm;
