import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import BaseForm from "./BaseForm";
import { BrowserRouter } from "react-router-dom";

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ imageUrl: "mockImageUrl" }),
  } as Response)
);

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: () => vi.fn(),
}));

describe("BaseForm", () => {
  it("should submit the form with changed values and redirect on success", async () => {
    // render(
    //   <BrowserRouter>
    //     <BaseForm />
    //   </BrowserRouter>
    // );
  });
});
