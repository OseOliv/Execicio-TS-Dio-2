import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { useParams , useNavigate} from "react-router-dom";
import { AppContext } from "../components/AppContext";


interface userData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string
}

export const Conta = () => {
  
  const [userData, setUserData] = useState<null | userData>();
  const actualData = new Date();
  const navigate = useNavigate()

  const {isLoggedIn} = useContext(AppContext)


  !isLoggedIn && navigate('/')
  

  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      const data: any | userData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  

  if(userData && id !== userData.id){
    navigate("/")

  }

  return (
    <>
      <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
          {userData === undefined || userData === null ? (
            <Center>
              <Spinner size="xl" color="aqua" />
            </Center>
          ) : (
            <>
              <CardInfo
                mainContent={`Bem vindo ${userData?.name}`}
                content={`${actualData.getDay()} - ${actualData.getMonth()} - ${actualData.getFullYear()} - ${actualData.getHours()}:${actualData.getMinutes()}`}
              />
              <CardInfo mainContent="Saldo" content={`R$${userData.balance}`} />
            </>
          )}
        </SimpleGrid>
      </Center>
    </>
  );
};
