import React, { useEffect } from "react";
import { Twitt } from "../../lib/types";
import { Wrapper } from "../generic/wrapper/styles";
import { UlList } from "../generic/list/style";

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
          <img
            style={{ borderRadius: "50%", width: "30px", height: "30px" }}
            src={
              twitt.author.img
                ? twitt.author.img
                : "https://iconape.com/wp-content/png_logo_vector/avatar-4.png"
            }
            alt='avatar post'
          />
          <div>
            {twitt.author.firstname} {twitt.author.lastname}
          </div>
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
      <UlList>{mapTwitts}</UlList>
    </Wrapper>
  );
};

export default List;
