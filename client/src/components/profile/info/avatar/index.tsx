import { Image } from "./styles";

const Avatar = ({ img }: { img: string }) => {
  return (
    <>
      <Image src={img} />
      {/* <UploadImage /> */}
    </>
  );
};

export default Avatar;
