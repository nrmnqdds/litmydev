import React from "react";
import { Text } from "@chakra-ui/react";
import { LuMoonStar } from "react-icons/lu";

type Props = {
  dataProject: any;
  day: number;
};

function ProjectCard({ dataProject, day }: Props) {
  return (
    <div className="group relative h-48 flex items-center justify-center shadow-md bg-white rounded-md">
      <Text className="font-poppins text-xl font-extrabold text-primary-700 absolute left-5 top-5 group-hover:opacity-50">{`DAY ${day}`}</Text>
      {dataProject.is_ready && (
        <>
          <div className="group-hover:opacity-50">
            <div className="text-3xl opacity-50 absolute right-5 top-5">
              {dataProject.icon_to_use}
            </div>
            <div className="px-5 leading-tight">
              <Text className="font-semibold">{dataProject.title}</Text>
            </div>
            <div className="absolute bottom-3 right-5 ">
              <em>{dataProject.presenter_name} </em>
            </div>
          </div>

          <div className="opacity-0 group-hover:opacity-100 absolute">
            <button className="rounded-lg px-5 py-2 bg-primary-400 flex flex-row items-center">
              <LuMoonStar className="text-white" />
              <Text className="ml-2 text-white">More</Text>
            </button>
          </div>
        </>
      )}

      {!dataProject.is_ready && (
        <div>
          <Text>Coming Soon</Text>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
