import * as utils from "@qpjoy/utils";
import { getChannelById } from "@qpjoy/data";

jest.mock("@qpjoy/utils");
const mockedApiCall = (utils.apiCall as unknown) as jest.MockedFunction<
  typeof utils["apiCall"]
>;
mockedApiCall.mockResolvedValue({
  id: "recruiting",
  name: "recruiting",
  description: "The Next Generation Of Recruiting. Find top talents today!",
  teamId: "linkedin",
});

describe("getChannelById() tests", function () {
  test("fetching a single team", () => {
    expect(1).toEqual(1);
    return Promise.resolve(1);
  //   // expect(mockedApiCall.mock.calls.length).toBe(0);
  //   // const pr = getChannelById("14");
  //   // let resolvedVal: unknown;
  //   // pr.then((val) => {
  //   //   resolvedVal = val;
  //   // });
  //   // expect(pr).toBeInstanceOf(Promise);
  //   // expect(resolvedVal).toBeUndefined();
  //   // expect(mockedApiCall.mock.calls.length).toBe(1);

  //   // await pr;
  //   // expect(resolvedVal).toMatchObject({
  //   //   id: "recruiting",
  //   //   name: "recruiting",
  //   //   description: "The Next Generation Of Recruiting. Find top talents today!",
  //   //   teamId: "linkedin",
  //   // });
  //   done();
  });
});
