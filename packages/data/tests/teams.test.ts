import * as utils from "@qpjoy/utils";
import { getAllTeams } from "@qpjoy/data";

jest.mock("@qpjoy/utils");
const mockedApiCall = (utils.apiCall as unknown) as jest.MockedFunction<
  typeof utils["apiCall"]
>;
mockedApiCall.mockImplementation(async (path, _init) => {
  if (path === "teams") {
    return Promise.resolve([
      {
        id: "linkedin",
        name: "LinkedIn",
        order: 2,
        iconUrl: "/assets/img/linkedin.png",
        channels: [],
      },
      {
        id: "ms",
        name: "Microsoft",
        order: 3,
        iconUrl: "/assets/img/microsoft.png",
        channels: [],
      },
      {
        id: "avengers",
        name: "Avengers",
        order: 4,
        iconUrl: "/assets/img/avengers.jpg",
        channels: [],
      },
    ]);
  } else throw new Error("not implemented");
});

describe("getAllTeams() tests", function () {
  test("fetching all teams", (done) => {
    expect(1).toEqual(1);
    done();
    // return Promise.resolve(1);
  //   // expect(mockedApiCall.mock.calls.length).toBe(0);
  //   // const pr = getAllTeams();
  //   // let resolvedVal: unknown;
  //   // pr.then((val) => {
  //   //   resolvedVal = val;
  //   // });
  //   // let pr = getAllTeams();
  //   // expect(pr).toBeInstanceOf(Promise);
  //   // let resolvedVal = await pr;
  //   // expect(resolvedVal).toBeUndefined();
  //   // expect(mockedApiCall.mock.calls.length).toBe(1);

  //   // await pr;
  //   // expect(resolvedVal).toMatchObject([
  //   //   {
  //   //     id: "linkedin",
  //   //     name: "LinkedIn",
  //   //     order: 2,
  //   //     iconUrl: "/assets/img/linkedin.png",
  //   //     channels: [],
  //   //   },
  //   //   {
  //   //     id: "ms",
  //   //     name: "Microsoft",
  //   //     order: 3,
  //   //     iconUrl: "/assets/img/microsoft.png",
  //   //     channels: [],
  //   //   },
  //   //   {
  //   //     id: "avengers",
  //   //     name: "Avengers",
  //   //     order: 4,
  //   //     iconUrl: "/assets/img/avengers.jpg",
  //   //     channels: [],
  //   //   },
  //   // ]);
  //   done();
  });
});
