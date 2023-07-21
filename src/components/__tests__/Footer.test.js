import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Footer from "../Footer";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import UserContext from "../../utils/UserContext";

test("make sure Footer is Present", () => {
  const user = "Sasi";
  const footer = render(
    <StaticRouter>
      <Provider store={store}>
        <UserContext.Provider value={user}>
          <Footer />
        </UserContext.Provider>
      </Provider>
    </StaticRouter>
  );

  const userName = footer.getByTestId("userName");
  expect(userName.innerHTML).toBe("Sasi");
});
