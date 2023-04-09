import img1 from "../assets/images/img1.png";

export default function Home() {
    return (
        <article className="grid grid-cols-[2fr,1fr] p-10 gap-10">
            <div data-aos="zoom-out-right">
                <img
                    src={img1}
                    alt=""
                    className="object-cover w-full h-full "
                />
            </div>
            <div className="flex items-center px-8">
                <h1
                    className="text-[#E2B588] text-5xl max-w-[15ch] leading-[5rem]
                            before:content-empty before:block before:bg-quoteStart before:w-8 before:h-8 
                            before:bg-contain before:bg-no-repeat before:bg-center  
                            after:content-empty after:block after:bg-quoteEnd after:w-8 after:h-8 
                            after:bg-contain after:bg-no-repeat after:bg-center after:ml-auto
                            "
                    data-aos="zoom-out-left"
                >
                    Experience the beauty of world tourism destinations in a
                    whole new dimension with
                </h1>
            </div>
        </article>
    );
}
