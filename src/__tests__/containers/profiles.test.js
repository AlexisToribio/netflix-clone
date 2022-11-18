import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SelectProfileContainer } from "../../containers/profiles";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("<Profiles />", () => {
  it("renders the <Profiles />", () => {
    const history = createMemoryHistory();
    const user = { displayName: "Karl", photoURL: "profile.png" };
    const setProfile = jest.fn();
    const { getByTestId } = render(
      <Router history={history}>
        <SelectProfileContainer user={user} setProfile={setProfile} />
      </Router>
    );

    fireEvent.click(getByTestId("user-profile"));
    expect(setProfile).toHaveBeenCalled();
  });
});
