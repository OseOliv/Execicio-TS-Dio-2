import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const bangBank = {
    login: false
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    

    it('Deve retornar o objeto no localStorage com a chave bangbank', ()=> {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('bangbank')
    })

    it('Deve criar o objeto do localStorage', () => {
       
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('bangbank', JSON.stringify(bangBank) )
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(bangBank)
        expect(mockSetItem).toHaveBeenCalledWith('bangbank', JSON.stringify(bangBank) )
    })
})