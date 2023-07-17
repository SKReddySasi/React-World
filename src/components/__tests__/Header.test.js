import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if Logo is Loaded
  //   const logo = header.getAllByTestId("logo");

  //   expect(logo[0].src).ToBe(
  //     "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
  //   );
});

test("Home Text should be on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const home = header.getByTestId("home");
  expect(home.innerHTML).toBe("HOME");
});

test("Offers text should be on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const offers = header.getByTestId("offers");
  expect(offers.innerHTML).toBe("OFFERS");
});

test("Cart items should be 0 on Rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const itemsZero = header.getByTestId("items-zero");
  expect(itemsZero.innerHTML).toBe("0");
});
