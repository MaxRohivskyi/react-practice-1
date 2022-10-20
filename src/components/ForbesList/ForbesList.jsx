import { ForbesListItem } from "./ForbesListItem/ForbesListItem";
import PropTypes from "prop-types";
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from "./ForbesList.styled";

export const ForbesList = ({ list }) => {
  return (
    <div>
      <LeaderBoard>
        <BoardHeader>
          <BoardTitle>
            <TitleTop>Forbes</TitleTop>
            <TitleBottom>Leader board</TitleBottom>
          </BoardTitle>
        </BoardHeader>

        <LeaderBoardProfiles>
          <ForbesListItem list={list} />
        </LeaderBoardProfiles>
      </LeaderBoard>
    </div>
  );
};

ForbesList.propTypes = {
  list: PropTypes.array.isRequired,
};
