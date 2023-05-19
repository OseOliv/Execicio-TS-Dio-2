import { Login } from "./login";

const mockSetIsLoggedIn = jest.fn();


// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useContext: () => ({
//     setIsLoggedIn: mockSetIsLoggedIn,
//   }),
// }));

// jest.mock('react-router-dom', ()=> ({
//   ...jest.requireActual('react-router-dom') as any,
//   useNavigate: () => mockNavigate
// }))

describe("Login", () => {

  const mockEmail = "oseas@oseas.com";

  it("Deve exibir um alert com boas vindas caso o email seja valido", async () => {
    const response = await Login(mockEmail);
    expect(response).toBeTruthy()
  });

  it("Deve exibir um error caso o email seja invalido", async () => {
   const response = await Login("email@invalido.com");
    expect (response).toBeFalsy()
  });
});
