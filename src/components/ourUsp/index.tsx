import Typography from "@/utils/Typography";
import Image from "next/image";

const Usp = () => {
  const items = [
    {
      title: "Social media integration",
      subtitle: "no need to move away from WhatsApp, TikTok, or Instagram.",
      icon: "/images/smintegration.webp",
    },
    {
      title: "Sales analytics",
      subtitle: "Gain valuable insights into your sales performance.",
      icon: "/images/analytics.webp",
    },
    {
      title: "Low cost and accessible",
      subtitle: "start free, pay only as you grow.",
      icon: "/images/businessModel.webp",
    },
  ];

  return (
    <div className="mt-10 py-10 px-5">
      <div className="text-center">
        <Typography.Heading className="md:text-center md:text-[50px]">
          Our Unique Selling Point
        </Typography.Heading>
        <Typography.Text className="mt-3 text-[20px]">
          FlexShop is mobile-first, affordable, and tailored to fit right into
          sellers’ daily workflow.
        </Typography.Text>
      </div>
      <div className="md:grid grid-cols-3 gap-5 mt-10 space-y-10 md:space-y-0">
        {items.map((el, i) => (
          <div key={i} className="flex flex-col items-center space-y-3">
            <div className="rounded-[20px] overflow-hidden">
              <Image
                className="object-cover w-[100px] h-[100px]"
                src={el.icon}
                alt={el.title}
                width={100}
                height={100}
                priority
              />
            </div>
            <div>
              <Typography.Headers className="text-[24px]">
                {el.title}
              </Typography.Headers>
              <Typography.Text className="text-center w-[70%] mx-auto">{el.subtitle}</Typography.Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usp;
