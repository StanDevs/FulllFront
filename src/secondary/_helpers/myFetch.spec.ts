import myFetch from "./myFetch";

describe("My fetch", () => {
  beforeEach(() => {
    //@ts-ignore
    if (global.fetch.mockClear) global.fetch.mockClear();
  });
  it("Should fetch and return data", async () => {
    // GIVEN
    const data = { key1: "my super data 1", key2: "my super data 1" };

    jest
      .spyOn(global, "fetch")
      //@ts-ignore
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(data) })
      );

    // WHEN
    const response = await myFetch("randomUrl");

    // THEN
    expect(response).toEqual(data);
  });

  it("Should reject promise if query failed", async () => {
    // GIVEN
    const error = "EError";
    jest.spyOn(global, "fetch").mockImplementation(() => Promise.reject(error));

    // WHEN
    const _fetch = async () => await myFetch("randomUrl");

    // THEN
    expect(_fetch()).rejects.toBe(error);
  });
});
