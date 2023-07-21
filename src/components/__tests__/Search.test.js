import "@testing-library/jest-dom";
import { render, act, waitFor } from "@testing-library/react";
import Body from "../Body";
import { RESTAURANT_DATA } from "../../Mocks/data";
// import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on HomePage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(8);
  console.log(shimmer);
});

test("Search results in HomePage", async () => {
  //   act(() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
  //   });
});
