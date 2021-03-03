import React, { useEffect } from "react";
import { Twitt } from "../../lib/types";
import { Wrapper } from "../generic/wrapper/styles";

interface Props {
  twitts: Twitt[];
  loadTwitts: () => void;
}

const List: React.FC<Props> = ({ twitts, loadTwitts }) => {
  useEffect(() => {
    loadTwitts();
  }, []);

  const mapTwitts = twitts ? (
    twitts.map((twitt) => {
      return (
        <li key={twitt._id}>
          <div>AVATAR</div>
          <div>{twitt.author}</div>
          <div>{twitt.content}</div>
          <div>{twitt.updatedAt}</div>
        </li>
      );
    })
  ) : (
    <div>No twitts yet!</div>
  );

  return (
    <Wrapper>
      <ul>
        <li>Twitt #1 - {twitts[0].content} - here</li>
        {mapTwitts}
      </ul>
    </Wrapper>
  );
};

export default List;
