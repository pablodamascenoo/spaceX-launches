import api from "../../services/api.js";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Launch } from "../../types/Launch.js";
import Details from "../../components/Details/index.js";

export default function LaunchPage() {
  const { id } = useParams();
  const [launch, setLaunch] = useState<Launch>();

  useEffect(() => {
    api
      .get(`/${id}`)
      .then((obj) => {
        const { docs } = obj.data;
        const data = docs[0];
        setLaunch(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <main>{<Details launch={launch} />}</main>;
}
