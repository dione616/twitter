import { Image } from "./styles";

interface Props {
  img?: string;
}

const Avatar: React.FC<Props> = ({ img }) => {
  return (
    <>
      <Image src={img} />
      {/* <UploadImage /> */}
    </>
  );
};

export default Avatar;
