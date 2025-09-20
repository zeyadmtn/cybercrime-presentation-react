import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import bg from '/bg.png';

function Page1View() {
    const location = useLocation();
    const item = location.state;
    const data = item?.page1Data;
    const navigate = useNavigate();
    const contentRef = useRef(null);

    // Go to strategy page
    const goToNextPage = (item) => {
        navigate('/strategy', { state: item });
    };

    // Go back on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contentRef.current && !contentRef.current.contains(event.target)) {
                navigate(-1); // Go back
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navigate]);

    if (!data) return <div>No data found</div>;

    return (
        <main
            className="min-h-screen text-white bg-cover bg-center px-10 py-6"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Header with Logos */}
            <div className="flex justify-between items-center mb-20">
                <img src="/logo1.png" alt="Logo 1" className="h-auto w-full max-w-[20vw]" />
                <img src="/logo2.png" alt="Logo 2" className="h-auto w-full max-w-[20vw]" />
            </div>

            {/* Content Block */}
            <div
                id="content"
                ref={contentRef}
                className="flex flex-col max-w-[85dvw] mx-auto h-full"
            >
                {/* Title */}
                <h1 className="text-5xl font-semibold text-center mb-5">{data.title}</h1>

                {/* Content Grid */}
                <div className="flex flex-row gap-x-6 h-[60dvh] items-start">
                    {/* Left Column */}
                    <div className="w-[65%] flex flex-col h-full gap-8 items-start">
                        <video
                            src={data.videoUrl}
                            controls={false}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full rounded-lg shadow-lg ] h-auto object-contain"
                        />

                    </div>

                    {/* Right Column */}
                    <div className="w-[35%]  h-full flex flex-col gap-8 justify-between">
                        <p className="text-xl leading-relaxed">{data.longDescription}</p>

                        {/* Prevention Themes */}
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold mb-4">{data.listTitle}</h2>
                            <ul className="text-lg grid-cols-2 grid w-full space-y-1 list-disc list-inside">
                                {data.listItems.map((item, index) => (
                                    <li className="col-span-1" key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div
                            onClick={() => goToNextPage(item)}
                            className="flex items-center text-center gap-4  mt-auto group cursor-pointer"
                        >
                            <span className="text-3xl font-bold">{data.btnText}</span>
                            <div className="w-full h-full max-w-[4vw] group-hover:scale-125 transition-all duration-300 ease-in-out">
                                <svg fill="#ffffff" version="1.1" viewBox="0 0 512 512" stroke="#ffffff">
                                    <polygon points="512,261.5 298.7,90.8 298.7,218.8 0,218.8 0,304.2 298.7,304.2 298.7,432.2 "></polygon>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page1View;
