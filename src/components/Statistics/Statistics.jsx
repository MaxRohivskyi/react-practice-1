import { StatisticItem } from "components";
import { StatisticsList, StatisticTitle } from "./Statistics.styled";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdPeople, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiTreeDoor } from "react-icons/gi";

export const Statistics = ({ title, statistics }) => {
  const icons = [
    <FaRegThumbsUp />,
    <MdPeople />,
    <MdOutlineProductionQuantityLimits />,
    <GiTreeDoor />,
  ];

  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {statistics.map(({ id, total, title }, index) => (
          <StatisticItem
            key={id}
            icon={icons[index]}
            title={title}
            total={total}
          />
        ))}
      </StatisticsList>
    </>
  );
};
