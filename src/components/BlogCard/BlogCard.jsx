import { formatDate, formatDateToNow } from "components/BlogCard/formatDate";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from "./BlogCard.styled";
export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  const result = formatDateToNow(formatDate(postedAt));
  return (
    <div>
      <Card>
        <CardHeader>
          <CardPoster src={poster} alt="card__image" />
        </CardHeader>
        <CardBody>
          <Tag>{tag}</Tag>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
          <UserBox>
            <Avatar src={avatar} alt="Jane Doe" />
            <UserInfo>
              <UserName>{name}</UserName>
              <Date>{result}</Date>
            </UserInfo>
          </UserBox>
        </CardFooter>
      </Card>
    </div>
  );
};

BlogCard.propTypes = {
  poster: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  postedAt: PropTypes.string,
};
