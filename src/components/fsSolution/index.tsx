import Typography from "@/utils/Typography";
import Image from "next/image";

const hasselData = [
  {
    title: "Centralize All Orders",
    description:
      "Stop juggling between WhatsApp, Instagram, and TikTok. FlexShop brings all your orders into one simple dashboard, clear, fast, and easy to manage.",
    image: "/images/socialmedia-trade.webp",
  },
  {
    title: "Manage Inventory RealTime",
    description:
      "No more guessing or overselling. FlexShop updates your stock instantly as items are sold, helping you stay organized and avoid customer disappointment.",
    image: "/images/realInventory.webp",
  },
  {
    title: "Track Deliveries Easily",
    description:
      "Keep customers happy with transparent delivery updates. From dispatch to doorstep, you and your buyers can see exactly where an order is at any time.",
    image: "/images/deliveryMap.webp",
  },
  {
    title: "Send Receipts Instantly",
    description:
      "Look professional with just one click. FlexShop lets you generate invoices and receipts automatically, giving customers confidence and saving you hours of manual work.",
    image: "/images/sendReceipt.webp",
  },
];

export function FsSolution() {
  return (
    <div className="px-5 md:px-0">
      <div className="md:mt-[10rem] mt-[5rem] flex flex-col justify-center">
        <div>
          <Typography.Headers className="md:text-[250px] text-[90px]">
            FlexShop
          </Typography.Headers>
        </div>
        <div className="">
          <Typography.Text className="text-center md:w-[70%] mx-auto md:text-[20px] md:font-primary md:font-[300]">
            Lightweight, mobile-first platform designed for social sellers. It
            simplifies the messy process of running a business on social media,
            so traders can focus on what really matters, selling.
          </Typography.Text>
        </div>
      </div>
      <div className="md:mt-16 mt-10 md:w-[60%] mx-auto md:grid grid-cols-2 gap-y-10 space-y-5 md:space-y-0 items-center">
        {hasselData.map((el, i) => (
          <div key={i}>
            <div
              className={`border rounded-xl w-fit overflow-hidden border-gray-200 relative `}
            >
                <div className="w-full md:w-[396px] h-[400px] md:h-[565px] overflow-hidden rounded-md">
                <Image
                  className="object-cover w-full h-full"
                  src={el.image}
                  alt={el.title}
                  width={396}
                  height={565}
                  priority
                  sizes="(max-width: 768px) 100vw, 396px"
                />
                </div>
              <div
                className={`flex justify-center  absolute z-50 ${
                  i == 1 || i == 2
                    ? "bottom-0 left-0"
                    : i % 2 == 0
                    ? "left-0 top-0"
                    : " top-0"
                }`}
              >
                <div className={`flex flex-col items-start space-y-2 p-5`}>
                  <Typography.Headers className="text-left md:font-[500]">
                    {el.title}
                  </Typography.Headers>
                  <Typography.Text className="">
                    {el.description}
                  </Typography.Text>
                </div>
              </div>
              {i == 0 || i == 3 ? (
                <div
                  className="absolute top-0 left-0 w-full h-[60%] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, white 20%, transparent 100%)",
                  }}
                />
              ) : (
                <div
                  className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, white 20%, transparent 100%)",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
