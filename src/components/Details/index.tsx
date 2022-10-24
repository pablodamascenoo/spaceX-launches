import { Launch } from "../../types/Launch.js";
import { UserCircle, Rocket } from "phosphor-react";
import Styles from "./index.module.css";
import dayjs from "dayjs";

type Props = {
  launch: Launch | undefined;
};
export default function Details({ launch }: Props) {
  const parsedDate = launch?.date_unix
    ? dayjs.unix(launch?.date_unix).format("DD/MM/YY hh:mm")
    : "";
  const status = launch?.success
    ? "success"
    : launch?.success === false
    ? "failed"
    : "not launched";

  console.log(launch?.links.youtube_id);

  return (
    <div className="w-[90%] h-screen">
      <div className={Styles.title_box}>
        {launch?.links.patch.small ? (
          <img
            src={launch.links.patch.small}
            alt="patch"
            className={Styles.launch_img}
          />
        ) : (
          <Rocket size={120} className={Styles.launch_img} />
        )}
        <div className={Styles.glass_div}>
          <h2>{launch?.name}</h2>
        </div>
      </div>
      <hr className="w-full" />
      <div className={Styles.info_box}>
        <div>
          <p>Flight number: {launch?.flight_number}</p>
          <p>Date of launch: {parsedDate}</p>
          <p>Status: {status}</p>
          {launch?.failures[0]?.reason ? (
            <div className="flex items-start gap-8">
              <p>Failure details:</p>
              <ul className="w-40 list-disc">
                <li className="text-sm">
                  Altitude: {launch.failures[0].altitude} meters
                </li>
                <li className="text-sm ">
                  Time: {launch.failures[0].time} seconds
                </li>
                <li className="text-sm ">
                  Reason: {launch.failures[0].reason}
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
          {launch?.details ? (
            <p className="mt-4 w-80">
              Details: <span className="text-sm">{launch.details}</span>
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className={Styles.crew_card}>
          <div className="px-4 py-4 flex h-full flex-col gap-2 items-center justify-center">
            {launch?.crew.length ? (
              launch?.crew.map((person) => (
                <div className="flex items-center w-full gap-6">
                  <UserCircle size={28} />
                  <p className="text-xs">{person.role}</p>
                </div>
              ))
            ) : (
              <p>No Crew</p>
            )}
          </div>
        </div>
      </div>
      {launch?.links.youtube_id ? (
        <div className={Styles.youtube}>
          <h2 className="text-2xl">Youtube Video</h2>
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${launch?.links.youtube_id}`}
          ></iframe>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
