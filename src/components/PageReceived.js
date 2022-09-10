import TransactionContainer from "../common/Transaction";
import Input from "../common/Input";
import Button from "../common/Button";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PageReceived() {
  const navigate = useNavigate("");
  const { token } = useContext(UserContext);
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const body = {
    value: value,
    description: description,
    type: "entrada",
  };

  function joinReceived(event) {
    event.preventDefault();

    const request = axios.post("http://localhost:5000/transactions", body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    request.catch((response) => {
      console.log(response);
      alert("Informe o valor e a descrição da entrada de forma correta");
    });
    request.then(() => {
      navigate("/registros");
    });
  }
  
  return (
    <TransactionContainer>
      <h2>Nova entrada</h2>

      <form onSubmit={joinReceived}>
        <Input
          placeholder="Valor"
          value={value}
          type="number"
          required
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          placeholder="Descrição"
          value={description}
          type="text"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button>Salvar entrada</Button>
      </form>
    </TransactionContainer>
  );
}
