type Props = {
  title: string;
  description: string;
};

export const HeadStep = ({ title, description }: Props) => {
  return (
    <>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-400 mb-10 mt-2">{description}</p>
    </>
  );
};
