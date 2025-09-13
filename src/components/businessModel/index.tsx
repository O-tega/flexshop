import Typography from "@/utils/Typography";
import Image from "next/image";

const BusinessModel = () => {
  const items = [
    {
      title: "Free to Start",
      subtitle:
        "No upfront costs. A small % on each order, so we succeed when our vendors succeed.",
      icon: "/images/smintegration.webp",
    },
    {
      title: "Future Upsell",
      subtitle:
        "Affordable subscriptions for advanced tools: analytics, customer targeting, bulk SMS/email, and compliance reporting.",
      icon: "/images/analytics.webp",
    },
    {
      title: "Partnerships",
      subtitle: "Integrations with local delivery and payment providers.",
      icon: "/images/businessModel.webp",
    },
  ];

  return (
    <div className="mt-10 relative py-10 px-5">
      <div className="text-center z-50">
        <Typography.Heading className="md:text-center md:text-[50px]">
          How We Make Money
        </Typography.Heading>
        <Typography.Text className="mt-3 text-[20px]">
          Our business model grows with our vendors
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
              <Typography.Text className="text-center w-[80%] mx-auto">
                {el.subtitle}
              </Typography.Text>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-full absolute top-0 opacity-80 -z-10">
        <Image
          className="object-cover w-full h-full"
          src="/images/greeenBackground.webp"
          alt="social media"
          width={800}
          height={1000}
          priority
        />
      </div>
    </div>
  );
};

export default BusinessModel;
