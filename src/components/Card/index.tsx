import dayjs from "dayjs";
import { Crew } from "../../types/Launch.js";
import { Rocket } from "phosphor-react";
import Styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

type Props = {
  name: string;
  image: string;
  date: number;
  crew: Crew[];
  success: boolean;
  id: string;
};

export default function Card({ name, image, date, crew, success, id }: Props) {
  const navigate = useNavigate();
  const parsedDate = dayjs.unix(date);
  const status = success
    ? "success"
    : success === false
    ? "failed"
    : "not launched";

  return (
    <div className={Styles.glass_card}>
      <div className=" flex pl-2 pr-8 py-2 h-full items-center">
        {image ? (
          <img src={image} alt="patch" className="w-24 xs:w-28 md:w-36 " />
        ) : (
          <Rocket size={160} className="w-24 xs:w-28 md:w-36 " />
        )}
        <div className={Styles.text_box}>
          <h2 className={Styles.title}>{name}</h2>
          <div className="flex justify-between w-full">
            <p>Launch: {dayjs(parsedDate).format("DD/MM/YY")}</p>
            <p>Crew: {crew.length}</p>
          </div>
          <div className="w-full mb-6">
            <p>Status: {status}</p>
          </div>
          <button
            className="btn_glass text-[0.7rem]"
            onClick={() => {
              navigate(`/${id}`);
            }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
