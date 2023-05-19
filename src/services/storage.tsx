interface IBangBank {
    login: boolean
}

const bangBank = {
    login: false
}

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("bangbank");
};

export const createLocalStorage = (): void => {
    localStorage.setItem('bangbank', JSON.stringify(bangBank))
}

export const changeLocalStorage = (bangBank: IBangBank): void => {
localStorage.setItem('bangbank', JSON.stringify(bangBank))
}