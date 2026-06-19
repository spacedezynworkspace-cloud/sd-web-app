import Image from 'next/image';

export default function DezynLabPage() {
  return (
    <div className="sm:h-[800px] relative items-center pt-64  dark:bg-black h-[650px] px-4 flex sm:flex-row flex-col justify-center w-full sm:gap-20 ">
      <div className="h-[230px]">
        <div className="absolute inset-0 z-10">
          <Image
            src="https://res.cloudinary.com/dcd8gvgup/image/upload/v1781873699/LX_AZ85_HOM_Magni_16_sfmlin.jpg"
            className="w-full h-full object-cover"
            alt="Sofa background image"
            width={100}
            height={100}
            loading="lazy"
            quality={100}
          />
        </div>
      </div>

      <div className="block bg-white  rounded-2xl shadow">
        <div
          className="hs-form-frame"
          data-region="eu1"
          data-form-id="02679091-3eb9-4281-847c-7b30d0f77ee5"
          data-portal-id="148723280"
        ></div>
      </div>
    </div>
  );
}
