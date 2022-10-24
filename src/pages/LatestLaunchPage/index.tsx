import api from "../../services/api.js";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Launch } from "../../types/Launch.js";
import Details from "../../components/Details/index.js";

export default function LatestLaunchPage() {
  const [launch, setLaunch] = useState<Launch>();

  useEffect(() => {
    api
      .get(`/latest`)
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
