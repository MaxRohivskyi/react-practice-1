import { BiDollarCircle } from "react-icons/bi";
import { FcBullish, FcBearish } from "react-icons/fc";
import { ForbesItem, Avatar, Name, Capital } from "./ForbesListItem.styled";
import PropTypes from "prop-types";
import { theme } from "styles/theme";

export const ForbesListItem = ({ list }) => {
  return (
    <div>
      {list.map(({ id, avatar, name, capital, isIncrease }) => (
        <ForbesItem key={id}>
          <Avatar src={avatar} alt={name} />
          <Name>{name}</Name>
          <Capital>
            {capital} <BiDollarCircle color={theme.colors.accent} size={22} />
            {isIncrease ? <FcBullish /> : <FcBearish />}
          </Capital>
        </ForbesItem>
      ))}
    </div>
  );
};

ForbesListItem.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      capital: PropTypes.number.isRequired,
      isIncrease: PropTypes.bool.isRequired,
    })
  ),
};
