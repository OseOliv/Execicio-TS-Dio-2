const conta = {
  email: "oseas@oseas.com",
  password: "123456",
  name: 'Oseas Oliveira',
  balance: 2000.00,
  id:'1',
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
